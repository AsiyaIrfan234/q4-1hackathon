# API Contracts: Digital Twin for Robot Simulation

**Feature**: 005-digital-twin
**Date**: 2025-12-30
**Input**: Functional requirements from `/specs/005-digital-twin/spec.md`

## Overview

API contracts for the Digital Twin module focusing on physics-based robot simulation, environment modeling, and virtual sensor simulation. These contracts define the interfaces for interaction with the simulation system.

## Simulation Control API

### Start Physics Simulation
**Endpoint**: `POST /api/v1/simulation/start`
**Description**: Starts a physics simulation with the specified robot model and environment

**Request**:
```json
{
  "simulation_id": "string",
  "robot_model": "string",
  "environment": "string",
  "physics_config": {
    "gravity": {"x": float, "y": float, "z": float},
    "time_step": float,
    "real_time_factor": float
  },
  "duration": "optional integer (seconds)"
}
```

**Response**:
```json
{
  "simulation_id": "string",
  "status": "running",
  "start_time": "timestamp",
  "physics_engine": "gazebo"
}
```

**Errors**:
- 400: Invalid robot model or environment
- 409: Simulation already running
- 500: Physics engine error

### Stop Simulation
**Endpoint**: `POST /api/v1/simulation/{simulation_id}/stop`
**Description**: Stops the specified simulation

**Response**:
```json
{
  "simulation_id": "string",
  "status": "stopped",
  "stop_time": "timestamp"
}
```

**Errors**:
- 404: Simulation not found
- 500: Failed to stop simulation

### Pause Simulation
**Endpoint**: `POST /api/v1/simulation/{simulation_id}/pause`
**Description**: Pauses the specified simulation

**Response**:
```json
{
  "simulation_id": "string",
  "status": "paused"
}
```

### Resume Simulation
**Endpoint**: `POST /api/v1/simulation/{simulation_id}/resume`
**Description**: Resumes the specified simulation

**Response**:
```json
{
  "simulation_id": "string",
  "status": "running"
}
```

## Robot Model API

### Create Robot Model
**Endpoint**: `POST /api/v1/robot-models`
**Description**: Creates a new robot model for use in simulations

**Request**:
```json
{
  "name": "string",
  "urdf_content": "string (URDF XML)",
  "sdf_content": "string (SDF XML)",
  "physical_properties": {
    "mass": float,
    "dimensions": {"length": float, "width": float, "height": float},
    "joints": [
      {
        "name": "string",
        "type": "revolute|prismatic|fixed",
        "limits": {"lower": float, "upper": float, "effort": float, "velocity": float}
      }
    ]
  }
}
```

**Response**:
```json
{
  "model_id": "string",
  "name": "string",
  "created_at": "timestamp"
}
```

### Get Robot Model
**Endpoint**: `GET /api/v1/robot-models/{model_id}`
**Description**: Retrieves a robot model definition

**Response**:
```json
{
  "model_id": "string",
  "name": "string",
  "urdf_content": "string (URDF XML)",
  "sdf_content": "string (SDF XML)",
  "physical_properties": {
    "mass": float,
    "dimensions": {"length": float, "width": float, "height": float},
    "joints": [
      {
        "name": "string",
        "type": "revolute|prismatic|fixed",
        "limits": {"lower": float, "upper": float, "effort": float, "velocity": float}
      }
    ]
  },
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

## Environment API

### Create Virtual Environment
**Endpoint**: `POST /api/v1/environments`
**Description**: Creates a new virtual environment for simulation

**Request**:
```json
{
  "name": "string",
  "description": "string",
  "terrain_data": {
    "type": "flat|rough|hilly|custom",
    "friction_coefficient": float,
    "texture": "string"
  },
  "lighting_config": {
    "ambient_light": {"r": float, "g": float, "b": float},
    "sun_direction": {"x": float, "y": float, "z": float}
  },
  "objects": [
    {
      "type": "static|dynamic",
      "model": "string",
      "position": {"x": float, "y": float, "z": float},
      "orientation": {"roll": float, "pitch": float, "yaw": float}
    }
  ]
}
```

**Response**:
```json
{
  "environment_id": "string",
  "name": "string",
  "created_at": "timestamp"
}
```

### Get Environment
**Endpoint**: `GET /api/v1/environments/{environment_id}`
**Description**: Retrieves a virtual environment definition

**Response**:
```json
{
  "environment_id": "string",
  "name": "string",
  "description": "string",
  "terrain_data": {
    "type": "flat|rough|hilly|custom",
    "friction_coefficient": float,
    "texture": "string"
  },
  "lighting_config": {
    "ambient_light": {"r": float, "g": float, "b": float},
    "sun_direction": {"x": float, "y": float, "z": float}
  },
  "objects": [
    {
      "id": "string",
      "type": "static|dynamic",
      "model": "string",
      "position": {"x": float, "y": float, "z": float},
      "orientation": {"roll": float, "pitch": float, "yaw": float}
    }
  ],
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

## Sensor Simulation API

### Add Virtual Sensor
**Endpoint**: `POST /api/v1/robot-models/{model_id}/sensors`
**Description**: Adds a virtual sensor to a robot model

**Request**:
```json
{
  "sensor_type": "camera|lidar|imu|gps|gyroscope|accelerometer",
  "name": "string",
  "position": {"x": float, "y": float, "z": float},
  "orientation": {"roll": float, "pitch": float, "yaw": float},
  "configuration": {
    "range_min": float,
    "range_max": float,
    "resolution": float,
    "noise_params": {
      "mean": float,
      "std_dev": float
    }
  }
}
```

**Response**:
```json
{
  "sensor_id": "string",
  "sensor_type": "camera|lidar|imu|gps|gyroscope|accelerometer",
  "name": "string",
  "attached_to_model": "string"
}
```

### Get Sensor Data Stream
**Endpoint**: `GET /api/v1/simulations/{simulation_id}/sensors/{sensor_id}/stream`
**Description**: Gets real-time sensor data stream from a virtual sensor

**Response (WebSocket)**:
```json
{
  "sensor_id": "string",
  "timestamp": "timestamp",
  "data": "sensor-specific data format",
  "frame_id": "string"
}
```

## Simulation Results API

### Get Simulation Results
**Endpoint**: `GET /api/v1/simulations/{simulation_id}/results`
**Description**: Retrieves results from a completed simulation

**Response**:
```json
{
  "simulation_id": "string",
  "robot_behavior_metrics": {
    "path_accuracy": float,
    "execution_time": float,
    "energy_consumption": float
  },
  "sensor_data_summary": {
    "total_messages": integer,
    "data_variance": float,
    "completeness_score": float
  },
  "physics_validation": {
    "realism_score": float,
    "error_percentage": float
  },
  "generated_at": "timestamp"
}
```

## Error Response Format

All error responses follow this format:
```json
{
  "error_code": "string",
  "message": "string",
  "details": "optional object with specific error details"
}
```

## Authentication

All API endpoints require authentication using Bearer tokens:
```
Authorization: Bearer {token}
```

## Rate Limits

- Standard endpoints: 100 requests per minute
- Data streaming endpoints: 1000 messages per second
- File upload endpoints: 10 uploads per minute