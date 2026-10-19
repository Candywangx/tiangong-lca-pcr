---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 播种用水果种子产品类别规则

## 1. 适用范围与适用性

本 PCR 为水果作物或果树种子生产与交付建立统一的前景数据方法。其产品边界是：在声明的种子交付门处，以可识别批次交付、用于播种的合格水果种子净量。范围包括多汁果实取种、干果或荚果取种、果核/石核处理，以及一年生、保护地、果园和采种园来源的种子批次。

产品边界包括亲本或母株的繁殖、田间或采种园投入、收获捕获、从果实中分离种子、干燥和初级调制、分级与检验、批次放行、必要的种子处理、包装和规定的储存，直至交付门。应排除仅供食用而非以种子交付的水果、育苗和移栽苗、嫁接砧木、插条、内部育种存量、设备制造、下游栽培，以及交付门之后的运输和零售，除非后者被明确声明为交付门。

应按品种或品系/杂交组合、种子等级、繁殖路线、含水率和活力、纯度、发芽率、处理状态、包装、储存条件和地点区分批次。不可将种子数量、样品、降级品、废弃物或果肉副产品与交付的合格净种子混为一物。

## 2. 产品类别身份

| 字段 | 规则 |
| --- | --- |
| `product_name` | Fruit seeds / 水果种子 |
| `pcr_id` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds` |
| 分类参考 | `cpc:3.0:01360`（外部分类参考，不是目录身份） |
| 目录边界 | 目录使用语义 slug `fruit-seeds`；不得从 CPC 代码生成并列 PCR |
| 目标实体 | foreground dataset、process、lifecyclemodel |

该记录覆盖按种子产品交付的水果种子；它不规定某一物种、区域、品种、认证方案或种子处理剂。产品系统必须在数据集中声明这些限定条件。

## 3. 参考流

### 3.1 声明功能单位

默认功能单位为 **1 kg 在交付门合格且已放行的净水果种子**。净量不包含包装皮重、可分配给其他产品的果肉/果壳/果核副产品、筛下物、试验样品、拒收物或待返工物。若商业交付以粒数计，应先用同一批次实测千粒重或粒重换算为质量；不得用跨品种平均值掩盖批次差异。

每一数据集至少记录：物种、品种或品系/杂交组合、种子等级、批次和地点、繁殖及收获路线、收获日期、含水率基准、活力/纯度/发芽率、处理剂和剂量、包装与储存期、交付门，以及果实、果肉、残渣、降级品、拒收品和返工品的去向。

| Field | Value |
| --- | --- |
| What | 声明种子交付门处，用于播种的净合格水果种子 |
| How much | 1 kg |
| How well | 作物或植物身份；品种、品系或杂交状态；种子等级；生产地理位置；一年生或多年生路线；多汁果实或干果路线；取种和处理状态；含水率或活力基准；物理纯度；发芽率或活力结果；包装状态；纳入的储存期；以及申报交付门 |
| How long or cycle | 一个声明的种子生产周期和采收活动；多年生果园或母株应记录建植、生产、更新和终止期间，以及将其归属到种子批次的分配基准 |
| reference_flow_link | reference_product_at_declared_handoff |

### 3.2 参考产品

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | 作物或植物物种；品种、品系或杂交状态；种子等级；生产地理位置；生产单元类型；一年生或多年生周期；多汁果实、干果、荚果、果核或其他生殖结构；湿取种或干取种路线；含水率基准或顽拙性种子状态；物理纯度；发芽率或活力结果及检验方法；处理状态；包装状态；储存期；申报交付门；预期共产品；残余物、拒收物和返工物去向 |
| Reference identity status | 实际交接状态 UUID 待核实；既有 UUID 证据仅适用于原有明确状态。 |

计量基准补充：1 kg 净合格种子

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
### 测量和换算规则

| `rule_id` | 测量规则 |
| --- | --- |
| `reference_seed_mass` | 以放行称重记录的净合格种子质量作为基准；报告毛重、皮重、样品和扣除项。 |
| `seed_count_conversion` | 粒数转质量必须使用同批次实测粒重或千粒重，记录测定方法、样本量和不确定度。 |
| `seed_moisture_basis` | 同时记录湿基含水率和测定法；湿基转干物质为 `m_dry = m_wet × (1 − MC_wb)`，其中 `MC_wb` 为小数。 |
| `nutrient_product_and_element_basis` | 肥料和土壤调理剂按实际产品量记录，并同时记录 N、P、K 等元素或营养元素量；不得把产品量当作元素量。 |
| `water_separation` | 区分灌溉、清洗/提取、冷却、锅炉和生活用水；分别记录取水、回用、排放和损失。 |
| `energy_carrier_conversion` | 记录电力、柴油、汽油、燃气、生物质等载能体的原始量、低位热值或电表单位、地点和因子来源。 |
| `quality_attribute_reporting` | 对同一放行批次记录纯度、发芽率、活力、病害/损伤和处理状态；质量指标不是额外的物料流。 |
| `packaging_reuse_basis` | 按实际包装材料质量、周转次数、回收/返还比例和损耗分摊可重复使用包装。 |

含水率的初始质量保证范围为适于常规储存的正性种子约 4–14% 湿基；该范围只是 QA 提醒，不是所有物种的合规限值。顽拙性或中间型种子应采用物种特定的储存窗口，并报告其例外理由。

## 5. 系统边界

默认前景边界从声明的种源或亲本材料及已准备好的生产单元开始，在合格种子批次通过声明的种子交付门时结束。边界包括受管理的种子生产、收获、适用的取种、初级干燥与清选、分级、检验和批次放行，以及到达交付门所需的可选种子处理、包装和储存。若运输是到达数据包所选交付门的必要环节，才将其纳入；否则运输位于边界之外。

### 边界抽象

| `rule_id` | 规则 |
| --- | --- |
| `boundary_field_to_seed_gate` | 从实际繁殖地块/采种园投入到已放行种子交付门；未建模下游栽培。 |
| `boundary_route_variants` | 多汁果实取种与干果/荚果取种是替代路线；仅选择实际发生的路线，不能为完整性强制加入其他路线。 |
| `boundary_recursive_seed_input` | 上游种源或种子输入必须作为实际投入追溯；不要递归复制另一 PCR 的产品事实。若被系统边界排除，应明确排除并说明数据来源。 |
| `boundary_input_completeness` | 记录实际使用的肥料/土壤调理剂、植保产品、水、燃料、电力、处理剂和包装；未使用的类型不创建虚拟输入。 |
| `boundary_output_fate` | 果实副产品、果肉、壳/核、残渣、筛下物、排放、降级品和拒收品必须按实际去向分配或记录为废弃。 |
| `boundary_quality_gate` | 分级、检验和批次放行是产品闸门；未放行或不满足声明质量属性的种子不进入参考产品流。 |

自动模块计划选择受管理生物生产、收获/捕获、材料处理、初级调制、分级/分选、保存/稳定化、包装/展示、灌装/计量、化学反应、替代生产与技术路线、多输出归属、多期间归属以及返工/拒收路径模块。产品特定答案在下文提供；模块文件不提供产品事实、UUID、因子或数量。

## 6. 过程清单结构
### 过程图

| `process_id` | 过程 | 适用性与接口 |
| --- | --- | --- |
| `fruit_seed_multiplication` | 水果种子繁殖与田间生产 | 必需；接收种源并产生待收获种子承载材料。 |
| `fruit_seed_harvest_capture` | 种子承载果实/材料的收获捕获 | 必需；与繁殖过程分开计量，产生收获批次和损失。 |
| `fleshy_seed_extraction` | 多汁果实取种 | 条件过程；仅用于实际发生的果肉分离/洗涤路线。 |
| `dry_seed_extraction` | 干果、荚果或果核取种 | 条件过程；与多汁果实路线互斥，除非产品系统确实包含两者。 |
| `seed_drying_primary_conditioning` | 干燥与初级调制 | 必需；包括干燥、脱粒/清选等首轮处理，直至可分级种子。 |
| `seed_grading_testing_lot_release` | 分级、检验与批次放行 | 必需；把合格、降级、拒收和样品路径分开。 |
| `seed_treatment_packaging_storage` | 处理、包装与储存 | 条件过程；只对实际处理、包装或声明储存期建模。 |
| declared_reference_handoff | 声明交接门的产品计量 | 必需；仅记录实际路线交接数量，增加零物理工序，唯一交接参考输出。 |

`fleshy_seed_extraction` 和 `dry_seed_extraction` 是技术替代，不应对同一批次重复计入。若生产记录在同一场所混合多种路线，应按批次拆分。若有替代技术或备用路线，应分别记录技术差异、产率和质量结果；不得用一个平均路线隐藏技术变化。

### 生产路线说明

### 5.1 繁殖与田间管理

记录种源、母株/亲本、地块或采种园、播种/栽植日期、面积、种植密度、轮作或多年生周期、灌溉、肥料/土壤调理剂、植保产品、能源和田间排放。母株跨年度提供种子时，按实际覆盖期或声明的归属规则分摊土地、管理和共用设施活动。生物繁殖过程使用实际生物生产路线；不得把模块选择当作产品事实。

### 5.2 收获捕获

按批次记录成熟度、收获方法、收获鲜重/干重、机械燃料或电力、人工/车辆活动、田间损失和带出残体。果实用于食用或其他目的的部分应作为共产品或排除项处理，不得将全部果实质量错误归入种子。

### 5.3 取种路线

多汁果实路线应记录破碎/剖切、发酵或浸泡（若实际发生）、水洗、筛分、脱胶/去果肉、分离收率及果肉/污水去向。干果、荚果或果核路线应记录干燥程度、脱粒/破壳、机械分离、残渣与种子损失。化学浸提、消毒或脱胶只有在实际使用时才作为物料输入，并记录浓度、有效成分和废液去向。

### 5.4 干燥与初级调制

记录设备、批次、入口/出口含水率、空气或燃料、电力、处理时间、再循环空气、筛分/清选和损失。返工、回收或重干种子必须沿独立路径记录；同一质量不得既作为主产品又作为返工投入重复计量。

### 5.5 分级、检验与放行

记录筛网/分级标准、抽样质量、纯度、发芽率、活力、健康或损伤指标、实验室电力，以及合格、降级、拒收和检验样品的质量。分级是质量闸门；只有满足声明的质量属性并放行的种子进入参考产品，降级种子按真实销售、再加工、饲料或废弃去向处理。

### 5.6 处理、包装与储存

按实际产品记录种子处理剂、载体、包衣或消毒剂的产品量和有效成分基础。包装按材料类别和实际质量记录，包括软包装、刚性容器、纸箱/箱体、托盘/周转箱。记录包装拒品、复用、返还、回收和损耗。储存应记录温度、湿度、时间、能耗、虫害控制和储存损失；在交付门前的损失从可交付批次中扣除。

### 过程：受管理的水果种子繁殖 (`fruit_seed_multiplication`)

#### 输入
##### 产品流

###### `source_seed_material`
- 选定流: 实际使用的种源/亲本种子批次
- 流属性/单位: 质量 / kg
- 数量规则: 在声明起始条件下实测批次质量，记录含水率和处理基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot`
- 来源: `fao-seed-systems`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 种源批次/kg 合格参考种子
  - 基准：覆盖低产种子繁育路线的宽泛初筛区间；用批次记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 尿素肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_urea`）

**fruit_seed_multiplication_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：1 kg 放行合格种子.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

###### 氯化钾肥料（`fruit_seed_multiplication_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`fruit_seed_multiplication_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`fruit_seed_multiplication_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_field_management_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`；`fao-organic-nutrients`

##### 废物流

#### 输出
##### 产品流

###### `mature_seed_bearing_material`
- 选定流: 收获前成熟种子承载果实、荚果或果核材料
- 流属性/单位: 质量 / kg
- 数量规则: 按生产单元和批次实测可收获成熟含种物料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

##### 废物流


###### `crop_residues`
- 选定流: 田间残茬、修剪物和采后残体
- 流属性/单位: 质量 / kg
- 数量规则: 按声明含水率基准实测或对账残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `ipcc-2019-cropland`; `mass-balance-identity`


###### `field_harvest_loss`
- 选定流: 收获前后未捕获或损失的种子承载材料
- 流属性/单位: 质量 / kg
- 数量规则: 实测或对账田间损失物料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 来源: `mass-balance-identity`

##### 基本流

###### `field_nitrous_oxide`
- 流：管理土壤直接/间接 N₂O 排放
- 流属性/单位: Mass / kg N2O
- 数量规则：优先实测；否则按施氮量、气候和土壤因子估计
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换为 kg N2O。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 44/28，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

###### `field_ammonia_to_air`
- 流：田间管理导致的氨排放
- 流属性/单位: Mass / kg NH3
- 数量规则：按实际施用氮和适用排放因子估计或实测
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换质量为 kg NH3；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 17/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### `field_nitrate_loss`
- 流：向水体或地下水的硝酸盐损失
- 流属性/单位: Mass / kg NO3-
- 数量规则：按水质监测、氮平衡或适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

最终交换为 kg NO3-。该物种的元素氮活动量以及按氮计的因子／范围保留在独立计算台账。归一化前将该物种的氮质量乘 62/14，仅换算一次；化合物质量不得再次换算，按氮计的范围不得直接校验化合物质量。未经有据拆分，不得将总氮损失作为该物种。保留实际接收环境与方法边界；未知身份或活动量不等于零。

### 过程：种子承载材料的收获与捕获 (`fruit_seed_harvest_capture`)

#### 输入
##### 产品流

###### `mature_seed_bearing_material_for_harvest`
- 选定流: 收获工序的成熟种子承载材料输入
- 流属性/单位: 质量 / kg
- 数量规则: 将接收质量关联到生产单元及收获批次记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 来源: `mass-balance-identity`

###### 柴油 (`harvest_machinery_fuel_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`harvest_machinery_fuel_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_energy`采集`fruit_seed_harvest_capture`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_energy`
- 来源：`route-energy-fao`

###### `harvest_electricity`
- 选定流: 收获、输送和现场初分离用电
- 流属性/单位: 能量 / kWh
- 数量规则: 按收获批次记录表计或供应方记录的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 来源: `ipcc-2019-cropland`

#### 输出
##### 产品流

###### `harvested_seed_bearing_material`
- 选定流: 收获捕获的种子承载果实、荚果或果核
- 流属性/单位: 质量 / kg
- 数量规则: 按地磅、料箱、筐或批次记录扣除皮重后的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### `harvested_fruit_co_product`
- 选定流: 可销售或另作用途的果实共产品
- 流属性/单位: 质量 / kg
- 数量规则: 实测质量并记录接收方或下游交接
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### 废物流

###### `harvested_material_loss`
- 选定流: 收获和运输中的种子承载材料损失
- 流属性/单位: 质量 / kg
- 数量规则: 实测或对账收获损失质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `mass-balance-identity`

###### `harvest_removed_residue`
- 选定流: 收获时移除的叶、茎、果壳或其他残体
- 流属性/单位: 质量 / kg
- 数量规则: 实测残余物质量，或采用有记录支持的作物残余物平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `ipcc-2019-cropland`; `mass-balance-identity`

### 过程：多汁果实取种 (`fleshy_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_fleshy_seed_material`
- 选定流: 进入多汁果实取种的收获材料
- 流属性/单位: 质量 / kg
- 数量规则: 接收批次质量，记录含水率及接收日期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### `extraction_process_water`
- 选定流: 多汁果实取种、洗涤和分离用水
- 流属性/单位: 质量 / kg 或 体积 / m3
- 数量规则: 按提取批次记录表计、批次或供应方记录的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：m3/kg 合格参考种子
  - 基准：覆盖肉质果实种子提取路线的宽泛初筛区间；用批次记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### `fleshy_extraction_electricity`
- 选定流: 多汁果实破碎、泵送、清洗和筛分用电
- 流属性/单位: 能量 / kWh
- 数量规则: 按提取批次记录表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `mass-balance-identity`

#### 输出
##### 产品流

###### `wet_seed_intermediate`
- 选定流: 多汁路线清洗/分离后的湿种子中间体
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 分离后、干燥前的批次种子质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`

