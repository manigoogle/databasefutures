// This is not actual code but a representation of the IAM configuration needed

// 1. Grant Cloud Run Invoker role to google.com domain
// gcloud run services add-iam-policy-binding database-futures \
//   --member="domain:google.com" \
//   --role="roles/run.invoker" \
//   --region=us-central1

// 2. Alternative: Grant access to specific Google groups
// gcloud run services add-iam-policy-binding database-futures \
//   --member="group:your-team@google.com" \
//   --role="roles/run.invoker" \
//   --region=us-central1
