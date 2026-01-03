---
title: Chapter 2 - Python Agents to Robot Control
sidebar_label: Chapter 2
---

# Python Agents to Robot Control

## Introduction to rclpy

rclpy is the Python client library for ROS 2. It provides the standard interface for Python programs to interact with ROS 2, allowing Python AI agents to interface with ROS 2 systems for robot control.

## Publishing, Subscribing, and Service Calls

### Publishing Messages

To control a robot, AI agents can publish messages to specific topics that control actuators or send commands to the robot.

```python
import rclpy
from std_msgs.msg import String

def publish_command():
    rclpy.init()
    node = rclpy.create_node('ai_control_node')
    publisher = node.create_publisher(String, 'robot_command', 10)

    msg = String()
    msg.data = 'move_forward'
    publisher.publish(msg)
```

### Subscribing to Sensor Data

AI agents can subscribe to sensor data to make informed decisions about robot control.

```python
def sensor_callback(msg):
    # Process sensor data and make control decisions
    print(f"Received sensor data: {msg.data}")

def subscribe_to_sensors():
    rclpy.init()
    node = rclpy.create_node('sensor_subscriber')
    subscription = node.create_subscription(
        String,
        'sensor_data',
        sensor_callback,
        10
    )
```

### Service Calls for Robot Control

For synchronous operations, AI agents can use service calls to control the robot.

```python
from example_interfaces.srv import AddTwoInts

def call_robot_service():
    rclpy.init()
    node = rclpy.create_node('service_client')

    client = node.create_client(AddTwoInts, 'add_two_ints')
    # Implementation for robot control service calls
```

## Bridging AI Agents with ROS 2

Python-based AI agents can seamlessly integrate with ROS 2 using rclpy, enabling sophisticated control algorithms to interact with physical robots through the ROS 2 middleware.