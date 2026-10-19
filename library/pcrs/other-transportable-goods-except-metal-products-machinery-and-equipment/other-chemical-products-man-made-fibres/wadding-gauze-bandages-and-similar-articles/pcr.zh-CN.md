---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wadding-gauze-bandages-and-similar-articles
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 非无菌未浸药脱脂棉卷

## 1. 范围与适用性

本环境LCA制造方法适用于未浸药、非无菌、以包裹棉卷供货的亲水纯棉脱脂棉：从外购原生轧花棉纤维开始，经碱煮练、过氧化氢漂白、清洗/漂洗、条件性酸整理、脱水、干燥、成卷/梳理、卷绕/裁切、包装和质量放行。声明基础路线外购蒸汽及电力，废水送外部处理。须记录实际纤维等级与供货含水率、漂白/整理化学品、干燥能耗、外包工序和每个包装组件。政府路线图支持工序分解，独立产品说明中的GIMA 34838棉卷证明真实非无菌纯棉市场状态，不证明GIMA工厂的化学路线或包装组成。

排除织造纱布、绷带、棉球/棉垫、合成或混纺纤维、棉短绒/再生棉替代、药物浸渍、复合/粘贴敷料及无菌产品。纤维、漂白化学、供货形态、无菌状态或包装结构不同，须分别审查适用性和清单；CPC 35279宽于本方法。不提供临床敷用说明、疗效等效、吸液率默认值、寿命默认值或灭菌操作参数。路线图还讨论伽马处理/无菌棉，其陈述不能转用到本非无菌产品。不能抹去实际处理：若存在，保留其供应商、材料、能源、运输、损耗和排放，重新审查供货状态边界后再判断方法适用性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.wadding-gauze-bandages-and-similar-articles |
| classification_refs | CPC 3.0 35279; 分类宽于方法；映射待审 |
| covered_products | 一种声明SKU的包裹供货、未浸药、非无菌纯棉脱脂棉卷 |
| excluded_products | 纱布；绷带；球/垫；其他纤维；浸渍/复合/无菌产品 |
| representative_product | 非无菌棉卷，例如GIMA 34838；标称包装大小不是通用实测质量 |
| production_route | 原生棉纤维；碱煮练；过氧化氢漂白；清洗；条件性盐酸整理；脱水；干燥；梳理；卷绕；裁切；包装；放行 |
| market_state | 达到声明含水状态的非无菌棉卷，采用声明的纸/PE包装；实际配置有纸箱时计入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明的非无菌纯棉脱脂棉卷；仅为材料供货功能，不声明临床等效 |
| How much | 声明放行含水状态下1 kg净棉，不含全部包装 |
| How well | 符合实际SKU验收规格并报告检验证据；不设通用吸液或无菌性能 |
| How long or cycle | 一个匹配的实际生产/放行批群；不假设使用次数或寿命 |
| reference_flow_link | finished_roll |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 绷带、纱布、绷带和类似物品 `6014f191-3872-4607-8c5a-c4a216c96724` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纯棉纤维等级和产地; 原生轧花棉纤维; 供货与放行含水率; 棉卷尺寸与实际净棉质量; 非无菌及未浸药状态; 煮练及过氧化氢/整理制剂; 干燥及蒸汽供应; 外包工序; 纸及PE等级与实际包装结构; 放行门及批群; 场址地理及期间; 废物/处理路线; 仓储与发运覆盖 |

