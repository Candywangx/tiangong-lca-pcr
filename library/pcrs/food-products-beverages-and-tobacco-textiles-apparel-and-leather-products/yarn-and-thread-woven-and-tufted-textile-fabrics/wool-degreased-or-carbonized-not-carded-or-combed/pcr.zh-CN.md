---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-degreased-or-carbonized-not-carded-or-combed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 脱脂或碳化、未梳理或精梳的羊毛

## 1. 范围与适用性

本 PCR 适用于经水洗脱脂，或进一步经碳化去除植物性杂质，并且尚未梳理或精梳的可销售散装绵羊毛纤维。它支持已声明 `degreased_route` 或 `carbonized_route` 的门到门前景数据生产。始于含脂原毛的一体化碳化路线同时包括水洗和碳化模块；仅从事碳化的工厂必须为购入的洗净羊毛提供上游数据集。

路线、绵羊毛细度类别、来料污染状态、碳化化学方案、回收配置和水分基准必须分别声明、分别建模。除非数据集代表有生产量权重的披露混合产品且保留各底层路线记录，不得无条件平均脱脂与碳化路线、粗毛与细毛、纯羊毛与混纺、或不同碳化化学方案。

经核验的天工参考行是 `Scoured Wool`，它只是脱脂路线的较窄代表。该行是本候选 PCR 的强制参考流身份，但并非碳化散毛的精确身份。碳化路线数据集必须保留此 UUID 并明确披露限制，不得声称天工已有碳化羊毛专用产品流。

不包括：未经水洗的含脂/原羊毛、绵羊毛以外的细或粗动物毛、羊毛/合成纤维混纺、毛废料和落毛、已梳理或精梳羊毛、毛条与粗纱、纱线、织物、织物碳化、染色、漂白、防蛀、纺纱及下游纺织制造。养羊和羊毛生产不属于前景边界；当研究边界涵盖这些环节时必须连接上游数据集。

下述所有 `reasoned_estimate` 范围都是刻意设宽的候选阶段 QA 筛查范围，不是默认清单值或符合性限值。出现连续三个有代表性的生产期、设备或化学方案发生重大变化、或比较性声明会受该范围影响时，必须以经评审的路线和场址证据替换；发布前同样必须完成适用的替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-degreased-or-carbonized-not-carded-or-combed |
| classification_refs | CPC 3.0：26130，脱脂或碳化、未梳理或精梳的羊毛 |
| covered_products | 经水洗脱脂后销售的散装绵羊毛纤维；经已声明碳化路线后销售的散装绵羊毛纤维；二者均未梳理或精梳 |
| excluded_products | 含脂/未洗原羊毛；非绵羊动物毛；羊毛/合成纤维混纺；毛落物或废料；已梳理或精梳羊毛；毛条、粗纱、纱线和织物；除非另建数据集，否则不含染色、漂白或防蛀产品 |
| representative_product | `degreased_route` 的可销售散装洗净绵羊毛；它比完整类别窄，并且是已核验的天工身份代表 |
| production_route | 条件化路线：`degreased_route` = 开松/除尘、水洗、漂洗、机械脱水和干燥；`carbonized_route` = 洗净羊毛投入，加散纤维酸浸、脱液、干燥/焙烘、机械除杂、中和/漂洗和最终干燥 |
| market_state | 羊毛整理设施门口的散装可销售产品，未梳理或精梳，具有实测水分，并声明路线、纤维直径类别、残余油脂和植物性杂质规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将散装绵羊毛整理为可供后续纺纱准备使用的纤维；已经声明的脱脂或散纤维碳化完成，尚未梳理或精梳 |
| How much | 整理设施门口 1 kg 可销售产出的净干质量 |
| How well | 满足生产者声明的水分、残余油脂、植物性杂质和质量规格；声明路线与羊毛细度类别；不含梳理或精梳 |
| How long or cycle | 一个完整生产批次或生产周期；不适用使用寿命 |
| reference_flow_link | 每个数据集一个参考流。已核验的 `Scoured Wool` 行代表脱脂路线；碳化路线只能在强制披露较窄身份限制的前提下使用该行。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净干质量 |
| 参考产品流 | Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 路线（`degreased_route` 或 `carbonized_route`）；绵羊毛纤维直径类别；纯羊毛状态；来料状态；产出水分基准及方法；残余油脂规格；植物性杂质规格；未梳理或精梳状态；适用时的碳化化学方案；适用时的碳化流 UUID 限制 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品和全部质量归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量按净干质量报告。对同一批次测量产出毛/净质量与水分；保留水分方法并按 `dry_mass = wet_mass × (1 - moisture_mass_fraction)` 换算。不得混用交付质量和干质量分母。 |
| `mass_unit_conversion` | 全部物料投入、产品、副产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 原始记录保留原单位并使用有记录的因子换算为 kg；吨基指标使用 1 t = 1,000 kg。 |
| `water_accounting` | 水洗、漂洗、中和和清洁用水 | 按仪表记录的体积或质量 | L 或 m3，并声明换算 | 分开记录总取水、内部循环水和排放废水。净淡水消耗等于总取水减去外部系统返回水，不扣除内部回流；内部回用另行披露。 |
| `energy_accounting` | 电力、蒸汽、直接燃料和回收热 | 能量 | MJ 和 kWh，并声明换算 | 购入电力、各燃料和蒸汽分别记录。内部回收热不得作为购入能源相加；披露直接/间接加热，并在保留载体原始记录后换算为 MJ。 |
| `chemical_solution_basis` | 洗涤剂、碱、无机酸和中和剂 | 质量 | kg 活性物和 kg 溶液 | 同时记录交付溶液质量和浓度并计算活性物质量。不得平均硫酸、气态 HCl、氯化铝、乙酸钠和氨路线。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 依路线而定：脱脂路线或始于含脂原毛的一体化碳化路线接收含脂/原绵羊毛；仅碳化路线接收已洗净/脱脂的散装绵羊毛 |
| starting_condition_role | 锚定路线清单的前景门口投入，记录其质量、水分、羊毛细度、污染状态和供应商批次 |
| product_classification_scope | 脱脂或经散纤维碳化、未梳理或精梳的散装绵羊毛；不含非绵羊动物毛、混纺和后续纺织转化 |
| recursive_input_rule | 购入洗净羊毛进入仅碳化设施时仍是同类别技术圈投入。连接一个上游脱脂羊毛数据集并在此停止递归；不得用碳化数据集自身替代上游负荷。 |
| upstream_dataset_requirement | 含脂/原羊毛生产、购入洗净羊毛、各化学品、水、各能源载体、研究范围纳入的运输、场外废物或废水处理均需上游数据集；上游洗净羊毛必须与路线和纤维类型兼容。 |
| disclosure | 声明路线、设施配置、地理与时间覆盖、水洗/碳化是否一体化、进出料水分基准、羊毛细度、回收/循环配置、废水去向、排除步骤，以及碳化产出的较窄 Scoured Wool UUID 限制。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_modules` | foreground_process_selection | 只纳入实际运行的路线模块。脱脂数据集含水洗和干燥；一体化碳化数据集含水洗和碳化；仅碳化数据集始于一个上游洗净羊毛投入。 | `eu-txt-bref-2023` |
| `boundary_scouring_recovery` | aqueous_scouring | 纳入实际开松/除尘、全部洗涤/漂洗槽、机械脱水、干燥、油脂与污物分离、内部水循环、送处理废水、回收羊毛脂、各污泥/污物，以及现场能源的逐污染物直接排放。 | `eu-txt-bref-2023`; `eu-txt-bat-2022-2508` |
| `boundary_carbonising` | loose_fibre_carbonising | 碳化路线纳入酸制备和浸渍、脱液、干燥与焙烘、碳化植物颗粒破碎/去除、中和/漂洗、最终干燥、各酸性/中和/漂洗废水及粉尘/固废管理。 | `eu-txt-bref-2023` |
| `boundary_excluded_steps` | downstream_and_nonproduct_operations | 排除养羊、梳理、精梳、纺纱、染色、漂白、防蛀、织物碳化、超出可销售产出门口的包装和下游制造；任何纳入的例外均须作为独立过程识别。 | `un-cpc-30-2025`; `eu-txt-bref-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `aqueous_scouring_and_drying` | 开松、水洗、回收、脱水和干燥 | conditional | `degreased_route` 和始于含脂/原毛的一体化 `carbonized_route` 必需；始于购入洗净羊毛的仅碳化设施数据集排除 | 前景脱脂和状态调整 | 本过程 1 kg 净干可销售洗净羊毛产出 |
| `loose_fibre_carbonising` | 散纤维碳化、中和、漂洗和干燥 | conditional | 仅 `carbonized_route` 必需；`degreased_route` 排除 | 从洗净散毛去除植物性杂质 | 本过程 1 kg 净干可销售碳化羊毛产出 |

