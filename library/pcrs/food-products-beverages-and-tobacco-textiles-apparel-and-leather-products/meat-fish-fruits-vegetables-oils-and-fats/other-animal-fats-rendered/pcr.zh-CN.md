---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-rendered
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他熬制动物脂肪

## 1. 范围与适用性

本 PCR 适用于联合国 CPC 3.0 子类 21529“其他熬制动物脂肪”的前景数据包。官方解释性说明表明，该子类虽为剩余类，却列举了具体产品：猪脂油和猪脂硬脂；油脂油、牛羊脂硬脂和牛羊脂油；骨油、骨髓油、蚕蛹油、蛋黄油、龟蛋油、足油、胫骨油、蛇油、陆龟油、水貂油和兔油；熬制熊脂、马脂、河马脂、蟹脂、软体动物脂、兔脂和龟脂；以及羊毛脂、羊毛醇、羊毛脂油精和羊毛脂硬脂。

该子类排除猪脂本身（21521）、家禽脂本身（21522）、牛羊脂本身（21523）、鱼肝油（21524）、其他鱼类脂油（21525）、海生哺乳动物脂油（21526）、粗羊毛脂（21519）、未熬制动物脂肪（2151）及 21590 的化学改性动物脂肪。每个前景数据包须指明一个具体动物来源、解剖物料或上游原料、一个具体脂肪/油/分提产品以及一条具体路线，不得使用通用来源物料选择器。

