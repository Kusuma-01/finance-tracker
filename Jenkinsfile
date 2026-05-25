pipeline {

    agent any

    stages {

        stage('Build Docker Images') {

            steps {

                bat 'docker-compose build'

            }

        }

        stage('Stop Old Containers') {

            steps {

                bat 'docker-compose down'

            }

        }

        stage('Run Containers') {

            steps {

                bat 'docker-compose up -d'

            }

        }

    }

}