###### `fleshy_pulp_co_product`
- 选定流: 取种分离出的果肉或果汁共产品
- 流属性/单位: 质量 / kg
- 数量规则: 实测分离质量并记录接收方或用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-local-vegetable-seed-production`; `iso-14044-2006`

##### 废物流

###### `fleshy_extraction_rejects`
- 选定流: 多汁取种中因损伤、未成熟或污染而拒收的种子
- 流属性/单位: 质量 / kg
- 数量规则: 称量拒收物流，或采用有证据支持的批次平衡差额；未解释差额不自动视为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

###### `fleshy_extraction_residual`
- 选定流: 多汁取种残渣、污泥和废液中的固体残留
- 流属性/单位: 质量 / kg
- 数量规则: 实测包含所含水分的残余物质量，有记录时将废水和固体分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

### 过程：干果或荚果取种 (`dry_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_dry_seed_material`
- 选定流: 进入干果、荚果或果核取种的收获干材料
- 流属性/单位: 质量 / kg
- 数量规则: 接收批次质量，附含水率或干燥状态记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `fao-local-vegetable-seed-production`

###### `dry_extraction_electricity`
- 选定流: 干果/荚果/果核脱粒、破壳、输送和筛分用电
- 流属性/单位: 能量 / kWh
- 数量规则: 按干法提取批次记录表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

#### 输出
##### 产品流

###### `dry_extracted_seed_intermediate`
- 选定流: 干取种后的未调制种子中间体
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 实测批次产出质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

##### 废物流

###### `dry_extraction_residue`
- 选定流: 干取种产生的果壳、荚壳、果核碎片和其他残渣
- 流属性/单位: 质量 / kg
- 数量规则: 称量残余物流，或采用有证据支持的干法提取平衡；未解释差额不自动视为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_product_and_residue_fate`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