对直接熬制的脂肪和油，路线须声明为干法或湿法熬炼，并识别实际采用的沥滤、压榨、离心、过滤或其他分离步骤。分提产品须将接收的猪脂或牛羊脂链接至已声明熬制路线的上游数据集。羊毛脂产品是 CPC 21529 对组织熬炼的明确例外，须改为声明羊毛洗涤脂回收和衍生物加工路线。本 PCR 不提供默认数量、性能范围或替代估算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-rendered` |
| classification_refs | CPC 3.0: 21529, Other animal fats, rendered |
| covered_products | 仅限官方 CPC 21529 明确包含的具名产品与其他熬制动物脂肪；每个数据集识别一个具体产品。 |
| excluded_products | CPC 21521 猪脂本身；21522 家禽脂；21523 牛羊脂；21524 鱼肝油；21525 其他鱼类脂油；21526 海生哺乳动物脂油；2151 未熬制脂肪；21590 化学改性脂肪。 |
| representative_product | 熬制马脂，并声明马来源及实际熬炼/分离路线。 |
| production_route | 来源接收与分隔；一条声明的干法熬炼、湿法熬炼、已熬制脂肪分提或羊毛脂路线；分离/净化；包装、储存与放行；分配的清洗；条件性场内废水处理。 |
| market_state | 达到声明等级和法规预定用途状态、可发运的散装或包装脂肪、油、分提产品或羊毛脂衍生物。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个可发运 CPC 21529 产品的净质量，声明具体动物来源、原料、具名产品、路线、等级及预定用途状态。 |
| How much | 1 kg 净合格产品；不含包装质量。 |
| How well | 满足声明的合同规格、污染控制、适用动物副产品状态及放行准则。 |
| How long or cycle | 声明报告期内一个可识别批次或连续生产批次。 |
| reference_flow_link | 参考交换为过程 `packaging_storage_release` 中的产出卡 `packaging_reference_product_output`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | exact animal species or wool source; anatomical tissue or upstream product feedstock; exact CPC 21529 product identity; dry-rendering or wet-rendering route and separation steps for rendered-tissue products; upstream rendering route for fraction feeds; wool-scouring recovery route for wool-grease products; batch or continuous mode; product grade; human-consumption/feed/technical intended-use status; site geography; reporting period; packaging configuration; co-product and waste destinations |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。仅有通用“其他动物脂肪”标签而无具体产品与来源身份的数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据经校准发运测量扣除包装皮重后确定净合格产品质量，并归一化为恰好 1 kg。 |
| `material_mass` | 来源物料、化学品、过滤介质、固体产品及固体废物 | Mass | kg | 对具名原子流使用经校准秤、发票、领用或转移记录；适用时保留干湿基准。 |
| `water_mass` | 工艺水 | Mass | kg | 仅使用文件化的温度适用密度转换实测水体积，并保留原始体积记录。 |
| `wastewater_volume` | 每个具名废水流 | Volume | m3 | 使用来源特定流量计或储罐标定，并保持采样期匹配。 |
| `electricity_energy` | 每个阶段电力卡 | Energy | kWh | 使用阶段分表；无法避免共享电表时，依据文件化因果驱动量计算并披露分配。 |
| `thermal_energy` | 外购蒸汽和外购热水 | Energy | MJ | 使用供应商仪表或发票能量；仅计量质量时，记录焓值输入和计算。 |
| `fuel_energy` | 天然气、柴油和液化石油气 | Energy | MJ | 使用供应商或批次特定低位热值转换实测燃料数量，并保留原始数量和因子。 |
| `packaging_mass` | 每个包装组件 | Mass | kg | 使用产品特定包装物料清单和领用量；记录可重复使用容器循环，不设默认循环次数。 |
| `emission_mass` | 每个具名排放或排水污染物 | Mass | kg | 使用直接监测或由实测活动量与文件化场址特定因子计算；识别方法和期间。 |
| `co_product_mass` | 每个具名联产品 | Mass | kg | 分别计量每种产品，并在分配前纳入批次质量平衡。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground operations | 纳入来源验收、分隔、声明的转化与分离路线、净化、受控储存/包装、分配的清洗，以及直至可发运放行的条件性场内废水处理。 | `ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `eu-pef-2021-2279` |
| `boundary_upstream_inputs` | purchased inputs | 将动物来源物料、已熬制猪脂或牛羊脂、粗羊毛脂、电力、蒸汽、热水、每种燃料、水、每种化学品、每种过滤介质和每个包装组件保留为明确上游产品投入。 | `eu-pef-2021-2279`; `eu-regulation-1069-2009` |
| `boundary_downstream_exclusions` | downstream life cycle | 将上游动物生产和入厂运输排除在前景门内边界之外；将发运后的配送、零售、使用和寿命终止排除，但研究边界需要时链接独立数据集。 | `eu-pef-2021-2279` |
| `boundary_route_lock` | route identity | 要求一个具体来源、一个具体产品身份和一条文件化路线：直接熬制组织产品采用干法或湿法，分提产品采用上游熬制链接加分提，羊毛脂产品采用羊毛洗涤脂回收。 | `un-cpc-3-0-explanatory-notes`; `us-epa-ap42-rendering`; `us-epa-wool-processing` |
| `boundary_atomic_exchange` | inventory exchanges | 每卡编写和采集一个物理或化学具体交换；每个新增的实际来源、化学品、过滤介质、包装、废物、污染物或排放均新增独立卡。 | `eu-pef-2021-2279`; `ec-jrc-sa-bref-2024` |
| `boundary_no_unrecorded_cutoff` | completeness | 不得仅因本 PCR 未提供 UUID 或数量而遗漏环境相关交换；须保持 UUID 未决并取得前景证据。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 每种具体来源组织、已熬制原料或粗羊毛脂在前景场址门口验收，并记录供应商、批次、质量及适用法规类别。 |
| starting_condition_role | 前景转化路线的上游产品投入。 |
| product_classification_scope | 仅限精确 CPC 21529，并受官方解释性说明的纳入和排除产品清单约束。 |
| recursive_input_rule | 若再加工 CPC 21529 产品，将该具名产品记录为上游产品投入并链接其既有生产数据集；不得在同一数据包内递归重建。 |
| upstream_dataset_requirement | 供应商数据集须保留具体动物/来源身份、地域、期间、路线和预定用途状态；已熬制分提原料须披露其熬制路线。 |
| disclosure | 披露门口状态、适用时的水分或杂质基准、储存条件、拒收质量、路线决策、分离序列及法规处置。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_material_receiving` | 来源物料接收与分隔 | `required` | 每个数据集均须纳入；每种验收的动物来源或已熬制原料均作为独立原子投入记录。 | `foreground_stage` | 分配给所声明产品批次的验收质量 |
| `dry_rendering_separation` | 干法熬炼、分离与净化 | `conditional` | 当声明路线通过加热脱水释放脂肪且不向熬炼装料加水时纳入。 | `foreground_stage` | 可归属于干法路线的可放行熬制脂肪产出质量 |
| `wet_rendering_separation` | 湿法熬炼、分离与净化 | `conditional` | 当声明路线向来源物料加入水或直接蒸汽蒸煮并随后进行相分离时纳入。 | `foreground_stage` | 可归属于湿法路线的可放行熬制脂肪产出质量 |
| `rendered_fat_fractionation` | 已熬制脂肪分提 | `conditional` | 生产猪脂油、猪脂硬脂、油脂油、牛羊脂硬脂或牛羊脂油时纳入；进入的猪脂或牛羊脂须链接其上游熬制数据集。 | `foreground_stage` | 所声明 CPC 21529 分提产品的质量 |
| `wool_grease_processing` | 羊毛脂分离与衍生物加工 | `conditional` | 仅在生产 CPC 21529 明确包含的羊毛脂、羊毛醇、羊毛脂油精或羊毛脂硬脂时纳入。 | `foreground_stage` | 所声明羊毛脂衍生 CPC 21529 产品的质量 |
| `packaging_storage_release` | 包装、成品储存与放行 | `required` | 纳入前景控制下直至可发运放行的每种包装配置与散装储存作业。 | `foreground_stage` | 1 kg 净合格产品，不含包装质量 |
| `cleaning_disinfection` | 设备清洗与消毒 | `required` | 纳入分配给所声明生产批次的清洗与消毒；每种化学品均保留独立原子卡。 | `foreground_support_stage` | 分配给所声明产品产出的清洗批次 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅当设施在场内处理所列具体废水流时纳入；否则记录送往外部处理数据集的具体废水。 | `foreground_support_stage` | 分配给所声明产品产出的处理废水体积 |

### 过程：来源物料接收与分隔（`source_material_receiving`）

#### 输入

##### 产品流

###### Horse fat, unrendered 验收原料（`receiving_horse_fat`）

Horse fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Horse fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Rabbit fat, unrendered 验收原料（`receiving_rabbit_fat`）

Rabbit fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Rabbit fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bear fat, unrendered 验收原料（`receiving_bear_fat`）

Bear fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Bear fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Crab fat, unrendered 验收原料（`receiving_crab_fat`）

Crab fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Crab fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Mollusc fat, unrendered 验收原料（`receiving_mollusc_fat`）

Mollusc fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Mollusc fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Turtle fat, unrendered 验收原料（`receiving_turtle_fat`）

Turtle fat, unrendered 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Turtle fat, unrendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine bone tissue 验收原料（`receiving_bovine_bone`）

Bovine bone tissue 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Bovine bone tissue
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine marrow tissue 验收原料（`receiving_bovine_marrow`）

Bovine marrow tissue 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Bovine marrow tissue
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Bovine foot tissue 验收原料（`receiving_bovine_foot`）

Bovine foot tissue 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Bovine foot tissue
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Chrysalis biomass 验收原料（`receiving_chrysalis`）

Chrysalis biomass 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Chrysalis biomass
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Egg yolk 验收原料（`receiving_egg_yolk`）

Egg yolk 是独立来源投入。接收记录须识别动物种类、解剖物料或来源产品、供应商、适用时的动物副产品法规类别、批次及验收质量。

- 选定流：Egg yolk
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### 接收阶段电网电力（`receiving_electricity`）

Electricity, grid 是来源物料接收与分隔边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### 接收场柴油（`receiving_diesel`）

Diesel fuel 是来源物料接收与分隔边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 废物流

###### 拒收马脂废物（`receiving_rejected_horse_fat`）

Rejected horse fat 是来源物料接收与分隔边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Rejected horse fat
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### 拒收兔脂废物（`receiving_rejected_rabbit_fat`）

Rejected rabbit fat 是来源物料接收与分隔边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Rejected rabbit fat
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### 原料容器废物（`receiving_hdpe_container_waste`）

High-density polyethylene feedstock-container waste 是来源物料接收与分隔边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：High-density polyethylene feedstock-container waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开来源物料接收与分隔的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receiving`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

