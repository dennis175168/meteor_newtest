import { Meteor } from 'meteor/meteor';
import { Reports } from '../lib/collections';

Meteor.publish("publish" ,() => Reports.find())