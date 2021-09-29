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
1. Add the following section to your **README.md** file. Just make sure that you use `<!-- QUOTE:START --><!-- QUOTE:END -->` in your readme. The workflow will replace this comment with the amazing quotes: 
    ```markdown
    <!-- QUOTE:START -->
    <!-- QUOTE:END -->
    ```
1. Create a folder named `.github` and create a `workflows` folder inside it, if it doesn't exist.
1. Create a new file named `quote-workflow.yml` with the following contents inside the workflows folder:
```yaml
name: Quote workflow
on:
  schedule: # Run workflow automatically
    - cron: '0 * * * *' # Runs every hour, on the hour

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  update-readme-with-quote:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Setup node 14
        uses: actions/setup-node@v2
        with:
          node-version: 14.x
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

## Bugs

If you are experiencing any bugs, don’t forget to open a [new issue](https://github.com/jhamadhav/quote-workflow/issues/new).

## Liked it?

Hope you liked this project, don't forget to give it a star ⭐.