参考门为声明包装及验收步骤完成后新增正质量放行输出。Q不是发运量。每一物理批次只计一次；退回及再验收不形成新产量。缺少必需限定信息的前景包不完整。宽泛原生参考身份及全部限制保留在终端流卡中。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用cp_release称量新增唯一放行棉的净质量，扣除纸、袋和纸箱，采用实际放行含水状态；终端行为1 kg。 |
| wet_supply | 纤维及商品溶液 | Mass | kg | 记录完整供货湿质量；独立测定含水率/浓度，仅用于干纤维、活性物和载体水子账；不重复采购组分。 |
| unit_conversion | 原始表计和计数记录 | Measured quantity | kg; kWh; t km | 按实际净包装质量转换计数，按独立适用的密度及条件转换体积，速率才乘持续时间；已积分体积不再乘时间，次级属性系数不是密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收到原生轧花棉纤维及分别供货的化学品、公用工程和包装 |
| starting_condition_role | 外部购入投入，携带上游种植/轧花负荷 |
| product_classification_scope | 仅CPC 35279中限定的非无菌未浸药纯棉卷子集 |
| recursive_input_rule | 外购已净化棉保留既有加工负荷；披露入口门变化，不重复建模净化；这是须复核的边界变体，不能更名成原生棉纤维。 |
| upstream_dataset_requirement | 匹配纤维产地/等级、商品制剂、公用工程、包装及外包处理provider；通用身份不能选择provider |
| disclosure | 声明纳入场址、期间、外包方、放行前仓储、不合格品及放行后账覆盖；不提供实测工业平均值 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | 制造 | 纳入实际开松/除杂、煮练、漂白、全部漂洗/整理、脱水、干燥、梳理、转换、质检、包装、内部搬运和清洁，包括失败运行及返工。外购热/电及实际外包工序计入一次；厂内锅炉、厂内废水处理或其他能源路线须显式扩展过程，分别列燃料、水、化学品、废物和基本流，不能漏掉负荷。 | `msme-cotton-wool-roadmap` |
| boundary_gate | 生产及成品 | 生产止于新增质量放行；不能把同批已放行Q的期末成品库存再加作生产输出。在独立仓储/发运账保留成品期初末库存及结转负荷；保留真实仓储、包装、搬运、运输和退回负荷。合并各账须抵消内部产品及负荷交接。交付门数据集须采用实际净交付量及匹配的成品期初末库存和结转负荷，不能更名Q或默认放行等于交付。 |  |
| boundary_state | 供货状态 | 非无菌不能成为删除实际处理的理由。记录真实外包处理及损耗；无菌或浸药输出在独立重审前不适用本范围。临床使用及寿命终止位于本制造数据集之外，须披露。 | `gima-nonsterile-cotton-roll` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacture | 棉准备、转换、包装和放行一体化过程 | required | 声明原生棉/过氧化氢路线 | 拥有全部放行前原始分子及新增放行Q | finished_roll: 1 kg |
| storage_dispatch | 独立放行后仓储与发运账 | conditional | 报告数据集实际纳入放行后活动 | 拥有本账原始负荷及成品库存结转负荷；不产生新Q | 同一可识别放行批群；每1 kg参考流的附加负荷 |

### 过程：棉卷制造 (`manufacture`)

#### 输入

##### 产品流

###### 原生轧花棉纤维 (`cotton_lint`)

记录进厂棉包等级、来源、含水率和杂质；这是棉纤维，不是棉短绒、纱线、织物或合成纤维。

- 选定流：原生轧花棉纤维
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 氢氧化钠水溶液 (`caustic_solution`)

按供货实测浓度记录整份外购煮练溶液；NaOH组分和载体水仅作子账。

- 选定流：氢氧化钠水溶液
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 过氧化氢水溶液 (`peroxide_solution`)

本声明漂白路线使用的整份外购过氧化氢溶液，包括实际稳定剂配方；不能用次氯酸盐替代。

- 选定流：过氧化氢水溶液
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 碳酸钠 (`soda_ash`)

仅在实际煮练配方使用此单独外购化学品时纳入，否则记录缺用证据。

- 选定流：碳酸钠
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 煮练洗涤剂制剂 (`detergent`)

一种有身份记录的外购洗涤剂制剂，注明供应商等级和完整供货组成；不虚构表面活性剂物种或剂量。

- 选定流：煮练洗涤剂制剂
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 盐酸水溶液 (`acid_solution`)

仅在实际用于去除残碱时纳入整份外购稀酸；其他酸须独立原子交换并重新核对路线。

