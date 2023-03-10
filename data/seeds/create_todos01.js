/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const defGorevler = [
  {Adi:"Sağlıklı Beslen",Aciklama:"Sağlıklı Ol"}
]
const defTasklar = [
  {Adi:"Spora Git",Aciklama:"Spor Yap",Tarih: new Date(), GorevId:1}
]


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Gorevler').del()
  await knex('Gorevler').insert(defGorevler);

  await knex('Tasklar').del()
  await knex('Tasklar').insert(defTasklar);
};
