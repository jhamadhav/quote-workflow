# Quote workflow

<p align="center">
<a target="_blank" href="https://jhamadhav.com/" alt="Quote demo"><img src="./assests/images/quoteDemo.png"></img></a>
</p>

## Quote sample
<!-- QUOTE:START -->
<p align="center"><br><i>If you change the way you look at things, the things you look at change.</i><br><i>– Wayne Dyer.</i><br></p>      
<!-- QUOTE:END -->

## How to use

1. Star this repo 😛
1. Go to your repository
1. Add the following section to your **README.md** file.<br>Just make sure that you use `<!-- QUOTE:START --><!-- QUOTE:END -->` in your readme.<br>The workflow will replace this comment with the amazing quotes: 
    ```markdown
    <!-- QUOTE:START -->
    <!-- QUOTE:END -->
    ```
1. Create a folder named `.github` and create a `workflows` folder inside it, if it doesn't exist.
1. Create a new file named `quote-workflow.yml` with the following contents inside the workflows folder:
```yaml
name: Quote workflow
on:
  push:
  schedule: # Run workflow automatically
    - cron: '0 */6 * * *' # Runs every six hour

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  update-readme-with-quote:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: pull script to get quote
        uses: jhamadhav/quote-workflow@main
      - name: Commit and push changes
        run: |
          git config --global user.name "jhamadhav"
          git config --global user.email "contact@gmail.com"
          git add -A
          git commit -m "New Quote added"
          git push
```

1. Commit and wait for it to run automatically or you can also trigger it manually to see the result instantly. To trigger the workflow manually.

## Thanks to

- [freeCodeCamp](https://github.com/lukePeavey/quotable) for making this amazing quote api free for all

- [Gautam krishna R](https://github.com/gautamkrishnar/blog-post-workflow) for his brilliant `blog-post-workflow` that I have been using and which inspired me to make this `quote-workflow` of my own. I got to learn a lot of stuff from reading his code and README.

- [Suraj Jha](https://jhasuraj.com) with whom I discussed and lot and we both learned bunch of things while exploring github actions/workflow and more

## Bugs

If you are experiencing any bugs, don’t forget to open a [new issue](https://github.com/jhamadhav/quote-workflow/issues/new).

## Liked it?

Hope you liked this project, don't forget to give it a star ⭐.
