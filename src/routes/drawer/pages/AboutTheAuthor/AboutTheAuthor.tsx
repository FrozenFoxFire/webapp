import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import SkillList from "./SkillList.tsx";
import PartitionDivider from "../../../../components/partition/Divider.tsx";

interface Props {
  debug?: boolean;
  skip?: boolean;
}

function AboutTheAuthor({ debug, skip }: Props) {
  if (debug) {
    console.log('AboutTheAuthor', { skip });
  }

  return <Box width='100%' height='100%'>
    <Stack>
      <Box textAlign='center' border='solid'>
        <Typography variant='h4'>About Me</Typography>
        <Typography variant='h6'>Michael Peschke</Typography>
        <Typography textAlign='left' marginLeft='1rem'>
          I enjoy coding and creating software to help my everyday life.
          My other hobbies include figuring out how devices work, sometimes taking them apart.
          Outside of coding, I enjoy video games and exploring the world.
        </Typography>
        <PartitionDivider />
        <Typography variant='h2'>Software Developer</Typography>
        <Typography border='dashed 0.125rem red'>
          <Typography variant='h5'>Caxy Interactive</Typography>
          <Grid container direction='row' xs={12}>
            <Grid container item xs={2}>
              <SkillList title='Skills' skills={['React', 'Node', 'Java & Scala']} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Responsibilities' skills={[
                'Work through client requests and details after lead provides information',
                'Maintain v16 React project with Node',
                'Assist in other React-based projects with different Backend solutions',
                'Log issues and report daily'
              ]} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Achievements' skills={[
                'Quickly picked up and assisted in backend designs',
                'Assisted in mobile app designs and technologies: Location, PDF, Form Validation',
              ]} />
            </Grid>
          </Grid>
          <PartitionDivider />
          <Typography variant='h5'>Regal Rexnord</Typography>
          <Grid container direction='row' xs={12}>
            <Grid container item xs={2}>
              <SkillList title='Skills' skills={['Node', 'Python', 'C & C++', 'React Native']} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Responsibilities' skills={[
                'Develop software for internally designed hardware',
                'Design a dashboard for data collection using microcontrollers',
                'Identify internal needs for User Interface',
                'Provide feedback for internal needs vs application',
                'Analyze data and provide graphics for development and progress'
              ]} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Achievements' skills={[
                'Designed multiple sensors for collecting machine data resulting in multiple Patents',
                'Developed bootloadable firmware (with BLE) for sensors with optimization',
                'Designed tests for validating firmware and algorithms'
              ]} />
            </Grid>
          </Grid>
          <PartitionDivider />
          <Typography variant='h5'>UICO, LLC</Typography>
          <Grid container direction='row' xs={12}>
            <Grid container item xs={2}>
              <SkillList title='Skills' skills={['C# and C++', 'Assembly', 'Python', 'MatLab', 'Perl']} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Responsibilities' skills={[
                'Develop desktop software application for internal, demonstration, and Quality Assurance',
                'Work with team to determine software needs based on firmware development',
                'Integrate firmware protocols with desktop software',
                'Assist in updating older firmware in Assembly',
                'Create drivers in Android, Windows, and Linux to provide touch interfaces'
              ]} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Achievements' skills={[
                'Created and developed .NET Desktop Application with multiple build modes',
                'Assisted in algorithm development for coordinate system',
                'Assist in development of automation testing for touchscreens utilizing robotic process'
              ]} />
            </Grid>
          </Grid>
        </Typography>
        <Typography variant='h2'>Hardware Developer</Typography>
        <Typography border='dashed 0.125rem white'>
          <Typography>Regal Rexnord</Typography>
          <Grid container direction='row' xs={12}>
            <Grid container item xs={2}>
              <SkillList title='Skills and Tools' skills={[
                'AutoCAD, FreeCAD, and LibreCAD',
                'Documentation',
                'Layout Design',
                'IP56 and IP68 Research and Design'
              ]} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Responsibilities' skills={[
                'Design PCB with multiple chipsets',
                'Validate hardware designs for internal noise feedback',
                'Ensure low-cost needs',
                'Approve contractor designs'
              ]} />
            </Grid>
            <Grid container item xs={5}>
              <SkillList title='Achievements' skills={[
                'Developed iterations of PCB',
                'Developed 3D printed housing'
              ]} />
            </Grid>
          </Grid>
        </Typography>
        <Typography variant='h2'>IoT Design Engineer</Typography>
        <Typography border='dashed 0.125rem blue' sx={{ borderStyle: 'dashed', borderWidth: '0.125rem' }}>
          <Typography>Regal Rexnord</Typography>
        </Typography>
      </Box>
    </Stack>
  </Box>;
}
export default AboutTheAuthor;