- 选定流：盐酸水溶液
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`msme-cotton-wool-roadmap`

###### 工艺用水 (`water`)

计量煮练、清洗、漂洗和清洁实际单独补水；回用水是内部循环，溶液载体水不能重复采购。

- 选定流：工艺用水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`msme-cotton-wool-roadmap`

###### 外购工艺蒸汽 (`steam`)

使用交付蒸汽质量、进汽及回水焓和实际凝结水返回量；外购蒸汽生产负荷位于上游，不再重复为厂内燃料。

- 选定流：外购工艺蒸汽
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`msme-cotton-wool-roadmap`

###### 外购电力 (`electricity`)

记录开松、脱水、干燥、梳理、卷绕、裁切、封装、质检、清洁、失败运行和放行前搬运负荷，注明实际供电电压和地理。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`msme-cotton-wool-roadmap`

###### 卷内隔离纸 (`paper_interleaf`)

使用时记录随卷供货的实际纸张等级和质量；包装不计入棉参考质量，但其生产、转换和损耗须纳入。

- 选定流：卷内隔离纸
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`msme-cotton-wool-roadmap`

###### 聚乙烯包装袋 (`pe_bag`)

记录实际单一热封聚乙烯袋的等级和质量；制造商示例不证明树脂等级、厚度或包装质量。

- 选定流：聚乙烯包装袋
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`msme-cotton-wool-roadmap`

###### 瓦楞运输纸箱 (`carton`)

仅在声明放行配置实际配有纸箱时纳入瓦楞纸箱；不能由销售单位推定纸箱数量或组成。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`msme-cotton-wool-roadmap`

#### 输出

##### 产品流

###### 绷带、纱布、绷带和类似物品 (`finished_roll`)

终端产品输出仅为限定的非无菌、未浸药纯棉卷。原生名称为宽泛家族，名称flowProperties分量为空，混合/位置为生产混合、在工厂，路线为成品、已制造，备注为HS 2022 30.05；无CAS及geography/locationOfSupply字段，类型为Product flow，仅有Mass属性。中文basename重复“绷带”，按原文保留，不证明其为纱布或绷带结构；原件不提供纤维、无菌状态、包装、性能或provider数量，所有SKU限定须另证。

- 选定流：绷带、纱布、绷带和类似物品 `6014f191-3872-4607-8c5a-c4a216c96724`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`gima-nonsterile-cotton-roll`

###### 返回蒸汽凝结水 (`condensate_return`)

记录实际跨界凝结水及其焓；内部凝结水循环不是外部交换，也不是棉共产品。

- 选定流：返回蒸汽凝结水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`msme-cotton-wool-roadmap`

##### 废物流

###### 废弃棉纤维 (`cotton_reject`)

按去向称量弃置的开松/梳理废棉、质检取样及不可回收不合格品；内部返工交接不是弃置废物。

- 选定流：废弃棉纤维
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

###### 棉加工废水 (`wastewater`)

计量送往外部处理的合并湿法废水及实际组成；处理及运输负荷计入一次，不虚构直接入河排放。

- 选定流：棉加工废水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

###### 卷内隔离纸废料 (`paper_scrap`)

此纸废料与废棉、塑料废料分开计量并连接实际处理。

- 选定流：卷内隔离纸废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

###### 聚乙烯袋废料 (`pe_scrap`)

此薄膜废料单独计量并连接实际回收或处置。

- 选定流：聚乙烯袋废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

###### 瓦楞纸箱废料 (`carton_scrap`)

使用纸箱时单独记录破损纸箱。

- 选定流：瓦楞纸箱废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

##### 基本流

###### 排入空气的水蒸气 (`water_vapour`)

