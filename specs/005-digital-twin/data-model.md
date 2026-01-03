# Data Model: Digital Twin for Robot Simulation

**Feature**: 005-digital-twin
**Date**: 2025-12-30
**Input**: Feature specification from `/specs/005-digital-twin/spec.md`

## Overview

Data model for the Digital Twin module focusing on physics-based robot simulation, environment modeling, and virtual sensor simulation. This model defines the entities and their relationships as extracted from the feature specification.

## Core Entities

### Digital Twin
**Description**: A virtual representation of a physical robot system that mirrors real-world physics and behavior
**Fields**:
- id: Unique identifier for the digital twin instance
- name: Human-readable name for the twin
- robot_model_ref: Reference to the Robot Model entity
- physics_config: Configuration for physics simulation
- environment_config: Configuration for environment simulation
- sensor_config: Configuration for sensor simulation
- created_at: Timestamp of creation
- updated_at: Timestamp of last update

**Relationships**:
- Has one Robot Model
- Has one Physics Simulation
- Has one Virtual Environment
- Has many Virtual Sensors

### Physics Simulation
**Description**: Computational model that replicates real-world physics for robot testing and validation
**Fields**:
- id: Unique identifier for the physics simulation
- gravity: Gravity vector (x, y, z)
- time_step: Simulation time step
- max_update_rate: Maximum update rate for simulation
- real_time_factor: Factor for real-time simulation speed
- collision_detection: Collision detection algorithm
- solver_type: Physics solver type
- created_at: Timestamp of creation
- updated_at: Timestamp of last update

**Relationships**:
- Belongs to Digital Twin
- Associated with Robot Model for physics properties

### Virtual Environment
**Description**: Computer-generated space that represents real-world conditions for robot testing
**Fields**:
- id: Unique identifier for the virtual environment
- name: Name of the environment
- description: Description of the environment
- terrain_data: Terrain information and properties
- lighting_config: Lighting configuration
- weather_conditions: Environmental conditions
- static_objects: List of static objects in the environment
- dynamic_objects: List of dynamic objects in the environment
- created_at: Timestamp of creation
- updated_at: Timestamp of last update

**Relationships**:
- Belongs to Digital Twin
- Contains many Robot Models (for multi-robot scenarios)

### Virtual Sensor
**Description**: Virtual representation of physical sensors that generates realistic sensor data
**Fields**:
- id: Unique identifier for the virtual sensor
- name: Name of the sensor
- sensor_type: Type of sensor (lidar, camera, imu, gps, etc.)
- position: Position relative to robot frame (x, y, z)
- orientation: Orientation relative to robot frame (roll, pitch, yaw)
- range_min: Minimum sensing range
- range_max: Maximum sensing range
- resolution: Resolution of sensor data
- noise_params: Noise parameters for realistic data
- data_format: Format of sensor data output
- connected_to_robot: Reference to Robot Model
- created_at: Timestamp of creation
- updated_at: Timestamp of last update

**Relationships**:
- Belongs to Digital Twin
- Connected to Robot Model

### Robot Model
**Description**: Digital representation of a physical robot including its physical properties and capabilities
**Fields**:
- id: Unique identifier for the robot model
- name: Name of the robot
- urdf_file: Path to URDF file defining the robot
- sdf_file: Path to SDF file for Gazebo simulation
- mass: Total mass of the robot
- dimensions: Physical dimensions (length, width, height)
- joint_count: Number of joints
- link_count: Number of links
- actuator_types: Types of actuators used
- power_consumption: Power consumption profile
- max_velocity: Maximum velocity capabilities
- max_acceleration: Maximum acceleration capabilities
- created_at: Timestamp of creation
- updated_at: Timestamp of last update

**Relationships**:
- Belongs to Digital Twin
- Used by Physics Simulation for physical properties
- Connected to Virtual Sensors
- Exists in Virtual Environment

## State Transitions

### Digital Twin States
- **CREATED**: Twin has been created but not initialized
- **CONFIGURED**: Twin has been configured with all necessary components
- **SIMULATING**: Twin is currently running a simulation
- **PAUSED**: Simulation is paused
- **STOPPED**: Simulation has been stopped
- **VALIDATED**: Simulation results have been validated against real data

### Robot Model States
- **DEFINED**: Model has been defined with URDF/SDF
- **INSTANCED**: Model has been placed in simulation environment
- **ACTIVE**: Robot is actively simulating
- **INACTIVE**: Robot is not currently simulating
- **CALIBRATED**: Sensor calibration has been applied

## Validation Rules

### From Functional Requirements:

**FR-001**: Physics simulation validation
- Physics Simulation must have valid gravity parameters
- Time step must be within acceptable range (0.001 to 0.01 seconds)
- Solver type must be supported by Gazebo

**FR-002**: Environment modeling validation
- Virtual Environment must have valid terrain data
- Environment must support robot navigation
- Static and dynamic objects must be properly defined

**FR-003**: Sensor simulation validation
- Virtual Sensor must have valid type from supported list
- Position and orientation must be within robot bounds
- Range parameters must be positive values
- Data format must match ROS 2 message types

**FR-005**: Physics interaction validation
- Robot Model physical properties must be consistent with Physics Simulation
- Collision detection must be enabled for interacting objects
- Forces must be applied within realistic bounds

**FR-006**: Sensor data validation
- Sensor data must be generated in real-time during simulation
- Data variance must be within acceptable noise parameters
- Output format must match real sensor specifications

## Relationships Summary

```
Digital Twin (1) <---> (1) Physics Simulation
Digital Twin (1) <---> (1) Virtual Environment
Digital Twin (1) <---> (M) Virtual Sensor
Digital Twin (1) <---> (1) Robot Model

Robot Model (1) <---> (M) Virtual Sensor (connected_to_robot)
Robot Model (1) <---> (M) Virtual Environment (exists in)
Robot Model (1) <---> (1) Physics Simulation (physical properties)
```

## Access Patterns

1. **Simulation Initialization**: Digital Twin → Robot Model → Physics Simulation → Virtual Environment → Virtual Sensors
2. **Data Collection**: Virtual Sensors → Digital Twin → Data Export
3. **Validation**: Digital Twin → Physics Simulation → Comparison with real data
4. **Environment Interaction**: Virtual Environment → Robot Model → Physics Simulation