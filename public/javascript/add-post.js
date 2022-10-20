async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();

  const response = await fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify({
      title,
      post_body: content
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.getElementById('add-post').addEventListener('submit', newFormHandler);