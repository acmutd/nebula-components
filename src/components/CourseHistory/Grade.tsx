import React from 'react';
import './grade.css';
import CourseAudit from './CourseAudit.tsx'
import { loadData } from './CourseAudit.tsx'
import { toggleDense } from './CourseAudit.tsx'

export interface GradeProps {
  /**
   * TODO: Implement this
   */
  lightmode?: boolean;
  /**
   * Toggles between a more spacious and compact display of the courses
   */
  compact?: boolean;

}

/**
 * Primary UI component for user interaction
 */
export const Div: React.FC<GradeProps> = ({
  lightmode = true,
  compact = false,
  courseName = "EX1234",
  semester = '2015 Spring',
  grade = "W",
  ...props
}) => {
  const mode = lightmode ? 'storybook-div--light' : 'storybook-div--dark';

  toggleDense(compact)

  return(CourseAudit());
};