由独立测得的湿/干纤维、水、蒸汽和废水平衡确定实际蒸发水；不能从同一残差同时反推未知反应水和未知出口。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_balance`
- 来源：`msme-cotton-wool-roadmap`

###### 排入空气的棉颗粒物 (`fibre_dust`)

存在时纳入捕集后实测逸散颗粒物；收集尘属于废物，不能再计为空气排放。

- 选定流：排入空气的棉颗粒物
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`msme-cotton-wool-roadmap`

### 过程：仓储与发运 (`storage_dispatch`)

#### 输入

##### 产品流

###### 外购电力 (`storage_electricity`)

实际纳入放行后仓储账时，按同一放行批群及停留期保留计量仓储和电动搬运能耗；不能移入制造原始分子。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage`
- 来源：

###### 柴油 (`handling_diesel`)

该账使用柴油搬运时纳入实际燃料，数据集另列上游燃料及独立有证据的燃烧排放；缺用须有记录，不能默认零。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage`
- 来源：

###### 公路货物运输服务 (`dispatch_freight`)

报告发运时纳入实际归属的运输质量乘距离，并保留provider的空返和载重率处理；不赋默认距离或交付量。

- 选定流：公路货物运输服务
- 流属性/单位：运输服务 / t km
- 数量规则：A_i / Q，以原始行单位每1 kg参考流仅报告一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | 共用设备和公用工程 | 先分开SKU/路线/无菌状态/包装批群。共用负荷用表计或有记录的物理因果分配；失败及零产出运行保留在其因果批群。不赋默认收率、检验损失或经济分配系数。 | jrc-ilcd-2010-allocation |
| allocation_rework | 返工、废物及共产品 | 内部回流在整合时抵消并增加实际重复加工负荷；退回/再验收棉不是新产量。废棉按废物处理，除非有实际可销售共产品规格及分配声明；不能假设替代产品抵扣。外部处理及回收按声明核算约定计入一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

aggregation_rule列仅声明最终报告基准。所有采集方法保留未除的原始分子；仅下方normalize_release负责唯一相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 新增验收输出 | foreground_records | SKU；批号；首次放行事件；净棉质量；皮重；含水率；不合格品；退回；WIP | 使用校准秤称量新增验收棉卷并核对唯一批次首次放行。Q为正的新增净棉放行量，不是发运或再验收；保留失败/零产出批及WIP账，不造Q。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 放行台账、秤校准及SKU验收检验 |
| cp_materials | manufacture | 纤维及化学品供货 | foreground_records | 接收质量；领用质量；等级；棉产地；含量；含水率；载体水；库存期初末；退料；WIP负荷 | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 核对领用/退回库存、整份溶液及单独购入的混配成分；记录混配能耗/损失。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 发票、库存记录、供应商组成及化验 |
| cp_water | manufacture | 用水及湿加工 | foreground_records | 水表；批次；清洗/漂洗补水；回用；溶液水；含水率；WIP水 | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 分开计量补水与循环，不重复采购载体水。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 校准表计及批次水记录 |
| cp_utilities | manufacture | 电及蒸汽 | foreground_records | 表计起止；kWh；蒸汽质量；进汽焓；凝结水质量/焓；区间；分配；待机及失败运行用量 | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 计量供能及凝结水，保留实际供应电压、地理及转换依据。 | kWh; kg; kJ/kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 表计、公用工程账单、蒸汽状态及回水记录 |
| cp_packaging | manufacture | 每个包装组件 | foreground_records | SKU物料表；组件等级；领用/退回质量；单位皮重；包装批次；废料；包装库存及WIP | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 每个组件分别称量；存在的纸、袋、纸箱、油墨、标签或封口负荷均须在数据集中独立交换保留。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 物料表、包装称量及领用记录 |
| cp_waste | manufacture | 不合格品、废水及排放 | foreground_records | 流；质量；含水率；组成；处理去向；联单；颗粒物检测；取样；失败批；WIP结转废物负荷 | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 计量各流及独立有证据的实际排放物种；保留外包处理及运输。不能用COD代替物种或物理质量闭合。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 废物联单、废水分析、provider及排放记录 |
| cp_balance | manufacture | 物理及水平衡 | foreground_records | 湿/干纤维；全部溶液质量/含量；游离及结合水；蒸汽/凝结水；废水；蒸发；废品；独立物种/反应；WIP | owner采集未除的原始期间总量及期初末WIP数量和结转负荷，包括失败、零产出和返工运行；本处不得执行A_i/Q。 物理质量/元素与独立证据化学及水相变化分别核对；报告未解决闭合不确定性，不能用残差拟合反应水。 | kg | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 独立含水率、组成、水及出口测量 |
| cp_storage | storage_dispatch | 实际独立仓储及发运负荷 | foreground_records | 放行批群；成品期初末质量及结转负荷；内部交接；停留期；发运/退回质量；电力；柴油；运输质量/距离；重新包装及废物 | owner为可识别批次及实际停留期保留未除的仓储、包装、搬运、发运、退回及返工数量，以及成品期初末库存结转负荷。本处不除、不造新Q，不删除未交付品负荷。实际存在时在数据集中补齐重新包装、燃烧排放及废物原子行。 | kg; kWh; t km | 每批及每表计区间 | 完整实际期间及匹配批群和结转负荷 | 声明场址及具名外包方 | 每 1 kg 参考流 | 仓储批次账、库存负荷、发运记录及表计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_cohort | 全部制造分子 | 各交换保留完整原始消耗/负荷，含失败/零产出及重复返工。同产品、路线和供货状态批群的A_i = 原始期间负荷 + 期初WIP结转负荷 - 期末WIP结转负荷；须有实际交接记录。直接原始物理交换与历史结转负荷分别可追溯，不能把结转质量再次采购。不能扣减已计入Q的成品库存。 | raw_period; opening_WIP; closing_WIP; cp_materials; cp_utilities; cp_waste | A_i |  |
| normalize_release | 终端参考外全部纳入清单行 | q_i = A_i / Q；Q为cp_release中匹配批群唯一正的新增质量放行净棉质量，单位kg。先将原始记录转换到各行单位一次。这是唯一归一化；清单数量表达式、协议汇总引用及本规则描述同一报告操作，不是连续多次相除。storage_dispatch使用独立核对并归属同一放行批群及Q的A_i，未结束的停留期作为范围限制披露。Q <= 0不能形成归一化放行产品数据集；负荷保留于匹配因果批群。 | A_i; Q; cp_release; cp_storage | q_i |  |
| supply_subledgers | 溶液、棉含水率及水 | 每份整购制剂m的组分质量=m乘独立化验分数。棉干质量=湿质量乘(1-实测含水率)。载体水、活性物和纤维干质量为子账，不是额外外部投入。实际物种及反应水生成/消耗须独立证据；相变及游离/结合水变化分开，不能用COD或闭合残差拟合。 | whole_supply_mass; assay_fraction; measured_moisture; cp_balance | constituent_and_water_subledgers |  |
| finished_ledger | 仓储及发运核对 | 期末成品库存=期初成品库存+新增放行+实际退回-实际发运-处置，其他实际移动须显式记录。历史负荷随同批次结转；退回/再验收不增加新增放行。整合时抵消放行至仓储的内部交接及负荷。另行报告实际净交付时须排除未交付库存；这是不同分母，须另作匹配结转负荷核算。 | cp_release; cp_storage; stock_movements; carried_burdens | reconciled_finished_ledger |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | 供货产品 | 保留纤维鉴别、非无菌/未浸药声明、实际配方、尺寸、含水率、包装物料表及验收检测。通用流身份不证明性能或背景/provider兼容。 | 供应商及放行证据 |
| quality_completeness | 全部原始负荷及交接负荷 | 核对库存、WIP、零产出运行、不合格品、返工、外包、公用工程及处理去向。每项新增实际成分、包装组件、燃料、废物和排放须有独立原子数据集交换。显式披露未覆盖范围及剩余不确定性。 | 原始账及独立平衡 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考与范围 | 要求终端Product输出finished_roll、匹配参考UUID、1 kg净棉、完整必需限定及声明新增放行门。其他纤维、形态、无菌/药物/复合状态或未审查包装路线不能直接采用。 | `gima-nonsterile-cotton-roll` |
| validate_period | 归一化及owner | 要求正的唯一Q、含失败/零产出和返工的匹配原始分子、完整WIP结转负荷及一次normalize_release。采集端不能预先除Q；不能把期末成品加到新增放行或重复计退回。纳入仓储/发运时须有独立owner及保留的负荷。 |  |
| validate_balance | 质量、水及环境交换 | 按声明基准核对物理质量/元素及含水率，实际物种/反应采用独立证据。整份制剂不能再拆组分重复采购；积分体积不能再乘时间。不能用同一残差拟合未知反应水及未知出口。保留处理/provider证据及不确定性，不能由COD声称闭合。 |  |
| validate_evidence | 声明限制 | 公开项目配方、损耗、标称包装数量、吸液检测及灭菌讨论均为有条件背景，不是行业默认值、临床等效或操作说明。缺少实际前景证据使具体数据集不完整，不能生成实测值。 | `msme-cotton-wool-roadmap`; `gima-nonsterile-cotton-roll` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 该明确供货棉卷及声明放行门的环境建模 |
| allowed_use | SKU、路线、纤维、供货状态、含水率、包装、地理及期间匹配的制造清单 |
| excluded_use | 临床疗效/安全等效、处理操作说明、无菌或其他纤维替代、整个CPC覆盖及无限定交付门比较 |
| required_metadata | 纯棉纤维等级和产地; 原生轧花棉纤维; 供货与放行含水率; 棉卷尺寸与实际净棉质量; 非无菌及未浸药状态; 煮练及过氧化氢/整理制剂; 干燥及蒸汽供应; 外包工序; 纸及PE等级与实际包装结构; 放行门及批群; 场址地理及期间; 废物/处理路线; 仓储与发运覆盖 |
| required_quality_disclosure | 实际原始期间及批群；Q及首次放行去重；WIP及成品库存结转负荷；各协议owner；辅助身份/provider匹配缺口；来源及原生身份限制；分配及范围不确定性 |
| update_trigger | 纤维产地/等级、配方、外包、漂白、处理/无菌状态、干燥、包装、放行门、provider或场址/期间变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| msme-cotton-wool-roadmap | official_guidance | MSME Development Institute Chennai, S. Suresh Babuji, Road map for domestic manufacturing of Cotton Wool Absorbent, section 3.5/3.8 and section 5 part 7, PDF pp. 8-9, 25-26; https://www.dcmsme.gov.in/23_COTTON%20WOOL%20by%20Suresh%20Babuji-converted.pdf | 仅用于工序分解和纸/PE包装示例。印度示意项目，不是实测LCI或GIMA路线证明。其伽马/无菌段落为相反范围背景；不采用操作参数、质量数值、配方、收率、吸液或寿命默认值。 |
| gima-nonsterile-cotton-roll | handbook | GIMA S.p.A., COTTON WOOL 1000 g - roll, product 34838, Description and product information; https://www.gimaitaly.com/Prodotti/first-aid-emergency/dressing-medication-gauzes-plasters/cotton-wool/cotton-wool-1000-g-roll-34838 | 制造商原始产品证据：亲水100%棉、棉卷、非无菌。标称质量及销售单位数量仅识别一个产品，不是通用实测质量、使用量、性能或包装强度。未证明工厂路线、品种、供货地理或聚合物等级。 |
| jrc-ilcd-2010-allocation | handbook | 欧盟委员会JRC，ILCD Handbook General guide Detailed guidance，2010年3月第一版，第7.9.3节，PDF第277–278页／印刷第257–258页；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持归属型共用服务负荷归集中的虚拟拆分及决定性物理因果。不提供产品特定路线、组成、收率、排放或公用工程因子、固定分配份额、替代信用或完整PEF符合性。库存与归一化规则仍属本PCR的一致性推理。 |
