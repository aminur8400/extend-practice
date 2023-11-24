import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Reducing/ReduceEleminat.vue'
import Welcome from '../views/Reducing/Welcome.vue'
import LearnOutcomes from '../views/Reducing/LearnOutcomes.vue'
import OverView from '../views/Reducing/OverView.vue'
import Introduction from '../views/Topic1/Introduction.vue'
import Restriction from '../views/Topic1/Restriction.vue'
import MomentReflect from '../views/Topic1/MomentReflect.vue'
import WhatWeMean from '../views/Topic1/WhatWeMean.vue'
import Terminology from '../views/Topic1/NewTerminology.vue'
import GenPrinciples from '../views/Topic1/GeneralPrinciples.vue'
import Processes from '../views//Topic2/Processes.vue'
import Consider from '../views//Topic2/Consider.vue'
import Orla from '../views//Topic2/Orla.vue'
import Instances from '../views//Topic2/Instances.vue'
import EndingSeclusion from '../views//Topic2/EndingSeclusion.vue'
import MentalHealth from '../views//Topic2/MentalHealth.vue'
import MultiDisciplinary from '../views//Topic2/MultiDisciplinary.vue'
import WhatHappen from '../views//Topic3/WhatHappen.vue'
import Mindset from '../views//Topic3/Mindset.vue'
import ReductionPolicy from '../views//Topic3/ReductionPolicy.vue'
import StaffTraining from '../views//Topic3/StaffTraining.vue'
import MultiReview from '../views//Topic3/MultiReview.vue'
import AnnualReport from '../views//Topic3/AnnualReport.vue'
import Knowledge from '../views//Topic3/Knowledge.vue'
import SummaryExtend from '../views//Summary/SummaryExtend.vue'
import Summary from '../views//Summary/Summary.vue'
import nextsteps from '../views//Summary/NextSteps.vue'
import ExtendLearning from '../views//Summary/ExtendLearning.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/learnoutcome',
    name: 'learnoutcome',
    component: LearnOutcomes
  },
  {
    path: '/overview',
    name: 'overview',
    component: OverView
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/restriction',
    name: 'restriction',
    component: Restriction
  },
  {
    path: '/momentreflect',
    name: 'momentreflect',
    component: MomentReflect
  },
  {
    path: '/whatwemean',
    name: 'whatwemean',
    component: WhatWeMean
  },
  {
    path: '/terminology',
    name: 'terminology',
    component: Terminology
  },
  {
    path: '/genprinciples',
    name: 'genprinciples',
    component: GenPrinciples
  },
  {
    path: '/processes',
    name: 'processes',
    component: Processes
  },
  {
    path: '/consider',
    name: 'consider',
    component: Consider
  },
  {
    path: '/orla',
    name: 'orla',
    component: Orla
  },
  {
    path: '/instances',
    name: 'instances',
    component: Instances
  },
  {
    path: '/instances',
    name: 'instances',
    component: EndingSeclusion
  },
  {
    path: '/mentalhealth',
    name: 'mentalhealth',
    component: MentalHealth
  },
  {
    path: '/disciplinary',
    name: 'disciplinary',
    component: MultiDisciplinary
  },
  {
    path: '/whathappen',
    name: 'whathappen',
    component: WhatHappen
  },
  {
    path: '/mindset',
    name: 'mindset',
    component: Mindset
  },
  {
    path: '/reductionpolicy',
    name: 'reductionpolicy',
    component: ReductionPolicy
  },
  {
    path: '/training',
    name: 'training',
    component: StaffTraining
  },
  {
    path: '/review',
    name: 'review',
    component: MultiReview
  },
  {
    path: '/report',
    name: 'report',
    component: AnnualReport
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: Knowledge
  },
  {
    path: '/extedsummary',
    name: 'extedsummary',
    component: SummaryExtend
  },
  {
    path: '/summary',
    name: 'summary',
    component: Summary
  },
  {
    path: '/nextsteps',
    name: 'nextsteps',
    component: nextsteps
  },
  {
    path: '/extendlearning',
    name: 'extendlearning',
    component: ExtendLearning
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Reducing/Welcome.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