### 过程：干法熬炼、分离与净化（`dry_rendering_separation`）

#### 输入

##### 产品流

###### Electricity, grid 投入（`dry_rendering_separation_electricity`）

Electricity, grid 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam 投入（`dry_rendering_separation_steam`）

Purchased steam 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water 投入（`dry_rendering_separation_hot_water`）

Purchased hot water 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas 投入（`dry_rendering_separation_natural_gas`）

Natural gas 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel 投入（`dry_rendering_separation_diesel`）

Diesel fuel 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas 投入（`dry_rendering_separation_lpg`）

Liquefied petroleum gas 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water 投入（`dry_rendering_separation_process_water`）

干法路线中的工艺水仅记录辅助冷却、密封、冷凝器或洗涤器用水；不得表述为加入干法熬炼装料的水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid 投入（`dry_rendering_separation_diatomaceous_earth`）

Diatomaceous earth filter aid 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Activated carbon filtration medium 投入（`dry_rendering_separation_activated_carbon`）

Activated carbon filtration medium 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Activated carbon filtration medium
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Cellulose filter sheet 投入（`dry_rendering_separation_cellulose_filter`）

Cellulose filter sheet 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Cellulose filter sheet
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

###### Horse rendered protein meal 联产品（`dry_horse_solids`）

Horse rendered protein meal 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Horse rendered protein meal
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendered protein meal 联产品（`dry_rabbit_solids`）

Rabbit rendered protein meal 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Rabbit rendered protein meal
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering solids 联产品（`dry_bovine_bone_solids`）

Bovine bone rendering solids 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Bovine bone rendering solids
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 废物流

###### Spent diatomaceous earth 废物（`dry_spent_diatomaceous_earth`）

Spent diatomaceous earth 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Spent activated carbon 废物（`dry_spent_activated_carbon`）

Spent activated carbon 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent activated carbon
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Used cellulose filter sheet 废物（`dry_used_cellulose_filter`）

Used cellulose filter sheet 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Used cellulose filter sheet
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开干法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 基本流

###### Carbon dioxide, fossil, to air 排放（`dry_co2_air`）

Carbon dioxide, fossil, to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Nitrogen oxides to air 排放（`dry_nox_air`）

Nitrogen oxides to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Sulfur dioxide to air 排放（`dry_so2_air`）

Sulfur dioxide to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Particulate matter, diameter below 2.5 um, to air 排放（`dry_pm25_air`）

Particulate matter, diameter below 2.5 um, to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Particulate matter, diameter below 2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Ammonia to air 排放（`dry_ammonia_air`）

Ammonia to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air 排放（`dry_h2s_air`）

Hydrogen sulfide to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：硫化氢，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Trimethylamine to air 排放（`dry_trimethylamine_air`）

Trimethylamine to air 是干法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Trimethylamine to air
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
### 过程：湿法熬炼、分离与净化（`wet_rendering_separation`）

#### 输入

##### 产品流

###### Electricity, grid 投入（`wet_rendering_separation_electricity`）

Electricity, grid 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam 投入（`wet_rendering_separation_steam`）

Purchased steam 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water 投入（`wet_rendering_separation_hot_water`）

Purchased hot water 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas 投入（`wet_rendering_separation_natural_gas`）

Natural gas 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel 投入（`wet_rendering_separation_diesel`）

Diesel fuel 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas 投入（`wet_rendering_separation_lpg`）

Liquefied petroleum gas 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water 投入（`wet_rendering_separation_process_water`）

Process water 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid 投入（`wet_rendering_separation_diatomaceous_earth`）

Diatomaceous earth filter aid 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Activated carbon filtration medium 投入（`wet_rendering_separation_activated_carbon`）

Activated carbon filtration medium 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Activated carbon filtration medium
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Cellulose filter sheet 投入（`wet_rendering_separation_cellulose_filter`）

Cellulose filter sheet 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Cellulose filter sheet
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

###### Horse rendered protein meal 联产品（`wet_horse_solids`）

Horse rendered protein meal 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Horse rendered protein meal
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendered protein meal 联产品（`wet_rabbit_solids`）

Rabbit rendered protein meal 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Rabbit rendered protein meal
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering solids 联产品（`wet_bovine_bone_solids`）

Bovine bone rendering solids 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Bovine bone rendering solids
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Horse rendering aqueous phase 联产品（`wet_horse_aqueous_phase`）

