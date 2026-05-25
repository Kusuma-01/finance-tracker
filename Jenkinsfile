pipeline {

    agent any

    stages {

        stage('Build Docker Images') {

            steps {

                sh 'docker-compose build'

            }

        }

        stage('Stop Old Containers') {

            steps {

                sh 'docker-compose down'

            }

        }

        stage('Run Containers') {

            steps {

                sh 'docker-compose up -d'

            }

        }

    }

}