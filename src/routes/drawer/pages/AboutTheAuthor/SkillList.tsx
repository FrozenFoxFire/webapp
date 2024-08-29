import React from 'react';
import { List, ListItem } from "@mui/material";

interface SkillListProps {
  title: string;
  skills: string[];
}

function SkillList({ title, skills }: SkillListProps) {
  // Skills should be unique
  return <List sx={{ textAlign: 'left', marginLeft: '1rem' }}>
    {title}
    {skills.length > 0 && skills.map((skill) => <ListItem key={skill}>- {skill}</ListItem>)}
  </List>;
}

export default SkillList;
