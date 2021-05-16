import React from 'react';
import {
  makeStyles,
  createStyles,
  Icon,
  IconButton,
  MenuItem,
  Menu,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import { Add, DragIndicator, MoreVert } from '@material-ui/icons';
import { useToggleableCard } from '../../components/common/CourseCard/toggleableCard';
import { Course } from '../../app/data';
import CourseCard from '../../components/common/CourseCard';
import styles from '../../components/common/CourseCard/CourseCard.module.css';

/**
 * Component properties for an {@link CourseCard}.
 */

interface CourseCardListProps {

    /**
       * The course items to display.
       */
    courses: Course[];

    /**
       * True if an options menu should be shown for this course.
       */
    enabled: boolean;

    /**
       * The estimated amount of hours spent per week outside class.
       */
      estimatedWorkload?: number;

    /**
       * A callback triggered when an a course should be removed from its container.
       */
      onOptionRemove?: (key: string) => void;

     /**
      * A callback triggered when a course should be swapped with another one
      */
      onOptionSwap?: (key: string) => void;

}

export default function CourseCardList({
courses,
enabled,
estimatedWorkload = () => undefined,
onOptionRemove = () => undefined,
onOptionSwap = () => undefined,
onRemoveSemester = () => undefined,
children,
}: React.PropsWithChildren<CourseCardListProps>):