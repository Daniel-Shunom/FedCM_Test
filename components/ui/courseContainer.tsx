import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CourseProps } from "../types/types";
import { getCourses } from "@/protected/courses/courses";

export const CourseContainer: React.FC<CourseProps> = ({ courseName }) => {
  const token = sessionStorage.getItem('fibo_session_token');
  getCourses(token);
  return (
    <View style={CourseContainerStyles.container}>
      <View style={CourseContainerStyles.circleContainer}>
        <View style={CourseContainerStyles.circle} />
      </View>
      <Text style={CourseContainerStyles.containerText}>course: {courseName}</Text>
    </View>
  );
};

const CourseContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", 
    borderRadius: 12, 
    padding: 16, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  containerText: {
    fontSize: 18, 
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    zIndex: 1, 
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
});