### 过程：开松、水洗、回收、脱水和干燥（`aqueous_scouring_and_drying`）

#### 输入

##### 产品流

###### 接收的含脂原绵羊毛（`raw_wool_input`）

- 选定流：含脂的绵羊毛，包括剪前水洗的绵羊毛 `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 脱脂路线或始于含脂/原毛的一体化碳化路线纳入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按投入批次实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定原毛质量平衡筛查；达到 PCR 替换触发器后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：5.0
  - 单位：kg 干来料/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗和漂洗用淡水（`scouring_water_input`）

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 纳入淡水总取水；内部循环水仅作为回路披露，不作为第二个技术圈投入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；保留原始计量 L 或 m3 和实测密度
- 数量规则：实测新鲜水总体积 × 实测水密度，扣除单独计量的内部回用；保留原始体积记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- Source id or status: `cp_water_balance`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bat-2022-2508`
- 数量范围：暂定用水合理性筛查；不得作为默认值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：L/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 醇聚氧乙烯醚水洗剂活性物（`scouring_alcohol_ethoxylate_detergent`）

- 选定流：醇聚氧乙烯醚水洗剂活性物
- Direction: inputs
- Flow type: product
- UUID status: flow-hybrid-search 后仍 unresolved；未返回醇聚氧乙烯醚活性物产品流；已拒绝树脂、金属和设备等无关候选
- Applicability: 使用该洗涤剂时纳入；其他配方必须替换为一个配方特定原子行，不得合并
- 流属性/单位：Mass / kg 活性物
- 数量规则：交付配方质量 × 经核验的活性物质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；UUID unresolved，需前景映射
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定洗涤剂筛查；不得替代配方特定前景记录
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.10
  - 单位：kg 活性洗涤剂/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳酸钠水洗助剂活性物（`scouring_sodium_carbonate`）

- 选定流：碳酸钠 `5462c2da-d3dd-41f0-a78f-51024d2d1a69`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 使用碳酸钠作为水洗助剂时有条件纳入；不用则省略，其他助剂另建原子行
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Na2CO3 活性物
- 数量规则：交付产品质量 × 经核验的碳酸钠质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定助剂筛查；达到替换触发器后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 碳酸钠/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗和干燥购入电力（`scouring_electricity`）

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 当前景设备供电符合已核验的 35–330 kV 用户侧消费组合时纳入；电压、供应组合或地域不同时重新映射
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：路线可归属计量电力；共用电力按有记录的设备或运行小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bat-2022-2508`
- 数量范围：暂定电力筛查；达到替换触发器后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：5
  - 单位：kWh/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗和干燥现场燃烧天然气（`scouring_natural_gas`）

- 选定流：天然气 `78279a0e-8c85-421e-a1aa-2281166ee11f`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 工业天然气供热符合已核验的中国厂内工业炉产品流时有条件纳入；地域、等级或供应路线不同时重新映射
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：实测天然气量 × 有记录的总热值换算因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定天然气能量筛查；达到替换触发器后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗和干燥间接热用购入蒸汽（`scouring_purchased_steam`）

- 选定流：蒸汽热 `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 购入蒸汽热符合已核验的中国纺织湿法加工工业锅炉流时有条件纳入；地域或蒸汽供应路线不同时重新映射
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ；原始记录保留 kg 蒸汽、压力和焓
- 数量规则：实测蒸汽质量 × 有记录的交付焓因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定购入蒸汽筛查；达到替换触发器后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售洗净羊毛（`scoured_wool_output`）

