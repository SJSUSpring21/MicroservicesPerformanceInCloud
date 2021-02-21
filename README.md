# Team9
# Category: AI in Software Development
Idea#3: 

Introduction to the problem statement:Use AI to measure and improve Microservice performance
Microservices architecture is common ways to deploy containerized software in the cloud. However, increasing number of microservices increases management complexity due to distributed architecture. Network latency and load balancing are other challenges. See this use case for inspiration.

Abstract: Developing a model to determine feasible cloud platform for types of services considering their weightage(Heavy,medium,Light).Training model with parameters like response time, memory utilization,throughput etc. from Kubernetes report to predict threshold values for each type services. These predicted threshold values can be used to determine correct cloud platform for services.



Approach: We will develop web services of different weightage like light,medium and heavy and then we will deploy all these services to the different cloud platforms using docker. Here we will be using Kubernetes to track performance of all types of services on each platform. After that we will take out reports from kubernetes and will consolidate all those report data into csv and will figure out features(paramters) and labels(prediction values) needed to monitor these kind of services. After tracking all this data for few weeks we will be using predicted values as threshold value for each type of service considering traffic and latency.
Using those threshold value we will train our model and then we will be deciding which type of service should go on which platform.

Persona : Development team and Dev-ops team.

Dataset Links: We will develop our own webservices and tool, to hit the server on each cloud platform. 


# Category: Immigration
Idea#11: Look at the questions to ask and available data sets here ( https://usafacts.org/issues/immigration/ ) and create a dashboard for legal immigrants that can help answer questions such as: 
what are the chances of a H1B visa being denied?
What will be the impact on a certain industry if H1B Visa is eliminated?
What will be the benefit to US economy if US implements time bond citizenship for immigrant workers? 

# Category: Crime & Justice
Idea# 12 Look at available data sets and create a dashboard for US taxpayers which can answer important questions such as:
whats the burden on tax payers for prisoners in private prison vs state prison?
impact of pending court cases on economy and taxpayers?, correlation with specific types of crime?
correlation between certain types of firearms and crime?
