---
title: Chapter 1 - ROS 2 Fundamentals
sidebar_label: Chapter 1
---

# ROS 2 Fundamentals

## Introduction to ROS 2

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

## ROS 2 Architecture

ROS 2 uses a distributed architecture based on DDS (Data Distribution Service) for communication between nodes. This provides better support for real-time systems and improved security compared to ROS 1.

### Key Components

- **Nodes**: Processes that perform computation
- **Topics**: Named buses over which nodes exchange messages
- **Services**: Synchronous request/response communication pattern
- **Actions**: Asynchronous request/response communication with feedback

## Data Flow and Communication Model

ROS 2 implements a publish-subscribe model for topics and request-response model for services. This enables loose coupling between different components of a robotic system.

### Publisher-Subscriber Pattern

In the publisher-subscriber pattern, publishers send messages to topics without knowledge of subscribers. Subscribers receive messages from topics without knowledge of publishers. This decouples the timing and location of publishers and subscribers.