- 选定流：Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: outputs
- Flow type: product
- UUID status: 已核验天工产品流；按合同不写版本
- Applicability: `aqueous_scouring_and_drying` 的参考产出
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：干质量归一化后的固定参考产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净干可销售洗净羊毛产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`；已核验天工身份引用；无需外部来源 id
- 来源：
- 数量范围：参考流身份校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 干产出
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

###### 可销售回收羊毛脂（`recovered_wool_grease`）

- 选定流：可销售回收羊毛脂
- Direction: outputs
- Flow type: product
- UUID status: flow-hybrid-search 后仍 unresolved；未返回羊毛脂产品流；通用动物脂肪和海洋哺乳动物油脂因范围过宽或材料错误被拒绝
- Applicability: 只纳入作为可销售副产品转出的油脂；不可销售油脂使用独立废物流
- 流属性/单位：Mass / kg
- 数量规则：销售或有益利用转移的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干可销售洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved，需前景映射
- 来源：`eu-txt-bat-2022-2508`
- 数量范围：暂定质量平衡筛查；纤维类别 BAT 表现按吨原毛另行校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 回收油脂/kg 干洗净产出
  - 基准：每 1 kg 净干可销售洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送处理的废洗涤液（`spent_scouring_liquor`）

- 选定流：废羊毛洗涤液
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；未返回羊毛洗涤废液流；废碱液和黑液因废物化学组成不同被拒绝
- Applicability: 油脂/污物回收和内部循环后的洗槽排液纳入
- 流属性/单位：Volume / L 或 m3；各污染物负荷分别记录 kg
- 数量规则：实测排液体积；各污染物按匹配浓度与体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定排液体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的水洗线漂洗废水（`scouring_rinse_wastewater`）

- 选定流：羊毛水洗漂洗废水
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用废水候选范围过宽，不能识别羊毛水洗漂洗水及其去向
- Applicability: 漂洗水离开内部循环时纳入
- 流属性/单位：Volume / L 或 m3；各污染物负荷分别记录 kg
- 数量规则：实测漂洗排水；各负荷按匹配浓度与体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定漂洗废水体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的水洗设备清洁废水（`scouring_cleaning_wastewater`）

- 选定流：羊毛水洗设备清洁废水
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用清洗/纺织废水候选未明确羊毛水洗设备清洁废水及去向
- Applicability: 报告期内发生设备清洁时有条件纳入；物理上不可分测时披露接收废水行且不得重复计数
- 流属性/单位：Volume / L 或 m3；各污染物负荷分别记录 kg
- 数量规则：实测清洁排水；各负荷按匹配浓度与体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bat-2022-2508`
- 数量范围：暂定清洁废水体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：L/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松除尘去除的污土（`opening_dirt_waste`）

- 选定流：含脂原毛中去除的污土
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；未返回含脂原毛去除污土废物流；已拒绝磨削粉尘和纺毛废物
- Applicability: 境内开松/除尘且单独定量污土时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测收集质量 × 干固体分数；混合收集时按声明的取样法确定污土分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定污土筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 干污土/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松除尘去除的砂（`opening_sand_waste`）

- 选定流：含脂原毛中去除的砂
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；未返回含脂原毛去除砂废物流；已拒绝玻璃废物和纺织品填埋候选
- Applicability: 存在砂且单独定量时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测收集质量 × 干固体分数 × 砂分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定砂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 干砂/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松除尘去除的植物性杂质（`opening_vegetable_matter_waste`）

- 选定流：含脂原毛中去除的植物性杂质
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；未返回羊毛去除植物性杂质废物流；豆渣因属于不同生物质被拒绝
- Applicability: 水洗前去除并单独定量植物性杂质时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测收集质量 × 干固体分数 × 植物性杂质分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定植物性杂质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 干植物性杂质/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 洗涤液污物分离污泥（`scouring_dirt_sludge`）

- 选定流：羊毛水洗污物分离污泥
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；仅返回通用或其他行业污泥候选；没有候选明确为羊毛水洗污物分离污泥
- Applicability: 洗涤液进行污物分离时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测湿污泥质量 × 实测干固体分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定污泥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 干污泥/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗废水处理污泥（`scouring_wwt_sludge`）

- 选定流：羊毛水洗废水处理污泥
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用污泥及造纸/油污泥候选范围过宽或行业不符
- Applicability: 前景边界内产生废水处理污泥时有条件纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测湿污泥质量 × 实测干固体分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定废水处理污泥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 干污泥/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的不可销售羊毛脂（`non_saleable_wool_grease`）

- 选定流：不可销售羊毛脂
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；废油和废润滑油因材料不同被拒绝；未返回不可销售羊毛脂废物流
- Applicability: 回收油脂不符合可销售副产品条件时纳入
- 流属性/单位：Mass / kg
- 数量规则：送往已记录处理去向的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定不可销售油脂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 废油脂/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 水洗线燃烧的化石二氧化碳（`scouring_fossil_co2_to_air`）