Horse rendering aqueous phase 仅在具有文件化用途且按产品控制离开时记录为产品产出；否则须按其具体去向记录为废物流。

- 选定流：Horse rendering aqueous phase
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Rabbit rendering aqueous phase 联产品（`wet_rabbit_aqueous_phase`）

Rabbit rendering aqueous phase 仅在具有文件化用途且按产品控制离开时记录为产品产出；否则须按其具体去向记录为废物流。

- 选定流：Rabbit rendering aqueous phase
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Bovine bone rendering aqueous phase 联产品（`wet_bovine_bone_aqueous_phase`）

Bovine bone rendering aqueous phase 仅在具有文件化用途且按产品控制离开时记录为产品产出；否则须按其具体去向记录为废物流。

- 选定流：Bovine bone rendering aqueous phase
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 废物流

###### Spent diatomaceous earth 废物（`wet_spent_diatomaceous_earth`）

Spent diatomaceous earth 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Spent activated carbon 废物（`wet_spent_activated_carbon`）

Spent activated carbon 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent activated carbon
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Used cellulose filter sheet 废物（`wet_used_cellulose_filter`）

Used cellulose filter sheet 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Used cellulose filter sheet
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开湿法熬炼、分离与净化的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 基本流

###### Carbon dioxide, fossil, to air 排放（`wet_co2_air`）

Carbon dioxide, fossil, to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Nitrogen oxides to air 排放（`wet_nox_air`）

Nitrogen oxides to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Sulfur dioxide to air 排放（`wet_so2_air`）

Sulfur dioxide to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Particulate matter, diameter below 2.5 um, to air 排放（`wet_pm25_air`）

Particulate matter, diameter below 2.5 um, to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Particulate matter, diameter below 2.5 um, to air
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Ammonia to air 排放（`wet_ammonia_air`）

Ammonia to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air 排放（`wet_h2s_air`）

Hydrogen sulfide to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：硫化氢，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Trimethylamine to air 排放（`wet_trimethylamine_air`）

Trimethylamine to air 是湿法熬炼、分离与净化边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Trimethylamine to air
- 流属性/单位：Mass / kg
- 数量规则：有直接烟气或作业边界监测时使用监测值；否则依据实测活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_rendering`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
### 过程：已熬制脂肪分提（`rendered_fat_fractionation`）

#### 输入

##### 产品流

###### Pig fat, rendered 分提原料（`fractionation_pig_fat`）

Pig fat, rendered 是分提的上游产品投入。其来源动物、熬制路线、供应商数据集及接收质量须保持明确。

- 选定流：Pig fat, rendered
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Tallow 分提原料（`fractionation_tallow`）

Tallow 是分提的上游产品投入。其来源动物、熬制路线、供应商数据集及接收质量须保持明确。

- 选定流：Tallow
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Electricity, grid 投入（`fractionation_electricity`）

Electricity, grid 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased steam 投入（`fractionation_steam`）

Purchased steam 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Purchased hot water 投入（`fractionation_hot_water`）

Purchased hot water 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Natural gas 投入（`fractionation_natural_gas`）

Natural gas 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Diesel fuel 投入（`fractionation_diesel`）

Diesel fuel 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Liquefied petroleum gas 投入（`fractionation_lpg`）

Liquefied petroleum gas 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### Process water 投入（`fractionation_process_water`）

Process water 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`

###### 硅藻土过滤助剂（`fractionation_diatomaceous_earth`）

Diatomaceous earth filter aid 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

###### Lard oil 产品（`fractionation_lard_oil`）

Lard oil 是一个 CPC 21529 分提产品。数据集须声明该具名产出是参考产品还是联产品，且不得与另一分提产品合并。

- 选定流：Lard oil
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Lard stearin 产品（`fractionation_lard_stearin`）

Lard stearin 是一个 CPC 21529 分提产品。数据集须声明该具名产出是参考产品还是联产品，且不得与另一分提产品合并。

- 选定流：Lard stearin
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Oleo-oil 产品（`fractionation_oleo_oil`）

Oleo-oil 是一个 CPC 21529 分提产品。数据集须声明该具名产出是参考产品还是联产品，且不得与另一分提产品合并。

- 选定流：Oleo-oil
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Oleostearin 产品（`fractionation_oleostearin`）

Oleostearin 是一个 CPC 21529 分提产品。数据集须声明该具名产出是参考产品还是联产品，且不得与另一分提产品合并。

- 选定流：Oleostearin
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`

###### Tallow oil 产品（`fractionation_tallow_oil`）

Tallow oil 是一个 CPC 21529 分提产品。数据集须声明该具名产出是参考产品还是联产品，且不得与另一分提产品合并。

- 选定流：Tallow oil
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`
##### 废物流

###### 废硅藻土过滤助剂（`fractionation_spent_diatomaceous_earth`）

Spent diatomaceous earth 是已熬制脂肪分提边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开已熬制脂肪分提的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fat_fractionation`
- 来源：`ec-jrc-sa-bref-2024`; `us-epa-ap42-rendering`; `fao-rendering-manual`; `eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

### 过程：羊毛脂分离与衍生物加工（`wool_grease_processing`）

#### 输入

##### 产品流

###### 粗羊毛脂原料（`wool_crude_grease`）

粗羊毛脂是 CPC 21529 羊毛脂衍生物的独立上游原料。须链接羊毛洗涤回收数据集并记录接收质量。

- 选定流：Crude wool grease
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Electricity, grid 投入（`wool_electricity`）

Electricity, grid 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Purchased steam 投入（`wool_steam`）

Purchased steam 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Purchased hot water 投入（`wool_hot_water`）

