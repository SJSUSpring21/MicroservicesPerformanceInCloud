# Team9
# Category: AI in Software Development - Approved
Idea#1: Introduction to the problem statement: Use AI to measure and improve Microservice performance

Microservices architecture is a common way to deploy containerized software in the cloud. However, as the number of microservices increases, the management complexity also increases which is due to distributed architecture. Also, Network latency and load balancing are other challenges.

Abstract: Developing a model to determine feasible cloud platform for different types of web-services based on their weightage(Heavy,medium,Light). Training model with parameters like response time, memory utilization, throughput etc. being received from Kubernetes report to predict threshold values for each type services. These predicted threshold values can then be used to determine correct cloud platform for services.

Approach: We plan to develop web services of different weightage like light, medium and heavy and then, we will deploy all these services to the different cloud platforms using docker. Here, we will be using Kubernetes to track performance of all types of services on each platform. After that we will take out reports from kubernetes and will consolidate them into csv and will figure out features(paramters) and labels(prediction values) needed to monitor these services. After tracking all this data for few sometime (few days to weeks) we will use predicted values as threshold value for each type of service considering traffic and latency. Using those threshold values, the model willbe trained and the decision will be made upon which type of service should go to which platform.

Persona : Development team and Dev-ops team.

Dataset Links: We plan to develop our own webservices and tool, to hit the server on each cloud platform and then, use the kubernetes reports for these services as our training data.

# Category: Immigration
Idea#2: Look at the questions to ask and available data sets here ( https://usafacts.org/issues/immigration/ ) and create a dashboard for legal immigrants that can help answer questions such as: 
what are the chances of a H1B visa being denied?
What will be the impact on a certain industry if H1B Visa is eliminated?
What will be the benefit to US economy if US implements time bond citizenship for immigrant workers? 

# Category: Crime & Justice
Idea#3: Look at available data sets and create a dashboard for US taxpayers which can answer important questions such as:
whats the burden on tax payers for prisoners in private prison vs state prison?
impact of pending court cases on economy and taxpayers?, correlation with specific types of crime?
correlation between certain types of firearms and crime?