- 选定流：二氧化碳（化石源），排入未指定空气区室 `08a91e70-3ddc-11dd-923d-0050c2490048`
- Direction: outputs
- Flow type: elementary
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 现场燃烧化石燃料时纳入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- 数量规则：实测排放或实测燃料 × 有记录燃料特定 CO2 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定化石 CO2 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg CO2/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗线燃烧的氮氧化物（`scouring_nox_to_air`）

- 选定流：以二氧化氮表示的氮氧化物，排入空气
- Direction: outputs
- Flow type: elementary
- UUID status: flow-hybrid-search 后仍 unresolved；检索返回亚硝酸盐或氧化亚氮，而非以 NO2 表示的氮氧化物；因物种不同被拒绝
- Applicability: 现场燃烧且存在实测或因子法 NOx 时纳入
- 流属性/单位：Mass / kg NO2-equivalent，并声明因子基准
- 数量规则：实测排放或燃料用量 × 设备/燃料特定 NOx 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；因子和 UUID 均待映射/评审
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 NOx 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg NO2-equivalent/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 水洗线燃烧的二氧化硫（`scouring_so2_to_air`）

- 选定流：二氧化硫排入空气
- Direction: outputs
- Flow type: elementary
- UUID status: flow-hybrid-search 后仍 unresolved；仅返回集合型硫氧化物流；本行要求具体二氧化硫，故拒绝
- Applicability: 现场燃烧且实测/因子法 SO2 非零时纳入
- 流属性/单位：Mass / kg SO2
- 数量规则：实测排放或燃料用量 × 燃料硫特定 SO2 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干洗净羊毛产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；因子和 UUID 均待映射/评审
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 SO2 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg SO2/kg 干洗净产出
  - 基准：每 1 kg 净干洗净羊毛产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：散纤维碳化、中和、漂洗和干燥（`loose_fibre_carbonising`）

#### 输入

##### 产品流

###### 进入碳化的洗净羊毛（`scoured_wool_input`）

- 选定流：Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: inputs
- Flow type: product
- UUID status: 已核验天工产品流；不写版本
- Applicability: 所有碳化路线纳入；前景不含水洗时连接上游水洗数据集
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按投入批次实测净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干可销售碳化羊毛产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`；已核验天工身份
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定碳化产率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：2.0
  - 单位：kg 干洗净投入/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 散毛碳化用硫酸（`carbonising_sulphuric_acid`）

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 硫酸散纤维路线纳入；同一批次与气态 HCl 或氯化铝互斥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg H2SO4 活性物
- 数量规则：交付硫酸溶液质量 × 经核验 H2SO4 分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 H2SO4 质量筛查；典型工况另行校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.50
  - 单位：kg H2SO4/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 散毛碳化用气态氯化氢（`carbonising_hydrogen_chloride`）

- 选定流：气态氯化氢 `4f19a304-7b3b-11dd-ad8b-0800200c9a66`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 有记录的气态 HCl 替代路线纳入；同批次与硫酸/氯化铝互斥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg HCl
- 数量规则：钢瓶、储罐或计量系统转移的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 HCl 质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg HCl/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 散毛碳化用氯化铝（`carbonising_aluminium_chloride`）

- 选定流：氯化铝
- Direction: inputs
- Flow type: product
- UUID status: flow-hybrid-search 后仍 unresolved；返回聚合氯化铝、明矾和其他氯化物；没有候选符合氯化铝物质身份
- Applicability: 有记录的氯化铝替代路线纳入；同批次与硫酸/气态 HCl 互斥
- 流属性/单位：Mass / kg 声明 AlCl3 基准
- 数量规则：交付质量 × 声明水合态的活性分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定氯化铝质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg AlCl3 基准/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 非离子碳化洗涤剂活性物（`carbonising_detergent`）

- 选定流：非离子碳化洗涤剂活性物
- Direction: inputs
- Flow type: product
- UUID status: flow-hybrid-search 后仍 unresolved；通用肥皂/洗涤剂流不能确认非离子碳化洗涤剂活性物身份
- Applicability: 碳化液加入洗涤剂时纳入；不同配方不得合并
- 流属性/单位：Mass / kg 活性物和 kg 溶液
- 数量规则：计量投料 × 活性物分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定洗涤剂筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 活性洗涤剂/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化羊毛中和用乙酸钠（`carbonising_sodium_acetate`）

- 选定流：乙酸钠 `a4f6e8d2-1c9b-4d5e-8f7a-2b3c4d5e6f7a`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 使用乙酸钠中和时纳入；不得与氨平均
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 乙酸钠活性物
- 数量规则：交付质量 × 声明水合态活性分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定乙酸钠筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg 乙酸钠基准/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化羊毛中和用氨（`carbonising_ammonia`）

- 选定流：氨 `f5325a9a-4bdc-46ea-b878-b88700767ddd`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 使用氨中和时纳入；不得与乙酸钠平均
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3 活性物
- 数量规则：交付氨水或气氨质量 × NH3 分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_use`
- Source id or status: `cp_chemical_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 NH3 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg NH3/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化、中和和漂洗用淡水（`carbonising_water_input`）

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 纳入碳化线淡水总取水；内部循环仅作为回路披露
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；保留原始计量 L 或 m3 和实测密度
- 数量规则：实测新鲜水总体积 × 实测水密度，扣除单独计量的内部回用；保留原始体积记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- Source id or status: `cp_water_balance`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bat-2022-2508`
- 数量范围：暂定碳化线用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：100
  - 单位：L/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 散毛碳化购入电力（`carbonising_electricity`）

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 碳化设备供电符合已核验的 35–330 kV 用户侧消费组合时纳入；电压、供应组合或地域不同时重新映射
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：碳化批次可归属计量电力；共用电力按有记录驱动分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定碳化电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：10
  - 单位：kWh/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化供热现场燃烧天然气（`carbonising_natural_gas`）

