# Quickstart: Digital Twin for Robot Simulation

**Feature**: 005-digital-twin
**Date**: 2025-12-30

## Overview

This guide will help you set up and run the Digital Twin simulation environment for robot simulation with Gazebo physics, Unity environments, and virtual sensors. Follow these steps to get started with physics-based robot simulation in under 30 minutes.

## Prerequisites

- Ubuntu 20.04 or 22.04 (recommended for Gazebo compatibility)
- ROS 2 Humble Hawksbill or later
- Python 3.11+
- Unity Hub with Unity 2022.3 LTS or later
- Git
- Basic knowledge of ROS 2 concepts

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/digital-twin-simulation.git
cd digital-twin-simulation
```

### 2. Install Gazebo

```bash
# Add ROS 2 repository
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository universe

# Install Gazebo
sudo apt update
sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-gazebo-ros2-control ros-humble-gazebo-ros2-control-demos
```

### 3. Install Python Dependencies

```bash
pip install rclpy geometry_msgs sensor_msgs std_msgs
```

### 4. Set Up Unity Environment (Optional)

```bash
# Download and install Unity Hub from unity.com
# Install Unity 2022.3 LTS through Unity Hub
# Import Unity Robotics packages via Package Manager
```

## Setting Up Your First Simulation

### 1. Create a Robot Model

Create a simple robot model in the `digital_twin/gazebo_simulation/models/` directory:

```xml
<!-- Example robot model in URDF format -->
<?xml version="1.0"?>
<robot name="simple_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0"/>
      <inertia ixx="0.083" ixy="0.0" ixz="0.0" iyy="0.083" iyz="0.0" izz="0.083"/>
    </inertial>
  </link>
</robot>
```

### 2. Configure Physics Simulation

Create a world file in `digital_twin/gazebo_simulation/worlds/`:

```xml
<?xml version="1.0" ?>
<sdf version="1.7">
  <world name="simple_world">
    <physics type="ode">
      <gravity>0 0 -9.8</gravity>
      <max_step_size>0.001</max_step_size>
      <real_time_factor>1.0</real_time_factor>
    </physics>

    <include>
      <uri>model://ground_plane</uri>
    </include>

    <light name="sun" type="directional">
      <cast_shadows>true</cast_shadows>
      <pose>0 0 10 0 0 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <attenuation>
        <range>1000</range>
        <constant>0.9</constant>
        <linear>0.01</linear>
        <quadratic>0.001</quadratic>
      </attenuation>
      <direction>-0.3 0.3 -1</direction>
    </light>
  </world>
</sdf>
```

### 3. Launch the Simulation

```bash
# Source ROS 2 environment
source /opt/ros/humble/setup.bash

# Launch Gazebo with your robot
ros2 launch digital_twin/launch/simulate_robot.launch.py
```

## Running Basic Simulations

### Physics Simulation Example

1. Launch Gazebo with a simple world:
```bash
gazebo --verbose digital_twin/gazebo_simulation/worlds/simple_world.sdf
```

2. Spawn your robot:
```bash
ros2 run gazebo_ros spawn_entity.py -file digital_twin/gazebo_simulation/models/simple_robot.urdf -entity simple_robot
```

3. Apply forces to test physics:
```bash
ros2 topic pub /simple_robot/cmd_vel geometry_msgs/Twist "{linear: {x: 1.0}, angular: {z: 0.5}}"
```

### Environment Simulation with Unity

1. Open the Unity project in `digital_twin/unity_simulation/`
2. Load the environment scene
3. Configure environment parameters in the inspector
4. Build and run the Unity environment
5. Connect to ROS 2 using the Unity Robotics package

### Sensor Simulation Example

1. Add virtual sensors to your robot model:
```xml
<gazebo reference="base_link">
  <sensor name="camera" type="camera">
    <camera>
      <horizontal_fov>1.047</horizontal_fov>
      <image>
        <width>640</width>
        <height>480</height>
        <format>R8G8B8</format>
      </image>
      <clip>
        <near>0.1</near>
        <far>100</far>
      </clip>
    </camera>
    <always_on>true</always_on>
    <update_rate>30</update_rate>
    <visualize>true</visualize>
  </sensor>
</gazebo>
```

2. Launch the simulation with sensors:
```bash
ros2 launch digital_twin/launch/simulate_robot_with_sensors.launch.py
```

3. View sensor data:
```bash
# View camera feed
ros2 run image_view image_view image:=/simple_robot/camera/image_raw

# View sensor data
ros2 topic echo /simple_robot/camera/image_raw
```

## Documentation Navigation

The complete documentation is organized in the following structure:

1. **Chapter 1: Gazebo Physics Simulation** - Core physics concepts, robot models, simulation setup
   - Setting up physics parameters
   - Creating robot models
   - Running physics simulations
   - Validating physics behavior

2. **Chapter 2: Unity Environment & Interaction** - Environment creation, lighting, interaction systems
   - Creating virtual environments
   - Adding static and dynamic objects
   - Environment lighting and effects
   - Unity-ROS 2 integration

3. **Chapter 3: Virtual Sensor Simulation** - Sensor types, data generation, integration with real systems
   - Adding sensors to robot models
   - Configuring sensor parameters
   - Validating sensor data
   - Comparing with real sensor outputs

## Validation

To validate your simulation setup:

1. Run a simple physics test:
```bash
# Check if robot responds to forces as expected
ros2 run digital_twin test_physics_behavior.py
```

2. Verify sensor data accuracy:
```bash
# Compare virtual vs. real sensor patterns
ros2 run digital_twin validate_sensor_data.py
```

3. Run comprehensive validation:
```bash
# Full simulation validation
ros2 run digital_twin run_validation_suite.py
```

## Troubleshooting

### Common Issues

- **Gazebo won't start**: Ensure proper graphics drivers are installed
- **Robot not responding**: Check ROS 2 network configuration and topic names
- **Sensor data not publishing**: Verify sensor configuration in robot model
- **Performance issues**: Reduce simulation complexity or adjust time step

### Performance Tips

- Use simplified models for real-time simulation
- Limit the number of active sensors during development
- Adjust real-time factor to balance accuracy and performance
- Use appropriate collision mesh complexity

## Next Steps

1. Explore the Docusaurus documentation in `digital_twin/docs/`
2. Create more complex robot models
3. Add multiple robots to the same simulation
4. Integrate with Unity for enhanced visualization
5. Validate simulation results against real-world data