Purchased hot water 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Natural gas 投入（`wool_natural_gas`）

Natural gas 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Diesel fuel 投入（`wool_diesel`）

Diesel fuel 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Liquefied petroleum gas 投入（`wool_lpg`）

Liquefied petroleum gas 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Process water 投入（`wool_process_water`）

Process water 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Sodium carbonate 投入（`wool_sodium_carbonate`）

Sodium carbonate 仅在所声明羊毛脂路线实际使用且采购或投加记录能够识别时，作为一个化学品或过滤投入记录。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Sulfuric acid 投入（`wool_sulfuric_acid`）

Sulfuric acid 仅在所声明羊毛脂路线实际使用且采购或投加记录能够识别时，作为一个化学品或过滤投入记录。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Diatomaceous earth filter aid 投入（`wool_diatomaceous_earth`）

Diatomaceous earth filter aid 仅在所声明羊毛脂路线实际使用且采购或投加记录能够识别时，作为一个化学品或过滤投入记录。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

###### Lanolin 产品（`wool_lanolin`）

Lanolin 是一个具名 CPC 21529 产品。其生产批次、等级及参考产品指定须与其他每种羊毛脂衍生物分开。

- 选定流：Lanolin
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool alcohols 产品（`wool_wool_alcohols`）

Wool alcohols 是一个具名 CPC 21529 产品。其生产批次、等级及参考产品指定须与其他每种羊毛脂衍生物分开。

- 选定流：Wool alcohols
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool grease olein 产品（`wool_wool_grease_olein`）

Wool grease olein 是一个具名 CPC 21529 产品。其生产批次、等级及参考产品指定须与其他每种羊毛脂衍生物分开。

- 选定流：Wool grease olein
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool grease stearin 产品（`wool_wool_grease_stearin`）

Wool grease stearin 是一个具名 CPC 21529 产品。其生产批次、等级及参考产品指定须与其他每种羊毛脂衍生物分开。

- 选定流：Wool grease stearin
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### 废物流

###### Wool-scouring grit 废物（`wool_scouring_grit`）

Wool-scouring grit 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Wool-scouring grit
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool-grease separation sludge 废物（`wool_separation_sludge`）

Wool-grease separation sludge 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Wool-grease separation sludge
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Wool-scouring wastewater 废物（`wool_scouring_wastewater`）

Wool-scouring wastewater 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Wool-scouring wastewater
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`

###### Spent diatomaceous earth 废物（`wool_spent_diatomaceous_earth`）

Spent diatomaceous earth 是羊毛脂分离与衍生物加工边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开羊毛脂分离与衍生物加工的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wool_grease`
- 来源：`un-cpc-3-0-explanatory-notes`; `us-epa-wool-processing`; `eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

### 过程：包装、成品储存与放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### Steel packaging drum 投入（`packaging_steel_drum`）

Steel packaging drum 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：Steel packaging drum
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### High-density polyethylene packaging drum 投入（`packaging_hdpe_drum`）

High-density polyethylene packaging drum 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：High-density polyethylene packaging drum
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Low-density polyethylene packaging liner 投入（`packaging_ldpe_liner`）

Low-density polyethylene packaging liner 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：Low-density polyethylene packaging liner
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Corrugated fibreboard carton 投入（`packaging_fibreboard_carton`）

Corrugated fibreboard carton 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：Corrugated fibreboard carton
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Wooden pallet 投入（`packaging_wood_pallet`）

Wooden pallet 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Polyethylene stretch film 投入（`packaging_stretch_film`）

Polyethylene stretch film 是一个包装组件。记录其对所声明产品批次的领用质量；适用时须明确可重复使用容器的循环次数。

- 选定流：Polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 储存与包装电网电力（`packaging_electricity`）

Electricity, grid 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

###### 参考熬制动物脂肪产品（`packaging_reference_product_output`）

这是精确 CPC 21529 已核验的天工 Product 参考流。每个数据集须通过强制的动物来源、原料、具名脂肪或油产品及路线限定信息使数据库通用名称具体化。

- 选定流：其他动物脂肪，渲染 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_reference_net_mass` 扣除包装皮重后设为恰好 1 kg 净合格产品；具体产品身份仍为必需限定信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`un-cpc-3-0-explanatory-notes`; `un-cpc-3-0-retained-structure`; `eu-pef-2021-2279`
##### 废物流

###### Steel packaging waste 产出（`packaging_steel_waste`）

Steel packaging waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Steel packaging waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### High-density polyethylene packaging waste 产出（`packaging_hdpe_waste`）

High-density polyethylene packaging waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：High-density polyethylene packaging waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Low-density polyethylene liner waste 产出（`packaging_ldpe_waste`）

Low-density polyethylene liner waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Low-density polyethylene liner waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Corrugated fibreboard packaging waste 产出（`packaging_fibreboard_waste`）

Corrugated fibreboard packaging waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Wooden pallet waste 产出（`packaging_wood_waste`）

Wooden pallet waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Wooden pallet waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### Polyethylene stretch-film waste 产出（`packaging_stretch_film_waste`）

Polyethylene stretch-film waste 是包装、成品储存与放行边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Polyethylene stretch-film waste
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开包装、成品储存与放行的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

### 过程：设备清洗与消毒（`cleaning_disinfection`）

#### 输入

##### 产品流

###### Process water 投入（`cleaning_process_water`）

Process water 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Purchased hot water 投入（`cleaning_hot_water`）

Purchased hot water 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Electricity, grid 投入（`cleaning_electricity`）

Electricity, grid 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hydroxide 投入（`cleaning_sodium_hydroxide`）