- 选定流：天然气 `78279a0e-8c85-421e-a1aa-2281166ee11f`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 工业天然气供热符合已核验的中国厂内工业炉产品流时有条件纳入；地域、等级或供应路线不同时重新映射
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：实测天然气量 × 有记录的总热值换算因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定碳化天然气筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：75
  - 单位：MJ/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化供热购入蒸汽（`carbonising_purchased_steam`）

- 选定流：蒸汽热 `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Direction: inputs
- Flow type: product
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 购入蒸汽热符合已核验的中国纺织湿法加工工业锅炉流时有条件纳入；地域或蒸汽供应路线不同时重新映射
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ；原始记录保留 kg 蒸汽、压力和焓
- 数量规则：实测蒸汽质量 × 交付焓因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_use`
- Source id or status: `cp_energy_use`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定购入蒸汽筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：75
  - 单位：MJ/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 使用较窄已核验身份的可销售碳化散毛（`carbonized_wool_output`）

- 选定流：Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: outputs
- Flow type: product
- UUID status: 已核验但较窄的天工产品流代表；未核验到碳化专用 UUID
- Applicability: 仅 `carbonized_route` 参考产出，强制披露身份限制
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：干质量归一化后的固定参考产出，并声明 `carbonized_route` 与限制
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净干可销售碳化羊毛产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`；已核验天工身份；碳化专用身份仍 unresolved
- 来源：
- 数量范围：参考流身份校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 干产出
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 机械去除的碳化植物颗粒（`carbonised_vegetable_particles`）

- 选定流：羊毛中去除的碳化植物颗粒
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；豆渣、焦粒和其他生物质候选不能识别从羊毛去除的碳化植物颗粒
- Applicability: 碳化路线去除植物颗粒时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测收集/外运质量并按水分校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定碳化颗粒筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 干颗粒/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化线治理设施捕集粉尘（`carbonising_captured_dust`）

- 选定流：捕集的碳化粉尘
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；仅返回纺毛废物候选，因其不是捕集碳化粉尘而拒绝
- Applicability: 粉尘治理设备产生固体废物时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测收集/外运质量并按水分校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定捕集粉尘筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg 干粉尘/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化过程拒收羊毛纤维（`carbonising_rejected_wool`）

- 选定流：拒收碳化羊毛纤维
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；纺毛废物比拒收碳化羊毛纤维范围更宽，故拒绝
- Applicability: 碳化路线发生纤维拒收或质量剔除时纳入
- 流属性/单位：Mass / kg 干质量
- 数量规则：实测拒收质量并按水分校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定拒收羊毛筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg 干拒收毛/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的废硫酸碳化液（`carbonising_spent_sulphuric_acid_liquor`）

- 选定流：废硫酸碳化液
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用废酸和硫酸雾因化学范围过宽或物相错误被拒绝
- Applicability: 硫酸碳化槽排液离开过程边界时纳入
- 流属性/单位：Volume / L 或 m3；活性 H2SO4 及各污染物 kg
- 数量规则：实测硫酸排液体积；按匹配浓度和体积计算活性 H2SO4 及污染物负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定废硫酸液体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的废氯化铝碳化液（`carbonising_spent_aluminium_chloride_liquor`）

- 选定流：废氯化铝碳化液
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；氯离子、废氯化钠/氯化铵及铝废料属于不同物种或材料
- Applicability: 氯化铝碳化槽排液离开过程边界时纳入
- 流属性/单位：Volume / L 或 m3；氯化铝及各污染物 kg
- 数量规则：实测氯化铝排液体积；按匹配浓度和体积计算氯化铝及污染物负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved，需前景映射
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定废氯化铝液体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的碳化中和废水（`carbonising_neutralisation_wastewater`）

- 选定流：碳化中和废水
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用废水/废酸/废碱液候选不能识别碳化中和废水及去向
- Applicability: 独立中和排水离开前景时纳入
- 流属性/单位：Volume / L 或 m3；各溶质/污染物 kg
- 数量规则：实测排水；按匹配浓度和体积计算负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定中和废水体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理的碳化漂洗废水（`carbonising_rinse_wastewater`）

- 选定流：碳化羊毛漂洗废水
- Direction: outputs
- Flow type: waste
- UUID status: flow-hybrid-search 后仍 unresolved；通用纺织废水范围更宽，不能识别碳化羊毛漂洗水及去向
- Applicability: 漂洗水离开内部循环时纳入；单独计量且重要的设备清洁废水另建原子行
- 流属性/单位：Volume / L 或 m3；各污染物负荷分别记录 kg
- 数量规则：实测漂洗排水；按匹配浓度和体积计算负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`；UUID unresolved
- 来源：`eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- 数量范围：暂定漂洗废水体积筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 碳化和破碎后排放的总粉尘（`carbonising_dust_to_air`）

- 选定流：碳化和破碎排入空气的总粉尘
- Direction: outputs
- Flow type: elementary
- UUID status: flow-hybrid-search 后仍 unresolved；检索返回矿物和金属基本流，而非排入空气的总粉尘；全部拒绝
- Applicability: 治理后有实测或计算颗粒物排放时纳入
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放或有记录的捕集-排放质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；UUID unresolved
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定粉尘筛查，不是排放限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 粉尘/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化线燃烧的化石二氧化碳（`carbonising_fossil_co2_to_air`）

- 选定流：二氧化碳（化石源），排入未指定空气区室 `08a91e70-3ddc-11dd-923d-0050c2490048`
- Direction: outputs
- Flow type: elementary
- UUID status: 已由天工 flow get 在 state_code=100 核验；仅存 UUID，不写数据集版本
- Applicability: 现场燃烧化石燃料时纳入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- 数量规则：实测排放或燃料用量 × 燃料特定 CO2 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；天工 flow get 已核验 state_code=100；仅存 UUID，不写数据集版本
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定化石 CO2 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：kg CO2/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化线燃烧的氮氧化物（`carbonising_nox_to_air`）

- 选定流：以二氧化氮表示的氮氧化物，排入空气
- Direction: outputs
- Flow type: elementary
- UUID status: flow-hybrid-search 后仍 unresolved；检索返回亚硝酸盐或氧化亚氮，而非以 NO2 表示的氮氧化物；因物种不同被拒绝
- Applicability: 现场燃烧且存在 NOx 排放时纳入
- 流属性/单位：Mass / kg NO2-equivalent，并声明基准
- 数量规则：实测排放或燃料用量 × 设备/燃料特定 NOx 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；因子和 UUID 待评审
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 NOx 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg NO2-equivalent/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 碳化线燃烧的二氧化硫（`carbonising_so2_to_air`）

- 选定流：二氧化硫排入空气
- Direction: outputs
- Flow type: elementary
- UUID status: flow-hybrid-search 后仍 unresolved；仅返回集合型硫氧化物流；本行要求具体二氧化硫，故拒绝
- Applicability: 现场燃烧且 SO2 排放非零时纳入
- 流属性/单位：Mass / kg SO2
- 数量规则：实测排放或燃料用量 × 燃料硫特定 SO2 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干碳化产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`；因子和 UUID 待评审
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定 SO2 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg SO2/kg 干碳化产出
  - 基准：每 1 kg 净干碳化产出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | integrated_and_shared_operations | 优先用分表计量和过程细分避免分配，分别核算水洗、回收、碳化、废水处理和共用公用工程。无法细分时，应先记录系统扩展是否适用，再采用分配。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_recovered_grease` | recovered_wool_grease | 可销售回收羊毛脂作为联产品而非负废物处理。优先直接计量并细分回收作业；仍有共用负荷时，采用反映作业关系且有记录的物理分配。无可辩护物理关系时才可经济分配，并报告敏感性情景。 | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `allocation_residues` | dirt_sludge_dust_and_wastewater | 污土、污泥、粉尘和废水的处理负荷归属产生它们的羊毛路线。除非研究明确且一致地应用系统扩展或替代法，不得对堆肥、回收、羊毛脂销售或其他回收给予避免负荷抵扣。 | `eu-txt-bat-2022-2508`; `eu-pef-2021-2279` |
| `allocation_route_separation` | multiple_wool_routes_and_fineness_classes | 用生产记录分开脱脂、碳化路线和羊毛细度类别。确需披露生产加权混合时，依据各路线干产出和各自清单计算；不得使用未加权类别平均。 | `eu-txt-bref-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_moisture` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 进料羊毛与可销售产出的质量、水分和质量规格 | 地磅、经校准秤和实验室水分/质量记录 | lot_id; route; fibre_diameter_class; gross_mass; tare_mass; moisture_fraction; residual_grease; vegetable_matter; saleable_status | 每批投入和产出称量；按声明的场址或合同方法取样测水分和质量；核对路线模块间转移 | kg wet; kg dry; mass fraction; µm where reported | 每批 | 至少三个连续代表性生产期并覆盖报告年度 | 数据集内每个设施和路线 | 各批转为干质量，按路线和细度类别汇总，仅除以对应可销售干产出 | 秤校准、取样计划、实验室方法、拒收批记录、质量核对 |
| `cp_water_balance` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 总用水、内部回用和废水体积 | 流量计、罐液位变化和经核验公用工程记录 | meter_id; opening_reading; closing_reading; recycle_volume; purge_volume; cleaning_volume; route; batch_id | 在关键过程位置计量，区分总取水、内部回用和排放 | L or m3 | 连续或每批，按月汇总 | 完整报告年度或完整代表性活动 | 每条生产线及共用水系统 | 仅在无直接批次计量时按实测运行时间和经核验流量分摊共用水；分别报告总量、回用和排放 | 仪表校准、水流图、水量平衡、与公用事业账单核对 |
| `cp_chemical_use` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 洗涤剂、助剂、酸和中和剂 | 加药日志、批记录、储罐库存和采购核对 | chemical_id; supplier; formulation; concentration; opening_stock; receipts; closing_stock; dose; route; batch_id | 记录交付溶液和活性浓度，核对自动加药与库存变动 | kg solution; kg active substance | 每批，按月核对 | 完整报告年度或完整代表性活动 | 每条线、每种化学品和每条路线 | 计算活性物质量/对应干产出；化学替代方案保持分列 | 加药系统校准、供应商 SDS/规格、库存核对、偏差记录 |
| `cp_energy_use` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 电力、燃料、蒸汽和回收热 | 分表、燃料表、发票和设备日志 | carrier; meter_id; opening_reading; closing_reading; heating_mode; recovered_heat; run_time; route | 优先生产线或设备计量；共用公用工程仅按有记录的工程驱动量分摊 | kWh; MJ; kg steam; carrier unit | 连续或每批，按月汇总 | 完整报告年度或完整代表性活动 | 每个设施、生产线和路线 | 保留各能源载体；不得从总载体记录中扣减内部回收热，回收热另行披露 | 仪表校准、发票核对、分摊工作表、运行小时日志 |
| `cp_byproducts_and_waste` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 回收羊毛脂、污土、污泥、碳化颗粒、粉尘和拒收物 | 经校准秤、外运联单和干固体检测 | stream_id; route; gross_mass; tare_mass; moisture_or_dry_solids; destination; sale_or_waste_status; batch_id | 每次外运或每个容器称量；对含水变化废物测水分/干固体 | kg wet; kg dry | 每次外运，按月汇总 | 完整报告年度或完整代表性活动 | 每个设施、路线和去向 | 可销售副产品与废物分开汇总，干质量归一化到对应产出 | 秤校准、外运联单、去向证明、干固体结果 |
| `cp_wastewater_monitoring` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 废水体积和污染物负荷 | 关键点位流量比例监测和实验室分析 | stream_id; route; volume; pH; temperature; conductivity; COD_or_TOC; TSS; relevant_chemicals; sample_time; destination | 监测关键点位，以浓度乘对应排水体积计算负荷，标明预处理和最终处理点 | m3; mg/L; kg pollutant | 重要流量连续监测；实验室频率依据许可和过程波动 | 完整报告年度或完整代表性活动 | 每股重要废水及最终排放/转移点 | 按路线汇总实测负荷；共用末端处理按预处理负荷和体积并披露方法 | 仪表校准、样品监管链、认可实验室结果、取样计划、处理转移记录 |
| `cp_air_and_fuel_emissions` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | 直接燃烧污染物和碳化粉尘 | 烟道测试、连续监测、燃料记录、捕集粉尘平衡和批准因子 | source_id; pollutant; concentration; flow; operating_time; fuel_use; factor; captured_dust; released_dust; route | 有要求时优先直接测量；否则以实测燃料和适用辖区有引用因子计算 | kg pollutant; mg/Nm3; Nm3; kg fuel | 许可频率及每种代表性工况 | 完整报告年度或完整代表性活动 | 每个直接排放点和路线 | 按污染物分别计算质量，发布清单不得聚合污染物；捕集废物与释放排放分列 | 烟道测试报告、监测仪校准、因子引用、燃料核对、除尘维护记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | 所有羊毛投入和产出 | `dry_mass_kg = net_wet_mass_kg × (1 - moisture_mass_fraction)`；使用匹配的取样和称量期间。 | net_wet_mass_kg; moisture_mass_fraction | dry_mass_kg | `iso-14044-2006` |
| `calc_route_yield` | 每条路线和纤维类别 | `dry_yield = saleable_output_dry_kg / matched_input_wool_dry_kg`；拒收物和残余物另报，不混合路线或细度类别。 | saleable_output_dry_kg; matched_input_wool_dry_kg | dry_yield | `eu-txt-bref-2023` |
| `calc_normalized_inventory` | 每个前景清单行 | `normalized_amount = matched_period_amount / matched_saleable_output_dry_kg`；在证据中保留原单位和换算因子。 | matched_period_amount; matched_saleable_output_dry_kg; conversion_factor | amount per kg dry reference output | `iso-14044-2006` |
| `calc_water_balance` | 每条路线 | 分别报告总取水、内部回用和排放；`water_balance_difference = gross_intake - discharge - water_in_product_or_residue - measured_other_losses`，披露蒸发，不强制差值为零。 | gross_intake; recycle_volume; discharge; water_in_product_or_residue; measured_other_losses | route water balance and reconciliation difference | `eu-txt-bat-2022-2508` |
| `calc_grease_recovery_rate` | 按羊毛细度类别的水洗 | `grease_recovery_rate = recovered_saleable_grease_kg / raw_wool_input_t`。只比较匹配类别：通常大于 35 µm 的粗羊毛用 10–15 kg/t；通常小于 20 µm 的超细/特细羊毛用 50–60 kg/t。20–35 µm 或混合/未知类别只采集报告，不套用两组区间。 | recovered_saleable_grease_kg; raw_wool_input_t; fibre_diameter_class | kg recovered grease/t raw wool | `eu-txt-bat-2022-2508` |
| `calc_carbonising_conditions` | 硫酸散纤维碳化 | 记录槽液酸浓度、脱液后残留酸和水、干燥温度、焙烘温度及最终 pH。BREF 典型描述为 6–9% 无机酸溶液、压榨/离心后保留 5–7.5% 硫酸和 50–65% 水、65–90 °C 干燥、105–130 °C 焙烘、最终 pH 6；偏离时要求解释，不自动覆盖实测值。 | bath_acid_percent; retained_acid_percent; retained_water_percent; drying_temperature; baking_temperature; final_pH | disclosed carbonizing-condition record and QA flag | `eu-txt-bref-2023` |
| `calc_wastewater_load` | 每股废水 | `load_kg = concentration_mg_per_L × discharge_volume_L / 1,000,000`；只合计匹配样品和体积并说明插值。 | concentration_mg_per_L; discharge_volume_L | kg pollutant by stream and route | `eu-txt-bat-2022-2508` |
| `calc_mass_reconciliation` | 每条路线 | 核对干羊毛投入与可销售干羊毛、回收羊毛脂、干残余物、拒收物和实测损失；调查并披露重要不平衡，不得用平衡流掩盖缺失记录。 | dry_wool_input; saleable_dry_output; recovered_grease; dry_residues; rejects; measured_losses | mass-balance difference and explanation | `iso-14044-2006`; `eu-txt-bref-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | 数据集身份 | 声明单一路线或有记录的生产加权混合、所含过程模块、纯绵羊毛状态、纤维直径类别及未梳理或精梳状态。 | 产品规格、过程流图、批记录和路线生产总量 |
| `dq_reference_uuid_limit` | 参考流 | 使用已核验 Scoured Wool UUID。碳化产出必须说明该身份是较窄的脱脂路线代表，且未核验到碳化专用 UUID。 | 参考流元数据和 manifest 审查限制 |
| `dq_temporal_representativeness` | 前景数据 | 可得时覆盖完整报告年度；否则覆盖至少三个连续代表性生产期，并披露季节性、停机、异常和排除。 | 生产日历、仪表覆盖和异常日志 |
| `dq_mass_and_moisture` | 羊毛和固体流 | 用经校准称量和匹配水分/干固体结果；不得混用湿、干质量；完成路线质量核对。 | 校准证书、取样记录、实验室结果和核对工作表 |
| `dq_water_energy_chemicals` | 主要资源投入 | 将仪表和加药记录与发票或库存变动核对；保留能源载体和化学品身份并披露共用公用工程分摊。 | 仪表校准、发票、库存核对和分摊工作表 |
| `dq_emissions_wastewater` | 直接释放和转移 | 使用污染物特定记录和匹配流量；保留取样点、方法、实验室、检出限处理和废水去向。 | 监测计划、样品监管链、分析报告、许可记录和转移联单 |
| `dq_estimate_replacement` | 所有 `reasoned_estimate` 区间 | 推理区间只用于标记记录复核，不得据此填补缺失前景值。三个连续代表性期间后、重大过程变更后或发布关键比较前必须替换。 | 区间替换日志、经评审场址统计或更强外部证据 |
| `dq_source_applicability` | 外部证据 | 记录 BREF/BAT 陈述是描述性、典型性还是规范性，以及装置规模和路线是否匹配；不得把典型过程描述转成排放限值。 | 来源适用性说明和评审批准 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 参考产品 UUID、质量属性 UUID、单位组 UUID 或 kg 单位与本 PCR 不同时失败。对 `carbonized_route`，缺少较窄身份限制披露时也失败。 | `un-cpc-30-2025` |
| `validate_route_process_set` | process_map_and_inventory | 声明路线与模块冲突时失败：脱脂需水洗；一体化碳化需水洗加碳化；仅碳化需碳化模块并连接一个上游洗净羊毛数据集。 | `eu-txt-bref-2023` |
| `validate_scope_qualifiers` | product_identity | 缺少路线、绵羊毛细度、纯羊毛状态、进料状态、产出水分基准、残余油脂/植物性杂质规格或未梳理/精梳状态时失败；混纺及下游形态不适用。 | `un-cpc-30-2025`; `eu-txt-bref-2023` |
| `validate_no_unconditional_average` | aggregation | 脱脂与碳化路线、不同碳化化学体系、纯毛与混纺或粗细羊毛在无路线记录、生产权重和明确混合产品范围下平均时失败。 | `eu-txt-bref-2023` |
| `validate_grease_recovery_conditioning` | recovered_wool_grease | 10–15 kg/t 原毛筛查只用于通常大于 35 µm 粗羊毛；50–60 kg/t 只用于通常小于 20 µm 超细/特细羊毛。其他或混合类别报告前景值而不套区间；异常只要求解释，不替换观测值。 | `eu-txt-bat-2022-2508` |
| `validate_carbonising_conditions` | sulphuric_acid_carbonising | 要求实测槽液/残留酸条件、干燥和焙烘温度、中和剂和最终 pH。偏离 BREF 典型条件时要求路线证据和产品质量复核；有记录替代技术不得自动判失败。 | `eu-txt-bref-2023` |
| `validate_recovery_and_water_disclosure` | aqueous_scouring | 要求总用水、回用、排放、回收羊毛脂、污土/污泥及废水去向。缺少油脂回收或水回用时标记 BAT 适用性复核，不得默认为零。 | `eu-txt-bat-2022-2508` |
| `validate_foreground_completeness` | all_foreground_rows | 采集/计算行缺采集协议、匹配时间覆盖、归一化基准或支持记录时失败；缺失值视为不完整，禁止用 `reasoned_estimate` 区间填补。 | `eu-txt-bat-2022-2508`; `iso-14044-2006` |
| `validate_mass_balance` | each_route | 混用湿干基准时失败；重要干质量不平衡须调查并解释；禁止未披露平衡流。 | `iso-14044-2006` |
| `validate_allocation` | multifunctional_operations | 联产品或共用处理分配未披露，或经济分配前未记录细分/系统扩展及物理关系评估时失败。 | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明脱脂或碳化路线的门到门羊毛制备前景数据集 |
| downstream_use | `secondary_dataset`；方法和翻译评审后且仅限披露路线、纤维类别、技术、地域和期间时可作 `background_dataset` |
| allowed_use | 梳理或精梳前散纤维脱脂或碳化绵羊毛的 LCA 前景包及下游 process/lifecyclemodel 投影；主数据完整时可作路线特定比较 |
| excluded_use | 含脂/原毛、非绵羊动物毛、混纺、落毛/废毛、已梳理或精梳羊毛、毛条、纱线、织物、农场门羊毛生产、织物碳化或碳化羊毛精确 UUID 声明 |
| required_metadata | PCR id 和版本状态；天工 UUID；路线与模块；设施与地域；报告期；纤维直径类别；纯毛状态；进料状态；干质量/水分法；残余油脂和植物性杂质规格；碳化化学体系和条件；用水/回收配置；废水和废物去向；分配；上游数据集；碳化身份限制 |
| required_quality_disclosure | 前景与计算数据份额；仪表和取样覆盖；质量/水量核对；路线产率；羊毛脂回收率及适用纤维类别筛查；推理估算标记和替换状态；排除、分配、数据缺口、异常运行和来源适用性 |
| update_trigger | 新的已核验碳化羊毛产品流 UUID；路线、纤维组合、化学品、回收或处理发生重大变化；已有三个代表性期间可替换暂定筛查；新的官方 BAT/BREF 或分类修订；监测或质量平衡失败；评审接受或拒绝候选方法 |

## 11. 数据来源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-30-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, code 26130, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问于 2026-08-12） | 官方类别身份，以及与已梳理/精梳羊毛及邻近天然纤维产品的区分 |
| `eu-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, DOI 10.2760/355887, Sections 2.3.1, 2.6.2.1.1 and 4.2, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874（访问于 2026-08-12） | 水洗和散纤维碳化过程分解、路线替代、典型碳化条件、回收配置、排放和资源效率背景 |
| `eu-txt-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 of 9 December 2022 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj（访问于 2026-08-12） | 输入输出清单、水/能源/物料监测、废水监测、羊毛脂回收与水回用要求、按纤维类别条件化的油脂回收表现水平 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/oj, allocation decision hierarchy（访问于 2026-08-12） | 细分/系统扩展优先的分配层级和物理关系分配规则 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html（访问于 2026-08-12） | LCI 一致性、透明分配、归一化、文件记录和数据质量框架 |