###### `dry_extraction_rejects`
- 选定流: 干取种中破损、空壳、病害或不合格种子
- 流属性/单位: 质量 / kg
- 数量规则: 称量拒收物流并记录质量处置决定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_batch`
- 来源: `fao-tree-seed-handling`; `mass-balance-identity`

### 过程：种子干燥与初级调制 (`seed_drying_primary_conditioning`)

#### 输入
##### 产品流

###### `raw_seed_for_conditioning`
- 选定流: 进入干燥和初级调制的原始种子
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 按调理批次记录接收质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`; `fao-seed-production-manual`

###### `conditioning_process_water`
- 选定流: 初级调制、清洗或降温用水
- 流属性/单位: 质量 / kg 或 体积 / m3
- 数量规则: 实测或按批次记录用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`

###### `conditioning_electricity`
- 选定流: 干燥、通风、清选、输送和调制设备用电
- 流属性/单位: 能量 / kWh
- 数量规则: 按调理批次记录表计或设备记录的用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-drying-storage-2024`; `mass-balance-identity`
- 数量范围：默认估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 合格参考种子
  - 基准：覆盖干燥和清选技术的宽泛初筛区间；用批次计量记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出
##### 产品流

###### `conditioned_seed_lot`
- 选定流: 达到目标含水率并完成初级调制的种子批次
- 流属性/单位: 质量 / kg，另记含水率百分数
- 数量规则: 实测产出质量及与质量相关的含水率结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`

##### 废物流

###### `conditioning_screenings`
- 选定流: 初级调制的筛下物、轻杂和非种子组分
- 流属性/单位: 质量 / kg
- 数量规则: 称量筛下部分并记录处置去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-production-manual`; `mass-balance-identity`