Sodium hydroxide 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Nitric acid 投入（`cleaning_nitric_acid`）

Nitric acid 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hypochlorite 投入（`cleaning_sodium_hypochlorite`）

Sodium hypochlorite 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Peracetic acid 投入（`cleaning_peracetic_acid`）

Peracetic acid 是设备清洗与消毒边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 废物流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 废物流

###### Equipment pre-rinse wastewater 产出（`cleaning_prerinse_wastewater`）

Equipment pre-rinse wastewater 是可单独识别的废水流。记录其计量或储罐标定体积及去向，不得与另一清洗阶段合并。

- 选定流：Equipment pre-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Alkaline cleaning wastewater 产出（`cleaning_alkaline_wastewater`）

Alkaline cleaning wastewater 是可单独识别的废水流。记录其计量或储罐标定体积及去向，不得与另一清洗阶段合并。

- 选定流：Alkaline cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Acid cleaning wastewater 产出（`cleaning_acid_wastewater`）

Acid cleaning wastewater 是可单独识别的废水流。记录其计量或储罐标定体积及去向，不得与另一清洗阶段合并。

- 选定流：Acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Disinfection wastewater 产出（`cleaning_disinfection_wastewater`）

Disinfection wastewater 是可单独识别的废水流。记录其计量或储罐标定体积及去向，不得与另一清洗阶段合并。

- 选定流：Disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开设备清洗与消毒的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### Electricity, grid 投入（`wwt_electricity`）

Electricity, grid 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ferric chloride 投入（`wwt_ferric_chloride`）

Ferric chloride 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Calcium hydroxide 投入（`wwt_calcium_hydroxide`）

Calcium hydroxide 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氢氧化钙
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Sodium hydroxide 投入（`wwt_sodium_hydroxide`）

Sodium hydroxide 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 废物流

###### Dry-rendering condensate wastewater 投入（`wwt_dry_condensate`）

Dry-rendering condensate wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Dry-rendering condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Wet-rendering aqueous wastewater 投入（`wwt_wet_aqueous_wastewater`）

Wet-rendering aqueous wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Wet-rendering aqueous wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Wool-scouring wastewater 投入（`wwt_wool_scouring_wastewater`）

Wool-scouring wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Wool-scouring wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Alkaline cleaning wastewater 投入（`wwt_alkaline_cleaning_wastewater`）

Alkaline cleaning wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Alkaline cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Acid cleaning wastewater 投入（`wwt_acid_cleaning_wastewater`）

Acid cleaning wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Acid cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Disinfection wastewater 投入（`wwt_disinfection_wastewater`）

Disinfection wastewater 是场内处理的一个废水投入。须分别记录体积与来源过程，使污染负荷保持可归属。

- 选定流：Disinfection wastewater
- 流属性/单位：Volume / m3
- 数量规则：根据经校准仪表、秤、发票、领用记录或批次日志记录分配给场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 基本流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

#### 输出

##### 产品流

本过程在该方向与流类型下不预设交换；若现场存在，须新增一个具名原子卡并完成 UUID 审查。

##### 废物流

###### Wastewater-treatment screenings 产出（`wwt_screenings`）

Wastewater-treatment screenings 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Wastewater-treatment screenings
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge 产出（`wwt_daf_sludge`）

Dissolved-air-flotation sludge 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Biological wastewater-treatment sludge 产出（`wwt_biological_sludge`）

Biological wastewater-treatment sludge 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Biological wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：根据经校准秤、转移记录、废物联单或实验室支持的计算记录离开场内废水处理的数量；不得用默认值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`
##### 基本流

###### Chemical oxygen demand to water 排放（`wwt_cod_water`）

Chemical oxygen demand to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Biochemical oxygen demand to water 排放（`wwt_bod_water`）

Biochemical oxygen demand to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Biochemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total suspended solids to water 排放（`wwt_tss_water`）

Total suspended solids to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total nitrogen to water 排放（`wwt_tn_water`）

Total nitrogen to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Total phosphorus to water 排放（`wwt_tp_water`）

Total phosphorus to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Animal fat to water 排放（`wwt_animal_fat_water`）

Animal fat to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Animal fat to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ammoniacal nitrogen to water 排放（`wwt_ammoniacal_n_water`）

Ammoniacal nitrogen to water 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：Ammoniacal nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_effluent_load` 使用匹配的出水体积与代表性实测浓度计算排放负荷；不得使用作者默认浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Methane to air 排放（`wwt_methane_air`）

Methane to air 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接监测时使用监测值；否则依据实测处理活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Nitrous oxide to air 排放（`wwt_nitrous_oxide_air`）

Nitrous oxide to air 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接监测时使用监测值；否则依据实测处理活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Ammonia to air 排放（`wwt_ammonia_air`）

Ammonia to air 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接监测时使用监测值；否则依据实测处理活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

###### Hydrogen sulfide to air 排放（`wwt_h2s_air`）

Hydrogen sulfide to air 是场内废水处理边界上的一个原子交换。仅当该具名流实际存在且可追溯至所声明批次时记录。

