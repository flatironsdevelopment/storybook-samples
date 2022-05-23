import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from './details.component'

const args = {
  headline: 'Introducing Flatirons Fuse',
  subtitle:
    'With great excitement and anticipation, we are pleased to announce the launch of our first SaaS product Flatirons Fuse.',
  article: `
    Fuse is a brand new CSV import tool, a customer onboarding tool, and the last spreadsheet importer you will ever need. But why was it created? What are we doing differently? And who the heck are we? Let’s answer some of these burning questions.

    Why We Created Flatirons Fuse

    Flatirons Fuse was created for one simple reason. We found the existing solutions in the market confusing, expensive, and unfriendly to users.

    In my personal experience as a developer, it amazes me to think back on just how much time was spent and how many times the transfer of data was a pain point in a given process. CSV import was one of the most common pain points, and resulted in many hours spent creating improved CSV import experiences for a number of different organizations. With this experience, I am intimately familiar with the complexities of data migrations and handling ETL (extract, transform, load) processes. Ultimately, this experience led me to feel adequately prepared to make a universal, simple, and powerful CSV import experience of my own.
  `
}

storiesOf('Components/Details', module)
  .add('read more: ', () => <Details {...args} readMore />)
  .add('full article: ', () => <Details {...args} />)