###### `conditioning_dust_residue`
- 选定流: 清选和干燥产生的粉尘收集物
- 流属性/单位: 质量 / kg
- 数量规则: 实测收集质量或采用有记录支持的对账结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`technology_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源: `fao-seed-production-manual`; `mass-balance-identity`

##### 基本流

### 过程：分级、检验与批次放行 (`seed_grading_testing_lot_release`)

#### 输入
##### 产品流

###### `conditioned_seed_for_grading`
- 选定流: 进入分级和检验的调制后种子
- 流属性/单位: 质量 / kg
- 数量规则: 将接收质量关联到调理批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`; `mass-balance-identity`

###### `quality_testing_electricity`
- 选定流: 取样、检验和实验室设备用电
- 流属性/单位: 能量 / kWh
- 数量规则: 按受检批次或报告期间分配表计或设备日志用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`

#### 输出
##### 产品流

###### `accepted_seed_lot_before_presentation`
- 流：检验合格但尚未处理/包装的种子批次
- 流属性/单位：质量 / kg

原参考状态单位说明：kg

原始产出计量与核对要求：按放行证书对应的净质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`, `oecd-seed-schemes`
- 数量范围：QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：4
  - 上限：14
  - 单位：湿基百分比
  - 基准：仅适用于正常型可储藏种子的暂定筛查区间；用物种特定放行规范替代，不适用于顽拗型种子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### `downgraded_seed_lot`
- 选定流: 未达到高等级但有明确其他去向的种子
- 流属性/单位: 质量 / kg
- 数量规则: 实测质量并记录降级决定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `oecd-seed-schemes`; `iso-14044-2006`

##### 废物流

###### `rejected_seed_and_test_samples`
- 选定流: 拒收种子与检验样品
- 流属性/单位: 质量 / kg
- 数量规则: 按批次称量拒收种子和取样质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_testing`
- 来源: `ista-international-rules`; `mass-balance-identity`

### 过程：处理、包装与储存 (`seed_treatment_packaging_storage`)

#### 输入
##### 产品流

###### `accepted_seed_for_presentation`
- 选定流: 进入处理、包装或储存的合格种子
- 流属性/单位: 质量 / kg
- 数量规则: 按批次记录接收的合格净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `mass-balance-identity`

###### `presentation_storage_electricity`
- 选定流: 包装区和交付前储存的照明、通风、制冷或除湿用电
- 流属性/单位: 能量 / kWh
- 数量规则: 将表计用电量分配到相应批次或储存期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `fao-seed-drying-storage-2024`; `fao-seed-production-manual`

#### 输出
##### 产品流

###### `fruit_seed_reference_flow`
- 流：交付门合格水果种子
- 流属性/单位：质量 / kg

原参考状态单位说明：kg 净质量

原始产出计量与核对要求：放行批次净质量减皮重、样品、拒收和交付前损失

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`ista-international-rules`, `oecd-seed-schemes`

##### 废物流

###### `storage_loss`
- 选定流: 交付前储存期间因失水、霉变、虫害或质量不合格造成的损失
- 流属性/单位: 质量 / kg
- 数量规则: 按批次和去向计量实际受损、拒收或损失物流，物料数量互不重叠。在相同水分和组分基准下核对：期初库存＋接收量＝合格发运＋其他外部转移＋拒收移出＋独立有据物理损失＋期末库存。返工回流为一对对应转移，仍持有时计入期末库存，不另计最终产出。未解释差额须调查，不自动作为物理废物或排放。不得将移出批次加到接收量、漏计期末库存，或重复扣除已包含于本物流的损失。每项有据外部数量按合格最终产出仅归属和归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_storage`
- 来源: `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity`


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：水果种子，生产混合，农场门，已清理至播种种子等级
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：水果种子，生产混合，农场门，已清理至播种种子等级
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与联产品处理

