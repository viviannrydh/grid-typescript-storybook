import React from 'react';
import { Story,Meta } from '@storybook/react';
import Grid from './Grid';
import Box from '../Box/Box';
import GridRuler from '../GridRuler/GridRuler'
export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic: Story = (args) => <div style={{  position: "relative" }}>
  <Grid container spacing="sm" justifyContent="space-around" alignItems="center" style={{ height: "100%" }}  {...args}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 1</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 2</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 3</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 3</Box>
    </Grid> 
  </Grid>
</div>

export const WithRuler: Story = (args) => <div style={{ position: "relative" }}>
  <GridRuler spacing="sm" ></GridRuler>
  <Grid container spacing="sm" justifyContent="space-around" alignItems="center" style={{ height: "100%" }}  {...args}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 1</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 2</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 3</Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>Box 3</Box>
    </Grid>
  </Grid>
</div>
export const Interactive: Story = (args) => <div style={{ position: "relative", height:"100vh" }}>
  <Grid container spacing="sm" justifyContent="space-around" alignItems="center" style={{ height: "100%" }}  {...args}>
    <Grid item xs={1} >
      <Box>Box 1</Box>
    </Grid>
    <Grid item xs={1} >
      <Box>Box 2</Box>
    </Grid>
    <Grid item xs={1} >
      <Box>Box 3</Box>
    </Grid>
    <Grid item xs={1} >
      <Box>Box 3</Box>
    </Grid>
  </Grid>
</div>

