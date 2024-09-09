pipeline {
     agent any
     
        environment {
        // If needed, you can add environment variables here
    }

    stages {
        stage('Install dependencies') {
            steps {
                  sh 'npx playwright install --with-deps'    // Install project dependencies
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'                // Run Playwright tests
            }
        }

        stage('Archive Test Results') {
            steps {
                archiveArtifacts artifacts: 'test-results/**/*.png, test-results/**/*.json', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            junit 'test-results/**/*.xml'   // Publish test results in JUnit format
        }
        cleanup {
            cleanWs()  // Clean up workspace after the job
        }
    }
}
