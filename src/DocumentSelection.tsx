import React, { useState } from 'react';

const documents = [
  {
    id: 'estimate',
    title: 'Смета',
    description: 'Стоимость работ и материалов.',
    tag: 'Доступно всем',
  },
  {
    id: 'contract',
    title: 'Договор',
    description: 'Сроки, условия, ответственность.',
    tag: 'PRO',
  },
  {
    id: 'acceptance',
    title: 'Акт',
    description: 'Подтверждение выполненных работ.',
    tag: 'PRO',
  },
  {
    id: 'receipt',
    title: 'Расписка',
    description: 'Подтверждение получения оплаты.',
    tag: 'PRO',
  },
];

const DocumentSelection: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState('estimate');
  const current = documents.find((doc) => doc.id === activeDoc) ?? documents[0];

  return (
    <section className="document-selection">
      <div className="section-header">
        <div>
          <p className="pill">Конструкторы</p>
          <h2>Выберите документ и заполните форму</h2>
          <p className="muted">
            Мы разделили конструкторы, чтобы вы не путались.
          </p>
        </div>
        <button className="secondary-button">История документов</button>
      </div>

      <div className="tab-scroll">
        {documents.map((doc) => (
          <button
            className={`tab-chip ${activeDoc === doc.id ? 'is-active' : ''}`}
            key={doc.id}
            onClick={() => setActiveDoc(doc.id)}
          >
            <span>{doc.title}</span>
            <span className="tab-badge">{doc.tag}</span>
          </button>
        ))}
      </div>

      <div className="document-grid">
        <article className="document-card is-active">
          <div>
            <p className="card-tag">{current.tag}</p>
            <h3>{current.title}</h3>
            <p className="muted">{current.description}</p>
          </div>
          <div className="builder-layout">
            <div className="builder-panel">
              <p className="builder-title">Поля для заполнения</p>
              <ul className="builder-list">
                <li>Данные клиента и исполнителя</li>
                <li>Описание работ и адрес объекта</li>
                <li>Стоимость, сроки, комментарии</li>
              </ul>
              <button className="primary-button">Открыть конструктор</button>
              <button className="ghost-button">Посмотреть пример PDF</button>
            </div>
            <div className="builder-preview">
              <p className="builder-title">Предпросмотр</p>
              <div className="preview-card">
                <p className="preview-title">{current.title}</p>
                <p className="preview-text">Здесь будет выглядеть документ по мере заполнения.</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="support-banner">
        <div>
          <h3>PRO даёт доступ к полным шаблонам</h3>
          <p className="muted">
            1 месяц, 6 месяцев, 1 год — чем дольше, тем выгоднее.
          </p>
        </div>
        <button className="primary-button">Выбрать PRO</button>
      </div>
    </section>
  );
};

export default DocumentSelection;