| `rule_id` | 规则 |
| --- | --- |
| `allocation_process_subdivision` | 优先按批次和过程拆分；不能拆分时，使用可追溯的质量、能量或占用时间基础，并说明选择。 |
| `allocation_fruit_co_product` | 果实、果肉、果汁或其他可销售材料按实际共产品质量/经济价值或过程细分分配；记录分配基础、价格期和敏感性。 |
| `allocation_seed_grade_outputs` | 合格、降级、拒收和样品优先过程分流；若仍需分配，按种子质量和质量等级/价值记录。只有放行合格流作参考产品。 |
| `allocation_cross_period_mother_plants` | 多年度母株或多年生采种园按实际生产期、可收获种子量或声明的管理周期分配土地、投入和设施活动。 |
| `allocation_rejected_and_rework` | 拒收品和返工流保留独立质量与去向；返工产生的额外过程只计一次，避免与原批次重复计量。 |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `crop_protection_products_specific_input` | `cp_field_management_inputs` | 作业 fruit_seed_multiplication：- 流：实际使用的植保产品/有效成分 - 单位：kg 产品或 kg 有效成分 - 数量规则：按产品、有效成分、施用次数和批次记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际使用时填 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_management_inputs` - 来源：`ipcc-2019-cropland` 原数量方法：按产品、有效成分、施用次数和批次记录 |
| `harvest_machinery_fuel_specific_input` | `cp_field_energy` | 作业 fruit_seed_harvest_capture：- 流：收获机械的柴油、汽油或其他燃料 - 单位：L 或 kg；附低位热值 - 数量规则：按加油、设备小时或燃料计量器记录 - 数值来源模式：前景记录（`foreground_record`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_energy` - 来源：`fao-seed-production-manual` 原数量方法：按加油、设备小时或燃料计量器记录 |
| `seed_treatment_product_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：实际使用的种子处理剂、包衣剂、载体或消毒剂 - 单位：kg 产品；另报有效成分质量 - 数量规则：按产品、批次、剂量和有效成分基础 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际处理时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-tree-seed-handling`, `ista-international-rules` 原数量方法：按产品、批次、剂量和有效成分基础 |
| `flexible_package_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：袋、膜、内衬等软包装材料 - 单位：kg 材料 - 数量规则：按包装规格、实际用量和复用/回收比例 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用软包装时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` - 数量范围：默认估计 - 范围角色：默认估计（`default_estimate`） - 下限：0 - 上限：2 - 单位：kg 包装材料/kg 合格参考种子 - 基准：覆盖小包装和散装容器的宽泛初筛区间；用包装记录替代 - 基准类型：参考流（`reference_flow`） - 证据类型：推理估计（`reasoned_estimate`） 原数量方法：按包装规格、实际用量和复用/回收比例 |
| `rigid_container_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：瓶、罐、桶等刚性容器 - 单位：kg 材料 - 数量规则：按容器质量、数量和实际复用/回收记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用刚性容器时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按容器质量、数量和实际复用/回收记录 |
| `carton_box_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：纸箱、瓦楞箱和其他外箱 - 单位：kg 材料 - 数量规则：按箱体规格、数量和实际损耗 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用纸箱/外箱时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按箱体规格、数量和实际损耗 |
| `pallet_crate_material_specific_input` | `cp_treatment_packaging_storage` | 作业 seed_treatment_packaging_storage：- 流：托盘、周转箱和运输承载包装 - 单位：kg 材料 - 数量规则：按实际质量、周转次数、返还率和损耗分摊 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：使用托盘/周转箱时 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_treatment_packaging_storage` - 来源：`fao-seed-drying-storage-2024` 原数量方法：按实际质量、周转次数、返还率和损耗分摊 |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `conditioning_stationary_fuel_identification` | `cp_conditioning_batch` | 实际固定式调理或干燥加热器：先确认直接燃烧燃料还是外购热及交付规格，再选身份；不重复已有电力。 原始活动或阶段基准：1 kg 放行合格种子. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| `protocol_id` | `process_id` | `flow_role` | `record_type` | `raw_fields` | `collection_method` | `unit` | `frequency` | `temporal_coverage` | `site_scope` | `aggregation_rule` | `quality_evidence` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source_seed_lot | fruit_seed_multiplication | 种源种子或亲本材料 | 批次登记、发票、种子证书或内部转移记录 | 批次编号；物种；品种或品系；等级；供应商或来源；质量；含水率；处理；日期 | 抄录主要批次记录并与收货记录核对；每个来源批次单独保留记录，完成身份核对后再汇总 | kg；百分比；声明的分类字段 | 每个种源批次 | 每个生产周期 | 每个生产单元和种源批次 | 每声明的参考流 | 批次记录、标签、证书、收货检查 |
| cp_field_management_inputs | fruit_seed_multiplication | 养分、改良剂和植保投入 | 采购、施用和农场管理记录 | 产品；配方；养分或有效成分基础；数量；日期；面积；方法；批次；去向 | 将采购和施用记录核对至生产单元；按生产单元和期间汇总实际施用量 `crop_protection_products_specific_input`: 作业 fruit_seed_multiplication：- 流：实际使用的植保产品/有效成分 - 单位：kg 产品或 kg 有效成分 - 数量规则：按产品、有效成分、施用次数和批次记录 - 数值来源模式：前景记录（`foreground_record`） - 适用范围：实际使用时填 `applicable` 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_management_inputs` - 来源：`ipcc-2019-cropland` 原数量方法：按产品、有效成分、施用次数和批次记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg 产品；kg 养分或有效成分；ha | 每次施用 | 完整作物周期或多年生报告期 | 每个地块、温室、果园区块或种子园 | 每声明的参考流 | 发票、标签、养分计划、施用日志 |
| cp_irrigation_and_withdrawal | fruit_seed_multiplication | 灌溉和取水 | 水表、泵运行日志、水源记录、排水或排放记录 | 水源；水表起止读数；输送体积；循环用水；排水；降雨或其他声明用水；日期 | 读取水表并核对水源取水、输送和排放；按水源和生产单元汇总，取水与输送分开保留 | m3 或 kg | 每次灌溉或每月水表读数 | 完整作物周期或报告期 | 每个水源和生产单元 | 每声明的参考流 | 校准水表、泵运行日志、用水记录 |
| cp_field_energy | fruit_seed_multiplication | 田间能源 | 燃料领用、机械日志、电表、承包商发票 | 作业；能源载体；数量；机械；面积或批次；日期；因子引用 | 采集主要能源载体记录和承包商活动数据；只将有记录的作业分配至种子路线 `harvest_machinery_fuel_specific_input`: 作业 fruit_seed_harvest_capture：- 流：收获机械的柴油、汽油或其他燃料 - 单位：L 或 kg；附低位热值 - 数量规则：按加油、设备小时或燃料计量器记录 - 数值来源模式：前景记录（`foreground_record`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：采集记录（`collected_record`） - 采集协议：`cp_field_energy` - 来源：`fao-seed-production-manual` 原数量方法：按加油、设备小时或燃料计量器记录 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | L、kg、MJ 或 kWh | 每次作业或每月 | 完整作物周期或报告期 | 每个生产单元和作业 | 每声明的参考流 | 仪表、燃料领用、承包商记录 |
| cp_land_and_period | fruit_seed_multiplication | 土地占用和期间 | 地块登记、地图、租约、种植和移除记录 | 面积；生产单元编号；土地利用类别；种植和终止日期；生产期；更新事件 | 与地块或果园登记核对面积和日期；按声明期间及产出基础计算面积时间 | ha；m2；ha a；日期 | 每次种植、更新或终止事件 | 多年生单元完整生产寿命 | 每个地块、果园区块、温室或种子园 | 每声明的参考流 | 地图、登记、注明日期的田间记录 |
| cp_harvest_lot | fruit_seed_harvest_capture | 收获、田间损失、残体和交接 | 收获表、地磅、料箱或周转箱记录、田间损失日志 | 批次编号；生产单元；收获日期；毛重和皮重；成熟材料；损失；残体；共产品；目的地 | 收获时称量，或使用有记录的方法估算；完成批次和含水率核对后再汇总 | kg；含水率百分比 | 每次收获或采集 | 完整收获季 | 每个生产单元和批次 | 每声明的参考流 | 地磅、皮重记录、收获日志 |
| cp_extraction_batch | fleshy_seed_extraction_or_dry_seed_extraction | 提取投入、中间品、拒收品和能源 | 批次表、设备日志、仪表、含水率和停留时间记录 | 投入批次；路线；方法；水；能源；时间；相关时的温度；投入与产出质量；含水率；拒收品；残留物；交接 | 逐批记录提取作业并关联批次编号；先核对各批次，再汇总整个作业季 | kg；m3；kWh；MJ；百分比；小时或天 | 每批 | 完整提取季 | 每条提取线和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、设备日志 |
| cp_conditioning_batch | seed_drying_primary_conditioning | 干燥、清洗、清理、能源、产出和拒收品 | 调制批次表、干燥机或清理机日志、仪表、含水率记录 | 投入批次；方法；投入与产出质量；含水率；水；电力；燃料或热；筛下物；粉尘；去向 | 逐批记录调制并核实产出状态；按批次和声明含水率基础汇总 按路线确认要求：`conditioning_stationary_fuel_identification`: 实际固定式调理或干燥加热器：先确认直接燃烧燃料还是外购热及交付规格，再选身份；不重复已有电力。 原始活动或阶段基准：1 kg 放行合格种子. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kg；m3；kWh；MJ；百分比 | 每批 | 完整调制季 | 每条生产线、设施和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、废物单据 |
| cp_quality_testing | seed_grading_testing_lot_release | 等级、样品、检验和放行 | 实验室报告、抽样记录、分级表、放行决定 | 批次编号；样品编号；样品质量；纯度；发芽率或活力；健康；含水率；方法；日期；等级；去向 | 使用有记录的抽样和测试方法，保留放行决定；只有测试方法及批次身份相符时，才对批次加权或核对 | kg；百分比；分类结果 | 每批及每次必要复检 | 每个批次和放行期间 | 每个设施和实验室 | 每声明的参考流 | 实验室报告、抽样员记录、证书、放行签字 |
| cp_treatment_packaging_storage | seed_treatment_packaging_storage | 处理、包装、储存和交付形态 | 处理日志、包装规格、领用记录、库存台账、储存日志 | 批次编号；处理产品和剂量；包装类型和质量；装填数量；复用；期初和期末库存；相关时的温度或湿度；损失；发运; 每股物流的材料或产品身份；组成及污染状态；原生数量与单位；件重或密度换算依据；批次；产品与包装净质量；复用或返工；接收方；处理路线；匹配参考产出 ；期初期末库存；接收；发运；其他外部转出；实测拒收；独立有据损失；配对返工；水分/组分基准；未解释平衡差| 计量各实际物流并按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。返工/返回配对，留存材料纳入库存。未解释差额为证据缺口，不能自动成为废物或排放。保留归属并按匹配最终合格产出归一化一次。 | kg；件；kWh；百分比；日期；储存时长; 每股物流的 kg 分别记录；液体原生体积另列；件数与质量分开 | 每次处理、包装作业、库存变动或每月储存记录 | 纳入边界的处理和储存期间 | 每个设施、储存室和批次 | 每声明的参考流 | 处理记录、包装规格、仪表、库存台账 |
| cp_co_product_and_residue_fate | fruit_seed_harvest_capture_or_extraction_conditioning_process | 共产品、残体、拒收品和废物去向 | 销售或转移记录、接收方确认、堆肥或处置单据 | 物流；质量；含水率；预定用途；接收方；质量状况；交接；处理；日期 | 将产出物流关联至可长期追溯的去向记录；不得汇总不同去向而不保留各物流身份 | kg；百分比；分类去向 | 每个产出物流 | 完整生产和加工季 | 每个生产单元及接收目的地 | 每声明的参考流 | 发票、转移单、废物单据、接收方记录 |
| cp_emission_context | fruit_seed_multiplication_or_seed_drying_primary_conditioning | 基本流排放和方法背景 | 土壤、气候、养分、排水、排放、粉尘和因子记录 | 物质；接收介质；土壤；气候；养分投入；残体去向；灌溉；排水；方法层级；因子；测量；日期 | 采集方法输入和计算结果并保留来源及单位；按声明方法计算一次，并与活动数据核对 `conditioning_particulate_to_air_specific_emission`: - 流：清选、输送和干燥逸散至空气的颗粒物 - 单位：kg PM（注明粒径类别） - 数量规则：按除尘监测或适用排放因子 - 数值来源模式：计算值（`calculated_value`） 原始活动或阶段基准：1 kg 放行合格种子. - 归一化基准：每声明的参考流 - 基准类型：参考流（`reference_flow`） - 证据类型：根据采集计算（`calculated_from_collection`） - 采集协议：`cp_emission_context` - 来源：`fao-seed-drying-storage-2024` 按除尘监测或适用排放因子 这是必需的排放身份确认要求，不是集合式基本交换。每种适用物质及其实际接收介质须分别识别，保留兼容单位、实测活动量或有依据的计算方法、参数适用性及不确定性。保留原作业、期间、分配及最终参考流归一化规则。直接、间接路径及上游覆盖仅核算一次，不用总氮、燃烧总排放或泛称污染物替代具体化合物。适用时另行记录实际归还环境的材料及去向。完成数据集前须为每项必需交换建立具体卡片，并核验兼容UUID或明确保留未解析身份。缺少记录不等于零排放或不适用。 `fao-seed-drying-storage-2024` | kg 物质；kg N；ha；m3；因子单位 | 每次施用、事件或报告期 | 完整作物周期、批次或期间 | 每个生产单元和排放源 | 每声明的参考流 | 方法表、实验室或仪表记录、因子引用 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | 归一化量=原始记录/计算量×1 kg÷同一交接点和声明水分基准的合格参考种子净质量；仅归一化一次。 | process amount; net accepted reference seed; moisture basis | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_seed_dry_matter_conversion` | harvest, extraction, conditioning, storage, and delivery | 干物质=收到态质量×（1−湿基水分比例）；目标水分基准质量=干物质÷（1−目标水分比例）。顽拗性种子采用物种适用规则或保留收到态质量，不强制无据干燥。 | as-received mass; measured moisture; declared target basis; recalcitrant status | comparable mass and moisture-basis conversion | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_managed_soil_emissions` | field nutrient and residue emissions | 按实际矿质/有机养分、还田残余、挥发、淋失、土壤、气候和管理记录选择一个适用IPCC或地区认可层级。保留原报告基准，N2O-N、NH3-N和硝酸盐氮仅在需要时各换算一次。 | nutrient records; residue fate; soil and climate; method tier and factors | declared elementary emissions by substance and receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_land_occupation` | productive land | 面积时间=生产单元面积×声明实际占用时间，按calc_reference_normalization归一化；多年生单元使用声明的生产、替换和终止期间。 | area; dates; production period; accepted seed output | ha a or m2 a per reference flow | `ipcc-2019-cropland`; `mass-balance-identity` |
| `calc_water_balance` | irrigation, extraction, conditioning, and discharge | 在分别定义的水源输水网及过程边界核对源取水、交付水、内部循环、蒸发、材料含水、外排和期初期末库存。内部循环相消，不从已测外部供水或外排量重复扣回用；源取水和外购过程水不能作为同一数量重复交换。 | source and process-water records; meter readings; discharge and recirculation | water inputs, withdrawal, and discharge by process | `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_extraction_yield` | fleshy and dry extraction | 取种回收率=声明基准的中间种子质量÷同基准接收的含种子材料质量；共同产物、残余、拒收和未解释差额分别保留。 | input/output masses; moisture; co-product and reject records | recovery ratio and reconciled extraction outputs | `fao-local-vegetable-seed-production`; `fao-tree-seed-handling`; `mass-balance-identity` |
| `calc_conditioning_yield` | primary conditioning | 整理回收率=整理种子质量÷水分基准一致的原始或提取种子进入量；核对合格种子、筛下物、粉尘、拒收、水分损失及未解释差额。 | conditioning input/output; moisture; screening and loss records | conditioning recovery and mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_quality_lot_aggregation` | lot release and campaign aggregation | 仅汇总身份、路线、水分基准、试验方法和声明质量等级匹配的批次。仅在试验方法允许时按质量加权品质指标，否则保留逐批结果。 | lot mass; quality results; test method; lot identity | accepted lot set and quality disclosure | `ista-international-rules`; `oecd-seed-schemes` |
| `calc_co_product_attribution` | fruit, pulp, flesh, or other intended co-products | 优先分割过程。仍有共享负荷时，按已声明的物理或经济主方法及已有分配优先级对有据预期产出分配并披露敏感性；残余和废物不获共同产物信用。 | shared process burdens; output masses or values; intended-use evidence | attributed seed burden and co-product burden | `iso-14044-2006`; `fao-local-vegetable-seed-production` |
| `calc_period_attribution` | perennial orchards, mother plants, seed gardens, and multi-period storage | 将每项投入、资产、产出、替换、终止及储存事件关联至一个期间；共享负荷向该期间声明产出归属一次，并核对期初期末记录。 | period records; output; establishment/replacement/termination; storage records | period-attributed inventory and no-double-counting check | `iso-14044-2006`; `mass-balance-identity` |
| `calc_reusable_packaging_mass` | reusable packaging | 批次包装质量=分配给该批的包装实物质量÷有据服务周转次数，仅按已记录退回或损失率调整；周转次数未知时报告全部分配质量和不确定性。 | package mass; capacity; service cycles; return/loss rate; lot assignment | packaging mass per reference flow | `fao-seed-production-manual`; `mass-balance-identity` |
| `calc_storage_reconciliation` | included storage | 按批次和去向计量实际受损、拒收或损失物流，各数量互斥。按匹配水分/组分基准核对：期初库存+接收=合格发运+其他外部转出+拒收移出+独立有据物理损失+期末库存。返工作为配对转移或留存库存，不计额外最终产出；未解释差额为调查项，不能自动作废物或排放。不将移出批次加到接收，不漏期末库存，不重复扣损失，最终归一化一次。 | opening/closing inventory; receipts; dispatch; loss; rework records | storage loss and delivered reference amount | `fao-tree-seed-handling`; `fao-seed-drying-storage-2024`; `mass-balance-identity` |
| `packaging_rejects_specific_output` | seed_treatment_packaging_storage | 对果实种子的处理、包装及展示活动，将不合格包装袋、封口失效件、标签、薄膜、损坏容器及其他实际废弃物按有据材料与污染状态识别。称量每股实际物流，或使用有记录的单件质量及其不确定性将件数换算为质量；件数本身不是质量。返回使用的可复用物品保留在复用台账中，不自动作为报废废物。保留种子批次污染控制、原合格参考种子基准、库存变动、去向及处理责任。 这是必须完成的采集与计算要求，不是一项库存交换。完成数据集前，应对每股实际外运物流建立物理身份具体的卡片，记录组成、状态、原生数量与流属性、去向以及有依据的产品或废物角色。仅使用兼容且已验证的 UUID，或明确登记具体未解析身份。不得编造包装配方、假定已分选、根据缺证据推断零或省略必需物流。真实的一股混合物流只有在存在收集与交付证据、明确组成且处理路线兼容时，才可保留为一个身份；不得同时重复计入其组分外运量。分别处理的液体与固体物流分开记录。保留原归属、期间、质量与水量平衡、参考分母及处理服务边界；已有匹配交换时建立关联而不重复计数。原集合范围不作为单股物流默认量或限制。 | cp_treatment_packaging_storage | actual stream-specific exchanges, destinations and nonduplicated mass balance | `fao-seed-production-manual`; `mass-balance-identity` |
| `chemical_species_mass_accounting` | elementary_nutrient_emissions | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_emission_context`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | Identity-specific exchanges and reconciled activity records |  |

### 数据质量要求

| `requirement_id` | Requirement |
| --- | --- |
| `dq_identity_and_lot_traceability` | 每个种子批次具有物种、品种/品系、等级、地点、日期和追溯标识。 |
| `dq_measurement_and_tare` | 质量、水、能源和包装数据有仪器/皮重/换算记录；估计值须标记并给出理由。 |
| `dq_temporal_and_period_coverage` | 田间、母株、储存和共用设施数据覆盖声明生产期；缺口必须披露。 |
| `dq_input_completeness` | 实际使用的肥料/调理剂、植保产品、燃料、电力、水、处理剂和包装均有记录；未使用类型不强制补齐。 |
| `dq_quality_release_evidence` | 发芽率、纯度、活力和处理状态来自批次检验或等效放行证据。 |
| `dq_co_product_and_fate_evidence` | 共产品、残渣、拒收、样品、返工和包装废弃物具有真实去向记录。 |
| `dq_flow_binding_coordinates` | 记录各具体流的查询描述和身份核验状态；未确认的 UUID 保持空缺。 |
| `dq_method_and_factor_provenance` | 排放、能源、水和质量换算因子记录来源、版本、适用区域、年份和方法。 |
| `dq_mass_balance_and_uncertainty` | 各过程和批次通过质量平衡，并报告误差、估计范围和关键不确定度。 |

证据优先级为批次称重/计量/检验记录，其次为供应商和采购记录，再其次为经产品特定理由说明的估计。外部方法来源仅支持方法或因子选择，不替代现场产品事实。

## 9. 验证规则

| `rule_id` | 规则 |
| --- | --- |
| `validation_reference_flow` | 存在 1 kg 放行合格水果种子参考流，且质量属性、含水率基准和净量定义明确。 |
| `validation_scope` | 每个输入/输出能归入从繁殖到交付门的边界；下游栽培和未声明运输不得悄然进入。 |
| `validation_route_choice` | 多汁与干取种路线按实际批次选择；替代路线不重复计入，技术差异有记录。 |
| `validation_process_map` | 必需过程均存在，条件过程仅在适用时存在，过程接口和批次质量可追溯。 |
| `validation_flow_binding` | 参数化卡片具有允许的 具体流身份核验。 |
| `validation_nutrient_basis` | 肥料/调理剂按产品量和元素量分别报告；仅记录实际使用产品。 |
| `validation_water_and_land` | 水用途、回用和损失可核对，土地面积/期间和跨年度分摊有证据。 |
| `validation_quality_release` | 纯度、发芽率、活力和处理状态支持放行决定，样品与拒收流未计入参考产品。 |
| `validation_co_product_outputs` | 果实、果肉、壳、筛下物、残渣和降级品具有去向或分配规则。 |
| `validation_period_attribution` | 母株、多年度生产、储存和设施活动的覆盖期及分摊基础明确。 |
| `validation_reject_rework_paths` | 拒收、返工、回收和再处理路径独立记录且不重复计量。 |
| `validation_mass_balance` | 过程和批次质量平衡在允许误差内；超差有解释、范围和修正计划。 |
| `validation_storage_and_gate` | 储存损失、包装损耗和交付前质量变化已从参考产品净量扣除。 |
| `validation_dataset_disclosure` | 数据集披露地点、时期、路线、质量属性、证据等级、估计、因子和未解析身份。 |

## 10. 发布数据集画像
### 数据集档案

| 字段 | 值 |
| --- | --- |
| 地理范围 | 生产地点特定；必须报告国家/地区和地点 |
| 时间范围 | 具体作季、收获批次和储存期 |
| 技术范围 | 水果作物/果树种子；多汁或干取种替代路线；常规或实际声明技术 |
| 数据质量 | 批次实测优先；理由估计必须标注；跨期和缺口披露 |
| 资本货物 | 默认排除；若背景数据库要求则单独声明 |
| 分配 | 过程细分优先，其次质量或经济基础；报告共产品和降级流 |
| 交付门 | 已放行、已声明质量属性的净种子离开生产/储存场所 |

## 11. 数据来源
### 外部来源

| `source_id` | 用途与参考 |
| --- | --- |
| `fao-seed-production-manual` | 种子企业、收获、批次和生产数据方法；FAO, *Seed enterprises enhancement and development project in Sierra Leone*。 https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf |
| `fao-seed-systems` | 种子系统、种源和供应链边界；FAO, *What are seed systems?* https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/ |
| `fao-local-vegetable-seed-production` | 多汁果实种子采集、清洗和家庭/地方生产实例；FAO, *Home Garden Technology Leaflet 17*。 https://www.fao.org/4/X3996E/x3996e41.htm |
| `fao-tree-seed-handling` | 果树/树木种子的收集、处理、干燥和储存；FAO, *Collection, storage and treatment of tree seeds*。 https://www.fao.org/4/ad226e/AD226E05.htm |
| `fao-seed-drying-storage-2024` | 种子干燥、含水率、储存和能耗采集；LiveSeeding, *Handbook on Seed Drying and Storage* (2024)。 https://orgprints.org/id/eprint/52128/2/LiveSeeding_HandBook_SeedDryingAndStorage_050524_final-EN.pdf |
| `oecd-seed-schemes` | 品种身份、种子等级和认证/批次控制背景；OECD Seed Schemes。 https://www.oecd.org/en/topics/seeds.html |
| `ista-international-rules` | 种子抽样、检验、纯度和发芽率报告背景；ISTA, *International Rules for Seed Testing*。 https://www.seedtest.org/en/publications/international-rules-seed-testing.html |
| `iso-14044-2006` | 生命周期清单、功能单位、分配和质量要求的方法背景；ISO 14044:2006。 https://www.iso.org/standard/38498.html |
| `ipcc-2019-cropland` | 农田管理、作物残体和土地相关排放因子背景；IPCC 2019 Refinement, Volume 4, Chapter 5。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf |
| `ipcc-2019-managed-soils-n2o` | 管理土壤 N₂O、氨和硝酸盐损失因子背景；IPCC 2019 Refinement, Volume 4, Chapter 11。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf |
| `mass-balance-identity` | 过程入口、输出、损失和共产品的质量守恒检查；内部方法恒等式，不代表外部数据库身份。 |

本中文文件是 `pcr.en-US.md` 的对齐翻译。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