- 选定流：硫化氢，排入空气
- 流属性/单位：Mass / kg
- 数量规则：有直接监测时使用监测值；否则依据实测处理活动量和文件化场址特定因子按 `calc_air_emission` 计算。不得使用作者默认值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格 CPC 21529 产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`eu-regulation-1069-2009`; `eu-regulation-142-2011`; `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | route and product batches | 首先按来源种类、具名产品、路线、生产线、批次和直接计量阶段细分，避免对可分离负荷进行分配。 | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | route-specific inputs and outputs | 将计量的材料、公用工程、化学品、包装、产品、废物和排放直接归属于造成它们的批次。 | `eu-pef-2021-2279`; `ec-jrc-sa-bref-2024` |
| `allocation_physical_relation` | inseparable co-production | 无法细分时，使用能够反映产出变化如何改变共享过程负荷的文件化物理因果关系。 | `eu-pef-2021-2279` |
| `allocation_fallback` | no defensible physical relation | 不存在可辩护物理关系时，基于同期产品价值采用文件化经济分配并报告敏感性结果；不得向可销售产出分配零负荷。 | `eu-pef-2021-2279` |
| `allocation_waste_status` | solids and aqueous phases | 根据文件化法规状态和实际去向，在分配前将每个具名产出分类为产品、副产品或废物；不得为改善结果而改变状态。 | `eu-regulation-1069-2009`; `eu-regulation-142-2011`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | all routes | 应在分配前核对投入质量、净参考产品、每种具名联产品、水转移、库存变化、蒸发、废水及固体废物。 | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receiving` | `source_material_receiving` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_dry_rendering` | `dry_rendering_separation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wet_rendering` | `wet_rendering_separation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_fat_fractionation` | `rendered_fat_fractionation` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wool_grease` | `wool_grease_processing` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_packaging_release` | `packaging_storage_release` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_cleaning` | `cleaning_disinfection` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 对每个原子行核对批次台账与经校准仪表或秤、发票、领用记录、实验室结果、转移记录及废物联单。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |
| `cp_wastewater` | `onsite_wastewater_treatment` | all authored atomic rows | batch ledger; meter; scale; invoice; laboratory result; transfer or waste record | timestamp; batch_id; flow_name; quantity; unit; meter_or_scale_id; source_or_destination; evidence_reference | 核对来源特定流量计、处理日志、化学品投加、实验室样品监管链结果、污泥联单及排放记录。 | row-specific unit | each batch or metering interval | representative declared reporting period | foreground facility | 仅汇总同一具名流和过程的记录；共享记录须按明确计算规则分配。 | calibration evidence; invoices; signed logs; laboratory QA/QC; mass-balance reconciliation |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | dispatch product | 净合格质量 = 毛灌装质量 - 经核验包装皮重 - 拒收/不合格产品质量 | gross filled mass; packaging tare; rejected product mass | net compliant product mass in kg | `eu-pef-2021-2279` |
| `calc_normalize_reference` | every inventory row | 归一化数量 = 分配给所声明产品的数量 / 净合格产品质量 | assigned row quantity; net compliant product mass | row quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_air_emission` | each named air emission | 使用直接实测质量；否则以实测活动量乘以技术、燃料和期间匹配的文件化场址特定因子 | direct measurement or activity record; site-specific factor | mass of one named substance to air | `us-epa-ap42-rendering`; `ec-jrc-sa-bref-2024` |
| `calc_effluent_load` | each named water discharge | 排放负荷 = 匹配的出水体积 × 代表性实测浓度，并记录单位转换 | effluent volume; concentration; sampling representativeness | mass of one named pollutant to water | `ec-jrc-sa-bref-2024`; `us-epa-wool-processing` |
| `calc_thermal_energy` | purchased steam or hot water where supplier reports mass | 能量 = 实测载体质量 × 文件化进出口焓差 | carrier mass; pressure; temperature; condensate return condition | MJ of the named thermal carrier | `ec-jrc-sa-bref-2024` |
| `calc_fuel_energy` | each named fuel | 能量 = 实测燃料数量 × 供应商或批次特定低位热值 | fuel quantity; net calorific value | MJ of the named fuel | `eu-pef-2021-2279` |
| `calc_mass_balance` | each batch or campaign | 投入 + 期初库存 = 产品 + 废物 + 废水转移 + 实测蒸发 + 期末库存；调查并披露未平衡差值 | all measured mass records and stock changes | route-level mass-balance statement | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `calc_shared_allocation` | unavoidable shared records | 仅在细分后按声明的因果物理关系分配；不可用时采用文件化同期经济份额并进行敏感性分析 | shared quantity; output quantities; causal driver or product values | allocated atomic row quantities | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | source and reference product | 保留供应商、动物/来源身份、解剖物料或上游原料、产品名称、法规类别、批次、路线及去向。 | 接收记录、供应商声明、批次谱系和放行证书。 |
| `dq_temporal` | all foreground rows | 使用代表声明运行的报告期，并识别停机、异常批次和季节性来源变化。 | 带日期原始记录和覆盖说明。 |
| `dq_metering` | meters and scales | 记录设备标识、校准状态、读数间隔、缺失数据处理及任何共享仪表分配。 | 校准证书、仪表导出和核对工作簿。 |
| `dq_sampling` | emissions and wastewater | 对每个具名物质或参数记录采样位置、方法、实验室、检出限、QA/QC、代表性及匹配流量期间。 | 样品监管链、实验室报告和流量记录。 |
| `dq_completeness` | inventory | 核对每个实际材料、能源、产品、废物和基本交换；缺失须由证据证明，不得从 PCR 空卡推断。 | 完整性清单、采购台账、过程走查及质量/能量核对。 |
| `dq_source_quality` | secondary links and factors | 记录数据集身份、地域、时间、技术、单位及选择理由；不得将本 PCR 来源表视为数量来源。 | 数据集引文和选择备忘录。 |
| `dq_verification` | published package | 保留足以独立复现的计算、分配决策、原始到归一化谱系和审查发现。 | 版本化计算文件、证据索引和验证记录。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | 唯一填入的清单 UUID 是已核验 Product 流 `42e4d7de-ef5e-4dd5-96f9-8680da80c5db`；其属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组为 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位为 kg，且产出恰好为 1 kg 净产品。 | `un-cpc-3-0-retained-structure` |
| `validation_scope` | product classification | 声明产品明确包含在 CPC 21529 中，且不是 21521-21526、2151 或 21590 的产品。 | `un-cpc-3-0-explanatory-notes` |
| `validation_qualifiers` | dataset metadata | 具体动物或羊毛来源、原料、具名产品、路线、分离序列、等级、预定用途状态、地域、期间、包装及产出去向均已给出。 | `un-cpc-3-0-explanatory-notes`; `eu-regulation-1069-2009` |
| `validation_route` | process inventory | 过程图包含一个适用主要路线、接收、包装/放行及分配的清洗；仅在场内实施时纳入场内废水处理。 | `us-epa-ap42-rendering`; `us-epa-wool-processing`; `ec-jrc-sa-bref-2024` |
| `validation_atomicity` | inventory cards | 每张交换卡只含一个具名流；每个新增实际来源、能源载体、燃料、化学品、过滤介质、包装、产品、废物、污染物和排放均有独立 row_id。 | `eu-pef-2021-2279` |
| `validation_uuid_closure` | Tiangong identity | 非参考 UUID 在完成精确语义双重核验前保持空白；每个空 UUID row_id 均在 manifest 审查元数据中包含候选状态和拒绝原因。 | `eu-pef-2021-2279` |
| `validation_amount_evidence` | quantities | 每个非参考数量均按所列协议采集或由采集记录计算；任何外部来源数值均不得作为默认值。 | `eu-pef-2021-2279` |
| `validation_mass_balance` | batch reconciliation | 投入、产品、库存变化、蒸发、废水和废物按 `calc_mass_balance` 核对，剩余差值须披露并调查。 | `ec-jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `validation_allocation` | co-products and wastes | 每个产出具有文件化状态和去向；共享负荷遵循声明的分配层级，并在需要时提供计算和敏感性。 | `eu-regulation-1069-2009`; `eu-pef-2021-2279` |
| `validation_emissions` | air and water exchanges | 每个报告污染物或排放均为独立具名卡，并链接实测活动量、监测或实验室证据，披露方法和期间。 | `us-epa-ap42-rendering`; `ec-jrc-sa-bref-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个具体 CPC 21529 产品和路线的产品特定前景数据包与数据集投影。 |
| downstream_use | LCI 数据集创建、过程投影、生命周期模型链接、环境足迹建模和独立审查。 |
| allowed_use | 仅在产品、来源、路线、地域、期间、质量、法规状态和分配与声明数据包匹配时使用。 |
| excluded_use | 不得作为猪脂、家禽脂、牛羊脂、鱼类或海生哺乳动物油、未熬制脂肪、化学改性脂肪或未识别“其他动物脂肪”的默认数据集。 |
| required_metadata | PCR id；CPC 代码；参考 UUID；具体产品/来源/原料；路线和分离序列；批次模式；等级；预定用途；地域；期间；包装；上游链接；联产品状态；分配；数据所有者和审查者。 |
| required_quality_disclosure | 原始记录覆盖、校准、采样 QA/QC、计算谱系、质量平衡结果、分配敏感性、未决 UUID、排除项和局限。 |
| update_trigger | 来源种类/原料、具名产品、路线、分离或净化技术、燃料、化学品、包装、废水处理、法规状态、分配、场址、供应商或代表期间发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-retained-structure` | `official_guidance` | United Nations Statistics Division, retained CPC Version 3.0 structure, `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | 精确子类标题及相邻代码边界。 |
| `un-cpc-3-0-explanatory-notes` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 纳入的具名脂肪、油、分提产品和羊毛脂产品；21521-21526 与 21590 的排除边界。 |
| `ec-jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 熬炼、脂肪熔炼、公用工程、清洗、废水、废物及排放清单结构；不采用 BREF 数量作为默认值。 |
| `us-epa-ap42-rendering` | `official_guidance` | US EPA, AP-42 Section 9.5.3 background document, Meat Rendering Plants, https://www3.epa.gov/ttn/chief/ap42/ch09/bgdocs/b09s05-3.pdf | 干湿熬炼区分；破碎、蒸汽加热、沥滤、压榨、离心、过滤、储存及具名潜在空气排放。 |
| `fao-rendering-manual` | `extension_guidance` | FAO, Manual for the slaughter of small ruminants in developing countries, section 10.3, https://www.fao.org/4/X6552E/X6552E10.htm | 独立技术印证湿法加水和蒸汽、干法不加水、相分离及脂肪、水相和固相回收。 |
| `eu-regulation-1069-2009` | `standard` | Regulation (EC) No 1069/2009 on animal by-products and derived products not intended for human consumption, https://eur-lex.europa.eu/eli/reg/2009/1069/oj/eng | 动物副产品来源类别、分隔、追溯、批准加工和预定用途控制。 |
| `eu-regulation-142-2011` | `standard` | Commission Regulation (EU) No 142/2011 implementing Regulation (EC) No 1069/2009, https://eur-lex.europa.eu/eli/reg/2011/142/oj/eng | 适用熬制脂肪的加工、储存、包装、卫生和记录控制；法规参数不作为 LCI 默认量。 |
| `us-epa-wool-processing` | `official_guidance` | US EPA, Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004LF3.TXT | 羊毛洗涤液分离、离心、羊毛脂回收、精制背景、硫酸酸裂选项及具体废水结构。 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、企业特定制造数据、完整 LCI、分配、透明度、数据质量和验证。 |
