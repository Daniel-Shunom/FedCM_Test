import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CourseProps } from "../types/types";

export const CourseContainer: React.FC<CourseProps> = ({ courseName }) => {
  return (
    <View style={CourseContainerStyles.container}>
      <View style={CourseContainerStyles.content}>
        <Text style={CourseContainerStyles.title}>{courseName}</Text>
        <View style={CourseContainerStyles.details}>
          <Text style={CourseContainerStyles.detailText}>Next Lesson: Tomorrow</Text>
          <Text style={CourseContainerStyles.detailText}>80% Complete</Text>
        </View>
      </View>
      <View style={CourseContainerStyles.accentLine} />
    </View>
  );
};

const CourseContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',  
    borderRadius: 8,  
    padding: 8, 
    shadowColor: '#2E9AFE', 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3, // Increased shadow opacity
    shadowRadius: 6, // Increased shadow radius
    elevation: 5, // Increased elevation for Android
    marginVertical: 12, // Increased vertical margin
    marginHorizontal: 16,
    overflow: 'hidden', // Clip content that overflows
    borderWidth: 1, // Add a subtle border
    borderColor: '#E0E0E0', // Light grey border color
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: 18, // Larger title font size
    fontWeight: '600', // Bold title font weight
    color: '#333', // Dark grey title color
    marginBottom: 4, // Add some spacing below the title
    textAlign: 'left', // Align title to the left
  },
  details: {
    marginTop: 4,
  },
  detailText: {
    fontSize: 14, 
    color: '#777',
    marginBottom: 4, 
    textAlign: 'left',
  },
  accentLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 4, 
    backgroundColor: '#2E9AFE', 
  },
});