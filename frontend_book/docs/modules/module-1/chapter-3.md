---
title: Chapter 3 - Humanoid Robot Modeling
sidebar_label: Chapter 3
---

# Humanoid Robot Modeling

## Understanding URDF

URDF (Unified Robot Description Format) is an XML format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including links, joints, and their relationships.

## Links, Joints, and Robot Structure Representation

### Links

Links represent rigid bodies in a robot. Each link has properties such as:

- **Visual**: How the link appears in simulation
- **Collision**: How the link interacts with other objects for collision detection
- **Inertial**: Physical properties like mass and moments of inertia

```xml
<link name="link_name">
  <visual>
    <geometry>
      <cylinder length="0.6" radius="0.1"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <cylinder length="0.6" radius="0.1"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="1"/>
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
  </inertial>
</link>
```

### Joints

Joints define the kinematic and dynamic relationships between links. Common joint types include:

- **Revolute**: Rotational joint with limited range
- **Continuous**: Rotational joint without limits
- **Prismatic**: Linear sliding joint
- **Fixed**: No movement between links

```xml
<joint name="joint_name" type="revolute">
  <parent link="parent_link"/>
  <child link="child_link"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  <origin xyz="0 0 0.1" rpy="0 0 0"/>
</joint>
```

## Modeling Humanoid Robots

Humanoid robots require special attention to joint limits and degrees of freedom to enable human-like movement. The kinematic chain typically includes:

- **Trunk**: Core body structure
- **Arms**: Shoulder, elbow, and wrist joints
- **Legs**: Hip, knee, and ankle joints
- **Head**: Neck joint for orientation

Proper URDF modeling ensures accurate simulation and control of humanoid robots in ROS environments.