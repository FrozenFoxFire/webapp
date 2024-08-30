import React from 'react';
import { List, ListItem } from "@mui/material";

interface SkillListProps {
  title: string;
  skills: string[];
}

function SkillList({ title, skills }: SkillListProps) {
  const filteredSkills = skills.filter((x) => !!x);
  if (filteredSkills.length < 1)  {
    return null;
  }

  // Skills should be unique
  return <List sx={{ textAlign: 'left', marginLeft: '1rem' }}>
    {title}
    {filteredSkills.map((skill) => <ListItem key={skill}>- {skill}</ListItem>)}
  </List>;
}

export default SkillList;
