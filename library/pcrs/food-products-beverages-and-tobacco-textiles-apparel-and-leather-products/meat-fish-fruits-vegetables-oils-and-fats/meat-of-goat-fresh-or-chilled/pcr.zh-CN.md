---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 山羊肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 涵盖在屠宰场出厂门以鲜或冷藏状态供应、归入 CPC 21116 的食用山羊肉，包括未冻结且净合格肉质量已知的胴体、半胴体、四分体和分割肉。食用内脏、血、皮、脂肪、骨及其他分离输出不属于参考产品，产生时须逐项记录。

冷冻山羊肉、单独销售的食用内脏、肉制品、炼制产品和废物处理产品不属于产品范围。山羊养殖和进厂动物运输在前景边界之外，但须通过与活山羊输入关联的上游数据集表示。配送、零售、烹饪、消费和生命末期也在前景边界之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-fresh-or-chilled |
| classification_refs | CPC 3.0: 21116（精确） |
| covered_products | 作为肉类且以鲜或冷藏、未冻结状态出厂的山羊胴体、半胴体、四分体和分割肉 |
| excluded_products | 冷冻山羊肉；单独销售的食用内脏；加工或保藏山羊肉；炼制脂肪；山羊皮；血；骨；活畜；零售或熟制产品 |
| representative_product | 屠宰场出厂门的净合格冷藏山羊分割肉 |
| production_route | 活山羊接收与屠宰；胴体整理和具体副产品分离；分割去骨；冷却冷藏；清洗消毒；条件性场内废水处理；包装出厂 |
| market_state | 鲜或冷藏、食品级、已验收出厂，不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在屠宰场出厂门供应的食用鲜或冷藏山羊肉 |
| How much | 1 kg 净合格产品质量 |
| How well | 符合所声明分割形式、温度、卫生、组成和验收规格且未冻结的食品级山羊肉 |
| How long or cycle | 一个完成至出厂的生产批次；不规定使用阶段持续时间 |
| reference_flow_link | `packaging_dispatch` 的净合格鲜或冷藏山羊肉输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 山羊肉，新鲜或冷藏 `20b4b0eb-d827-48d9-b744-d54842ba57ef` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 山羊物种；胴体或分割描述；带骨或去骨状态；鲜或冷藏状态；出厂温度；净产品质量；批次和设施；屠宰与分割路线；包装配置；生产期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_meat_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化为恰好 1 kg 合格鲜或冷藏山羊肉；排除所有包装及单独回收的副产品。 |
| `live_mass_and_output_mass` | 活山羊和屠宰输出 | Mass | kg | 对同一生产群体和期间保留实测活重、胴体质量、肉输出质量和每种分离输出质量；不得以头数替代质量。 |
| `temperature_state` | 肉类输出 | Temperature and time | °C; h | 记录冷却及出厂产品温度和相关停留时间，以证明鲜或冷藏状态并排除冷冻生产。 |
| `energy_carrier_separation` | 电力和热力输入 | Energy | kWh; MJ; kg as purchased | 分别保留电力、外购蒸汽、外购热水、天然气、柴油和 LPG 记录并披露每个换算系数。 |
| `chemical_formulation_mass` | 清洗剂和消毒剂 | Mass | kg | 分别记录供应制剂质量及活性含量，不得报告未指明的化学品总量。 |
| `packaging_net_mass` | 包装输入 | Mass | kg | 根据空包装实测质量和数量计算每个包装组件，并从参考产品质量中排除所有包装。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景作业 | 从屠宰场接收活山羊开始，到合格鲜或冷藏山羊肉包装出厂结束；纳入所有场内和分包的屠宰、整理、分割、冷却、消毒、相关废水管理和包装作业。 | `jrc-sa-bref-2024`; `ec-pef-method-2021` |
| `boundary_upstream_live_goat` | 活山羊输入 | 山羊养殖和进厂运输不纳入前景过程清单，但活山羊输入须关联与所声明动物和地域一致且透明的上游生产及运输数据集。 | `ec-pef-method-2021` |
| `boundary_downstream_exclusion` | 下游生命周期 | 排除配送、零售、烹饪、消费和生命末期，除非研究在本出厂门 PCR 之外明确增加这些阶段。 | `ec-pef-method-2021` |
| `boundary_actual_route` | 条件性作业 | 仅在实际存在时纳入场内制冷、直接燃烧和废水处理，并披露缺失或外供作业，不得将其交换净入另一过程。 | `jrc-sa-bref-2024` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场接收点验收的活山羊，并记录合格头数、实测活重、来源、到达时间和适宰状态 |
| starting_condition_role | 上游畜牧生产和运输终止于前景屠宰场系统的产品输入 |
| product_classification_scope | 仅 CPC 21116 鲜或冷藏山羊肉；冷冻肉和内脏排除于参考产品之外 |
| recursive_input_rule | 任何用于范围内批次的外购鲜或冷藏山羊肉均作为单独同类别输入记录并带有自身上游数据集，不在本 PCR 内递归拆解 |
| upstream_dataset_requirement | 活山羊生产、进厂运输、外购公用工程、化学品、包装和外部处理服务须采用地域、时间和技术代表性适当的上游数据集 |
| disclosure | 声明动物来源与活重、屠宰路线、产品形式、带骨状态、冷却制度、设施与分包边界、废水路线、包装及所有排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `animal_reception_slaughter` | 动物接收与屠宰 | `required` | 始终纳入 | 前景接收、待宰和屠宰 | kg 放血山羊胴体输出 |
| `carcass_dressing_byproduct_recovery` | 胴体整理与副产品回收 | `required` | 始终纳入 | 前景整理与分离 | kg 整理后山羊胴体输出 |
| `cutting_deboning` | 分割与去骨 | `required` | 纳入实际分割和去骨路线；即使仅分割胴体也保留本过程 | 前景肉品制备 | kg 未冷却合格山羊肉输出 |
| `chilling_cold_storage` | 冷却与冷藏 | `required` | 冷藏产品始终纳入；以鲜肉销售且无主动冷却时记录实测存放条件 | 前景温度控制 | kg 合格鲜或冷藏山羊肉输出 |
| `cleaning_sanitation` | 清洗与消毒 | `required` | 始终纳入；各热力、燃料和化学品卡仅在实际使用时适用 | 前景卫生支持 | kg 所服务参考产品当量生产 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 屠宰废水在排放或转移前于场内处理时纳入 | 前景污染控制 | kg 已处理均质屠宰场废水 |
| `packaging_dispatch` | 包装与出厂 | `required` | 始终纳入；未使用的包装卡声明不适用 | 前景最终产品制备 | 1 kg 净合格参考产品 |

### 过程：动物接收与屠宰（`animal_reception_slaughter`）

#### 输入

##### 产品流

###### 验收活山羊（`live_goat_input`）

活山羊作为一个畜产品输入跨越屠宰场边界；称量合格群体并保留来源与头数记录。

- 选定流：Live goat
- 流属性/单位：Mass / kg
- 数量规则：实测合格活山羊质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

###### 接收与屠宰工艺水（`reception_slaughter_water_input`）

计量接收、待宰和屠宰用水，排除分配给后续消毒的水。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：实测接收与屠宰用水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

###### 接收与屠宰电力（`reception_slaughter_electricity_input`）

将活畜处理和屠宰设备电力与后续阶段分开计量或因果分配。

- 选定流：Electricity, low voltage, at slaughterhouse
- 流属性/单位：Energy / kWh
- 数量规则：实测或因果分配的接收与屠宰电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放血山羊胴体（`bled_goat_carcass_output`）

屠宰放血后的胴体进入整理；用校准轨道秤或批次称重取得质量。

- 选定流：Bled goat carcass
- 流属性/单位：Mass / kg
- 数量规则：实测放血山羊胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

###### 技术加工用山羊血（`goat_blood_byproduct_output`）

单独收集并送往已声明技术加工路线的山羊血作为一个具体共产品称重。

- 选定流：Goat blood for technical processing
- 流属性/单位：Mass / kg
- 数量规则：实测单独收集的山羊血质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

##### 废物流

###### 接收区山羊粪便（`goat_manure_waste_output`）

接收和待宰区移除的山羊粪便须单独称量并关联实际接收处理。

- 选定流：Goat manure
- 流属性/单位：Mass / kg
- 数量规则：实测移除粪便质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

###### 整只判废山羊胴体（`condemned_whole_goat_waste_output`）

整理前判废的整只山羊作为具体动物组织废物记录，不与合格活体输入相抵。

- 选定流：Condemned whole goat carcass
- 流属性/单位：Mass / kg
- 数量规则：实测整只判废胴体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

###### 山羊屠宰间废水（`slaughter_wastewater_output`）

山羊屠宰间实际收集的废水在混合或处理前作为一个具体废物流计量；产生的待宰区冲洗水须另行报告。

- 选定流：Wastewater from goat slaughter hall
- 流属性/单位：Volume / m3
- 数量规则：实测山羊屠宰间废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放血山羊胴体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_slaughter`
- 来源：`jrc-sa-bref-2024`

##### 基本流

Exit code: 0
Wall time: 0.1 seconds
Total output lines: 964
Output:
### 过程：胴体整理与副产品回收（`carcass_dressing_byproduct_recovery`）

#### 输入

##### 产品流

###### 放血山羊胴体输入（`bled_goat_carcass_input`）

本卡记录“放血山羊胴体输入”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Bled goat carcass
- 流属性/单位： Mass / kg
- 数量规则：实测进入整理过程的放血山羊胴体质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 胴体整理工艺水（`dressing_water_input`）

本卡记录“胴体整理工艺水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：过程用水
- 流属性/单位： Volume / m3
- 数量规则：实测胴体整理用水体积
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 胴体整理电力（`dressing_electricity_input`）

本卡记录“胴体整理电力”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Electricity, low voltage, at slaughterhouse
- 流属性/单位： Energy / kWh
- 数量规则：实测或按因果关系分配的胴体整理电力
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后山羊胴体（`dressed_goat_carcass_output`）

本卡记录“整理后山羊胴体”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Dressed goat carcass
- 流属性/单位： Mass / kg
- 数量规则：实测合格整理后胴体质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 食用山羊肝（`edible_goat_liver_output`）

本卡记录“食用山羊肝”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat liver, edible
- 流属性/单位： Mass / kg
- 数量规则：实测合格食用山羊肝质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 食用山羊心（`edible_goat_heart_output`）

本卡记录“食用山羊心”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat heart, edible
- 流属性/单位： Mass / kg
- 数量规则：实测合格食用山羊心质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 山羊皮（`goat_hide_byproduct_output`）

本卡记录“山羊皮”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat hide
- 流属性/单位： Mass / kg
- 数量规则：实测山羊皮质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

##### 废物流

###### 山羊胃内容物（`goat_stomach_contents_waste_output`）

本卡单独记录山羊胃内容物；须与肠内容物分别称量并保留处理去向。

- 选定流： Goat stomach contents
- 流属性/单位： Mass / kg
- 数量规则： 实测山羊胃内容物废物质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 山羊肠内容物（`goat_intestinal_contents_waste_output`）

本卡单独记录山羊肠内容物，并在处理前作为一个具体废物交换称量。

- 选定流： Goat intestinal contents
- 流属性/单位： Mass / kg
- 数量规则： 实测山羊肠内容物废物质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 判废山羊内脏（`condemned_goat_viscera_waste_output`）

本卡记录“判废山羊内脏”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Condemned goat viscera
- 流属性/单位： Mass / kg
- 数量规则：实测判废山羊内脏质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

###### 胴体整理废水（`dressing_wastewater_output`）

本卡记录“胴体整理废水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Wastewater from goat carcass dressing
- 流属性/单位： Volume / m3
- 数量规则：实测胴体整理废水体积
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 kg 整理后山羊胴体输出
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_carcass_dressing`
- 来源： `jrc-sa-bref-2024`

##### 基本流

Exit code: 0
Wall time: 0.1 seconds
Output:
### 过程：分割与去骨（`cutting_deboning`）

#### 输入

##### 产品流

###### 整理后山羊胴体输入（`dressed_goat_carcass_input`）

本卡记录“整理后山羊胴体输入”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Dressed goat carcass
- 流属性/单位： Mass / kg
- 数量规则：实测进入分割过程的整理后胴体质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

###### 分割间工艺水（`cutting_water_input`）

本卡记录“分割间工艺水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：过程用水
- 流属性/单位： Volume / m3
- 数量规则：实测分割间工艺水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

###### 分割与去骨电力（`cutting_electricity_input`）

本卡记录“分割与去骨电力”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Electricity, low voltage, at slaughterhouse
- 流属性/单位： Energy / kWh
- 数量规则：实测或按因果关系分配的分割与去骨电力
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未冷却合格山羊肉（`unchilled_goat_meat_output`）

本卡记录“未冷却合格山羊肉”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat meat cuts, unchilled
- 流属性/单位： Mass / kg
- 数量规则：实测合格未冷却山羊肉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

###### 进一步加工用山羊骨（`goat_bones_byproduct_output`）

本卡记录“进一步加工用山羊骨”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat bones for further processing
- 流属性/单位： Mass / kg
- 数量规则：实测分离山羊骨质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

###### 炼制用山羊脂肪（`goat_fat_byproduct_output`）

本卡记录“炼制用山羊脂肪”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat fat for rendering
- 流属性/单位： Mass / kg
- 数量规则：实测送往炼制的山羊脂肪修边料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

##### 废物流

###### 判废山羊肉修边料（`condemned_meat_waste_output`）

本卡记录“判废山羊肉修边料”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Condemned goat meat trimmings
- 流属性/单位： Mass / kg
- 数量规则：实测判废山羊肉修边料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

###### 分割间废水（`cutting_wastewater_output`）

本卡记录“分割间废水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Wastewater from goat-meat cutting
- 流属性/单位： Volume / m3
- 数量规则：实测分割间废水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 未冷却合格山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cutting_deboning`
- 来源： `jrc-sa-bref-2024`

##### 基本流



### 过程：冷却与冷藏（`chilling_cold_storage`）

#### 输入

##### 产品流

###### 未冷却山羊肉输入（`unchilled_goat_meat_input`）

本卡记录“未冷却山羊肉输入”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat meat cuts, unchilled
- 流属性/单位： Mass / kg
- 数量规则：实测进入温控过程的未冷却山羊肉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`

###### 冷却电力（`chilling_electricity_input`）

本卡记录“冷却电力”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Electricity, low voltage, at slaughterhouse
- 流属性/单位： Energy / kWh
- 数量规则：实测或按因果关系分配的冷却与冷藏电力
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`

###### 制冷除霜水（`chilling_defrost_water_input`）

本卡记录“制冷除霜水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：过程用水
- 流属性/单位： Volume / m3
- 数量规则：实际使用时实测制冷除霜水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`

###### 氨制冷剂补充量（`ammonia_refrigerant_input`）

本卡记录“氨制冷剂补充量”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Ammonia, anhydrous, refrigerant grade
- 流属性/单位： Mass / kg
- 数量规则：实测氨制冷剂补充质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜或冷藏山羊肉（`chilled_goat_meat_output`）

本卡记录“合格鲜或冷藏山羊肉”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat meat before packaging
- 流属性/单位： Mass / kg
- 数量规则：实测合格鲜或冷藏山羊肉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `un-cpc-3-0-21116`; `jrc-sa-bref-2024`

##### 废物流

###### 制冷除霜废水（`chilling_defrost_wastewater_output`）

本卡记录“制冷除霜废水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Wastewater from refrigeration defrosting
- 流属性/单位： Volume / m3
- 数量规则：实测制冷除霜废水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`

##### 基本流

###### 排放至空气的氨制冷剂（`ammonia_refrigerant_air_output`）

本卡记录“排放至空气的氨制冷剂”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：氨，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算排放至空气的氨制冷剂损失
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 合格鲜或冷藏山羊肉输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_chilling_storage`
- 来源： `jrc-sa-bref-2024`


Exit code: 0
Wall time: 0.1 seconds
Output:
### 过程：清洗与消毒（`cleaning_sanitation`）

#### 输入

##### 产品流

###### 消毒工艺水（`sanitation_water_input`）

本卡记录“消毒工艺水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：过程用水
- 流属性/单位： Volume / m3
- 数量规则：实测消毒用水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒电力（`sanitation_electricity_input`）

本卡记录“消毒电力”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Electricity, low voltage, at slaughterhouse
- 流属性/单位： Energy / kWh
- 数量规则：实测或按因果关系分配的消毒电力
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒用外购蒸汽（`purchased_steam_input`）

本卡记录“消毒用外购蒸汽”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：外购蒸汽
- 流属性/单位： Energy / MJ
- 数量规则：实测供应至消毒过程的外购蒸汽量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒用外购热水（`purchased_hot_water_input`）

本卡记录“消毒用外购热水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：外购热水
- 流属性/单位： Energy / MJ
- 数量规则：实测供应至消毒过程的外购热水能量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒供热用天然气（`natural_gas_input`）

本卡记录“消毒供热用天然气”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：天然气
- 流属性/单位： Energy / MJ
- 数量规则：实测消毒供热的天然气能量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒供热用柴油（`diesel_input`）

本卡记录“消毒供热用柴油”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：柴油燃料
- 流属性/单位： Energy / MJ
- 数量规则：实测消毒供热的柴油能量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 消毒供热用 LPG（`lpg_input`）

本卡记录“消毒供热用 LPG”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：液化石油气
- 流属性/单位： Energy / MJ
- 数量规则：实测消毒供热的 LPG 能量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 氢氧化钠清洗制剂（`sodium_hydroxide_cleaner_input`）

本卡记录“氢氧化钠清洗制剂”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Sodium hydroxide cleaning formulation
- 流属性/单位： Mass / kg
- 数量规则：实测供应的氢氧化钠制剂质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 过氧乙酸消毒制剂（`peracetic_acid_disinfectant_input`）

本卡记录“过氧乙酸消毒制剂”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Peracetic acid disinfectant formulation
- 流属性/单位： Mass / kg
- 数量规则：实测供应的过氧乙酸制剂质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 消毒废水（`sanitation_wastewater_output`）

本卡记录“消毒废水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Wastewater from slaughterhouse sanitation
- 流属性/单位： Volume / m3
- 数量规则：实测消毒废水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

##### 基本流

###### 天然气燃烧化石二氧化碳（`natural_gas_co2_air_output`）

本卡记录“天然气燃烧化石二氧化碳”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测天然气燃烧的化石二氧化碳
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `ec-pef-method-2021`

###### 天然气燃烧氮氧化物（`natural_gas_nox_air_output`）

本卡记录“天然气燃烧氮氧化物”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测天然气燃烧的氮氧化物
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 柴油燃烧化石二氧化碳（`diesel_co2_air_output`）

本卡记录“柴油燃烧化石二氧化碳”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测柴油燃烧的化石二氧化碳
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `ec-pef-method-2021`

###### 柴油燃烧氮氧化物（`diesel_nox_air_output`）

本卡记录“柴油燃烧氮氧化物”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测柴油燃烧的氮氧化物
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### 柴油燃烧细颗粒物（`diesel_pm25_air_output`）

本卡记录“柴油燃烧细颗粒物”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测柴油燃烧的初级 PM2.5
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`

###### LPG 燃烧化石二氧化碳（`lpg_co2_air_output`）

本卡记录“LPG 燃烧化石二氧化碳”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测 LPG 燃烧的化石二氧化碳
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `ec-pef-method-2021`

###### LPG 燃烧氮氧化物（`lpg_nox_air_output`）

本卡记录“LPG 燃烧氮氧化物”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位： Mass / kg
- 数量规则：计算或实测 LPG 燃烧的氮氧化物
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 kg 所服务参考产品当量生产
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_sanitation`
- 来源： `jrc-sa-bref-2024`


### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

##### 废物流

###### 均质屠宰场废水（`equalized_wastewater_input`）

本卡记录“均质屠宰场废水”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Equalized goat-slaughterhouse wastewater
- 流属性/单位： Volume / m3
- 数量规则：实测进入场内处理的废水体积
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 屠宰场废水处理污泥（`wastewater_sludge_output`）

本卡记录“屠宰场废水处理污泥”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Sludge from slaughterhouse wastewater treatment
- 流属性/单位： Mass / kg
- 数量规则：实测脱水废水污泥质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

##### 基本流

###### 排放至水体的化学需氧量（`cod_water_output`）

本卡记录“排放至水体的化学需氧量”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位： Mass / kg
- 数量规则：计算处理后出水排放的 COD 质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

###### 排放至水体的总氮（`total_nitrogen_water_output`）

本卡记录“排放至水体的总氮”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Nitrogen, total, to water
- 流属性/单位： Mass / kg
- 数量规则：计算处理后出水排放的总氮质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

###### 排放至水体的总磷（`total_phosphorus_water_output`）

本卡记录“排放至水体的总磷”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Phosphorus, total, to water
- 流属性/单位： Mass / kg
- 数量规则：计算处理后出水排放的总磷质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

###### 废水处理生物源甲烷（`wastewater_methane_air_output`）

本卡记录“废水处理生物源甲烷”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：生物源甲烷，排入空气
- 流属性/单位： Mass / kg
- 数量规则：实测或计算废水处理释放的生物源甲烷
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 技术特定 (`technology_specific`）
- 归一化基准： 每 m3 已处理均质废水
- 基准类型： 过程输出 (`process_output`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_onsite_wastewater`
- 来源： `jrc-sa-bref-2024`

### 过程：包装与出厂（`packaging_dispatch`）

#### 输入

##### 产品流

###### 包装前鲜或冷藏山羊肉（`chilled_goat_meat_packaging_input`）

本卡记录“包装前鲜或冷藏山羊肉”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Goat meat before packaging
- 流属性/单位： Mass / kg
- 数量规则：实测进入包装过程的合格肉质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `un-cpc-3-0-21116`

###### 聚乙烯初级包装膜（`polyethylene_film_input`）

本卡记录“聚乙烯初级包装膜”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Polyethylene primary packaging film
- 流属性/单位： Mass / kg
- 数量规则：根据数量和实测空单件质量计算使用的聚乙烯膜质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

###### 瓦楞运输纸箱（`corrugated_carton_input`）

本卡记录“瓦楞运输纸箱”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：瓦楞纸板运输箱
- 流属性/单位： Mass / kg
- 数量规则：计算分配给参考产品的瓦楞纸箱质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

###### 纸质产品标签（`paper_label_input`）

本卡记录“纸质产品标签”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Paper product label
- 流属性/单位： Mass / kg
- 数量规则：根据数量和实测单件质量计算使用的纸标签质量
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

###### 包装电力（`packaging_electricity_input`）

本卡记录“包装电力”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Electricity, low voltage, at slaughterhouse
- 流属性/单位： Energy / kWh
- 数量规则： 实测或按因果关系分配的 包装 电力
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考鲜或冷藏山羊肉输出（`reference_goat_meat_output`）

本卡记录“参考鲜或冷藏山羊肉输出”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：山羊肉，新鲜或冷藏 `20b4b0eb-d827-48d9-b744-d54842ba57ef`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- 数量规则：将合格净鲜或冷藏山羊肉质量归一化为恰好 1 kg
- 数值来源模式： 计算值 (`calculated_value`）
- 适用范围： 产品特定 (`product_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集计算 (`calculated_from_collection`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `un-cpc-3-0-21116`

##### 废物流

###### 废聚乙烯包装膜（`polyethylene_film_waste_output`）

本卡记录“废聚乙烯包装膜”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Waste polyethylene packaging film
- 流属性/单位： Mass / kg
- 数量规则：实测废聚乙烯膜质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

###### 废瓦楞纸板（`corrugated_carton_waste_output`）

本卡记录“废瓦楞纸板”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流：废瓦楞纸板
- 流属性/单位： Mass / kg
- 数量规则：实测废瓦楞纸板质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

###### 废纸标签材料（`paper_label_waste_output`）

本卡记录“废纸标签”这一具体交换；数量按所列规则及采集协议取得并保留可追溯记录。

- 选定流： Waste paper label stock
- 流属性/单位： Mass / kg
- 数量规则：实测废纸标签材料质量
- 数值来源模式： 前景记录 (`foreground_record`）
- 适用范围： 场址特定 (`site_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流 (`reference_flow`）
- 证据类型： 采集记录 (`collected_record`）
- 采集协议： `cp_packaging_dispatch`
- 来源： `ec-pef-method-2021`

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有前景作业 | 分配前首先细分接收/屠宰、整理、分割、冷却、消毒、废水处理和包装，并直接测量产品特定交换。 | `ec-pef-method-2021` |
| `allocation_saleable_outputs` | 肉及可销售的血、肝、心、皮、脂肪或骨 | 能表示负荷成因时采用有文件依据的物理因果关系；无合理物理关系时按 PEF 分配层级处理，并披露经济分配期间、价格、货币和敏感性。 | `ec-pef-method-2021` |
| `allocation_waste_outputs` | 判废组织、胃肠内容物、粪便、废水、污泥和包装废物 | 将生产负荷归于产生废物的作业并模拟实际接收处理；没有明确合理的下游方法时不得建立避免产品抵扣。 | `ec-pef-method-2021`; `jrc-sa-bref-2024` |
| `allocation_shared_utilities` | 共用电力、水和热力仪表 | 使用运行时间乘实测功率、需水量或需热量等因果驱动分别分配每种公用工程，并保留仪表总量、分子、分母和核对结果。 | `ec-pef-method-2021` |
| `allocation_packaging` | 成组纸箱 | 依据同一包装配置和期间内所装净产品质量，将实测空纸箱质量分配给产品。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_slaughter` | `animal_reception_slaughter` | 活山羊、水、电力、胴体、血、粪便、判废物和废水 | 畜牧接收；校准秤；仪表；屠宰与废物日志 | 批次；来源；头数；活重；合格质量；仪表读数；胴体、血、粪便、判废物质量；废水体积；去向 | 将所有读数和输出关联至同一合格屠宰批次 | kg; m3; kWh | 每批或每班，按月汇总 | 代表性生产期，通常 12 个月或完整生产活动 | 所有接收、待宰、屠宰作业和分包商 | 汇总同质批次，核对质量并按放血胴体输出归一化 | 秤和仪表校准；兽医验收；批次核对；转移凭证 |
| `cp_carcass_dressing` | `carcass_dressing_byproduct_recovery` | 胴体、水、电力、整理后胴体、肝、心、皮、胃肠内容物、判废内脏和废水 | 轨道秤；器官和皮秤；仪表；检验及转移日志 | 批次；输入胴体质量；水；电力；整理后质量；各输出质量；废水；验收状态；去向 | 对同一整理批次的各分离输出和拒收流称重 | kg; m3; kWh | 每批或每班，按月汇总 | 代表性生产期 | 所有整理和检验线 | 按产品规格汇总并除以整理后胴体输出 | 校准；检验记录；输出去向；过程质量平衡 |
| `cp_cutting_deboning` | `cutting_deboning` | 胴体、水、电力、肉、骨、脂肪、判废修边料和废水 | 批次秤；分割记录；仪表；废物和共产品日志 | 产品代码；带骨状态；输入质量；水；电力；肉、骨、脂肪和判废质量；废水 | 将每个分割批次从整理后胴体核对到合格肉和每个分离输出 | kg; m3; kWh | 每批，按月汇总 | 代表性生产期 | 所有分割和去骨线及分包商 | 仅汇总相同分割和带骨规格并按合格肉归一化 | 校准；分割规格；产率核对；去向凭证 |
| `cp_chilling_storage` | `chilling_cold_storage` | 肉、电力、除霜水、氨补充、冷藏肉、废水和氨排放 | 秤；温度记录仪；制冷电表；水表；制冷剂库存和维护日志 | 批次；输入/输出质量；进出温度；时间；电力；水；氨期初、补充、回收和期末库存；废水 | 将质量、温度、停留时间和公用工程关联到各冷却活动 | kg; °C; h; kWh; m3 | 温度连续、质量逐批、公用工程逐月 | 覆盖季节性运行的代表性生产期 | 所有冷却器、冷库和制冷回路 | 按实测负荷或有文件的因果驱动分配制冷并按合格肉归一化 | 校准记录仪和仪表；制冷剂核对；维护报告 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | 水、电力、蒸汽、热水、各燃料、各制剂、废水和燃烧排放 | 消毒计划；公用工程仪表；燃料发票；化学品领用；出水和烟气记录 | 区域/设备；时间；水；电力；蒸汽；热水；天然气；柴油；LPG；制剂质量及活性含量；废水；因子或测量 | 对每次消毒分别记录每种供应载能体、燃料和制剂 | m3; kWh; MJ; kg | 每次消毒或每班，按月汇总 | 代表性生产期 | 所有范围内清洗系统和供热设备 | 用有文件的因果驱动分配共用记录并由各自燃料计算每种排放 | 仪表校准；发票；SDS；浓度；因子引用；烟气结果；核对 |
| `cp_onsite_wastewater` | `onsite_wastewater_treatment` | 均质废水、污泥、COD、氮、磷和甲烷 | 进出口流量计；实验室结果；污泥秤；气体监测 | 日期；进水与排放体积；采样时间；COD、总氮、总磷浓度；污泥质量和含水率；甲烷测量或模型字段 | 将代表性样品与实测流量匹配并逐项计算排放 | m3; mg/L; kg | 流量连续或每日；按许可和运行计划采样 | 代表性生产期 | 完整场内处理边界 | 按期汇总质量负荷并用实测废水体积分配到生产 | 实验室资质；采样计划；流量计校准；污泥凭证；计算文件 |
| `cp_packaging_dispatch` | `packaging_dispatch` | 肉、各包装组件、电力、参考输出和各包装废物 | 产品秤；包装规格；组件数量和皮重；仪表；废物日志 | 批次；分割；带骨状态；温度；净肉质量；包装数量；空单件质量；纸箱内容物；电力；各废物质量 | 对每种包装配置核对肉及各包装组件 | kg; item; kWh; °C | 每包装批次，按月汇总 | 代表性生产期 | 所有包装和出厂线 | 将组件数量换算为质量，按所装净肉分配纸箱并归一化为 1 kg 净肉 | 秤校准；包装规格；装箱单；仪表标识；废物凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 期间交换量 / 合格净鲜或冷藏山羊肉质量 | 期间交换量；合格参考产品质量 | 每 1 kg 参考产品的交换量 | `ec-pef-method-2021` |
| `calc_stage_mass_balance` | 接收/屠宰、整理和分割 | 残差 = 实测质量输入 - 合格主输出 - 每种实测共产品 - 每种实测废物 - 有文件的蒸发或滞留水 | 所有阶段特定质量记录 | 各阶段披露的残差 | `jrc-sa-bref-2024` |
| `calc_refrigerant_loss` | 氨制冷回路 | 氨损失 = 期初库存 + 补充 - 回收量 - 期末库存 - 有文件的转移量 | 制冷剂库存与维护记录 | 经核对且有排放路线证据的氨排放 kg | `ec-pef-method-2021` |
| `calc_effluent_load` | 每种废水排放 | 排放质量 = 匹配浓度 × 出水体积，并记录单位换算 | 浓度；体积；采样代表性 | 一种指定水排放的 kg | `jrc-sa-bref-2024` |
| `calc_combustion_emission` | 每种直接燃料排放 | 排放质量 = 一种燃料记录量 × 一个披露的适用因子；直接测量时除外 | 燃料量和性质；因子或测量 | 一种指定空气排放的 kg | `ec-pef-method-2021` |
| `calc_packaging_mass` | 每个包装组件 | 使用质量 = 领用数量 × 实测空单件质量 - 退回未用质量；成组纸箱按所装净产品质量分配 | 领退数量；皮重；所装净肉质量 | 每 kg 产品的一种包装组件 kg | `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明山羊物种、CPC 21116 鲜或冷藏状态、分割/胴体描述、带骨状态、验收规格和出厂温度。 | 产品规格；批次记录；温度日志；分类审查 |
| `dq_lot_traceability` | 屠宰和肉输出 | 保留从验收活山羊群体经胴体、分割肉到出厂产品的期间追溯关系。 | 接收、兽医、屠宰、分割和出厂记录 |
| `dq_mass_completeness` | 质量平衡 | 分别测量主产品和实际产生的每种血、器官、皮、脂肪、骨、判废组织、胃肠内容物、粪便和污泥，并披露未解释残差。 | 校准称重；阶段核对；去向记录 |
| `dq_temporal` | 前景数据 | 使用代表性期间，通常连续 12 个月或完整生产活动，并解释季节性或异常运行。 | 注明日期的生产、仪表、采购、维护和废物记录 |
| `dq_measurement` | 前景交换 | 为每种材料、水、公用工程、输出、废物和排放记录标明仪器、校准、频率、仪表边界和分配计算。 | 校准证书；仪表台账；计算工作底稿 |
| `dq_temperature` | 鲜或冷藏状态 | 保留连续或批次代表性温度与时间记录，证明声明输出未冻结。 | 校准温度记录仪；冷库和出厂记录 |
| `dq_chemical_identity` | 清洗与消毒 | 对每种实际清洗或消毒制剂保留制剂名、供应商、SDS、活性浓度和领用质量。 | SDS；供应商规格；化学品领用记录 |
| `dq_waste_destination` | 每个废物输出 | 保留每种废物的质量、分类和接收处理证据；不得仅凭销售推断回收。 | 转移单；发票；处理声明 |
| `dq_representativeness` | 上游数据集 | 记录活山羊、进厂运输、公用工程、制冷剂、化学品、包装和外部处理的地域、时间和技术匹配。 | 数据集元数据和 PEF 数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考 UUID 必须为 `20b4b0eb-d827-48d9-b744-d54842ba57ef`，解析为归类至 CPC 21116 的公开 state-100 Product 流，并采用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 中的 kg。 | `un-cpc-3-0-21116` |
| `validate_reference_amount` | 参考流 | 输出必须归一化为恰好 1 kg 净合格山羊肉，排除包装和分离输出，并保留实测未归一化质量。 | `ec-pef-method-2021` |
| `validate_scope_state` | 产品识别 | 产品必须为以鲜或冷藏状态出厂的山羊肉；冷冻肉、食用内脏、加工肉和单独回收输出不得计入参考质量。 | `un-cpc-3-0-21116` |
| `validate_actual_route` | 过程清单 | 必须表示接收/屠宰、整理、分割、温控、消毒和包装；实际存在时必须纳入场内燃料燃烧、制冷和废水处理。 | `jrc-sa-bref-2024` |
| `validate_atomic_rows` | 过程清单 | 每卡必须表示一个具体交换；各公用工程、燃料、制冷剂、制剂、包装组件、副产品、废物和基本流排放须分别记录。 | `ec-pef-method-2021` |
| `validate_uuid_evidence` | 带 UUID 的行 | 仅当两个规定查询核对源对身份、Product 类型、适用 CPC 和 Mass 支持一致时存储 Tiangong UUID；否则留空并保留 manifest 审查项。 |  |
| `validate_mass_balance` | 前景过程 | 按阶段核对活重、胴体、肉、每种分离共产品和每种废物；未解释净额或隐藏产率因子不合规。 | `jrc-sa-bref-2024` |
| `validate_temperature` | 产品状态 | 保留校准时间—温度证据，证明出厂状态为鲜或冷藏而非冷冻。 | `un-cpc-3-0-21116`; `jrc-sa-bref-2024` |
| `validate_utility_separation` | 公用工程和燃料 | 电力、蒸汽、热水、天然气、柴油和 LPG 不得汇总；共用记录须披露仪表边界、期间、驱动量、分子和分母。 | `ec-pef-method-2021`; `jrc-sa-bref-2024` |
| `validate_byproduct_separation` | 分离输出 | 每种实际食用或非食用输出须有独立实测行、已声明去向和已披露分配处理。 | `jrc-sa-bref-2024`; `ec-pef-method-2021` |
| `validate_wastewater_emissions` | 场内废水处理 | 分别报告废水体积、污泥和每种监测排放；不得使用集合“废水污染物”交换。 | `jrc-sa-bref-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；方法和数据审查后可用于 `background_dataset` |
| downstream_use | 用于 CPC 21116 山羊肉屠宰场出厂门生产的前景过程和 lifecyclemodel 构建 |
| allowed_use | 与物种、分割/胴体形式、带骨状态、屠宰和分割路线、温控制度、设施地域、期间、废水路线和包装匹配的产品特定鲜或冷藏山羊肉研究 |
| excluded_use | 冷冻肉；食用内脏；加工肉；活山羊生产；不匹配物种或路线；未单独模拟的零售、烹饪或消费主张；没有适用审查方法的比较断言 |
| required_metadata | canonical PCR id；参考 UUID；CPC 引用；物种；来源；产品形式；带骨状态；批次；净肉质量；温度和时间；设施和期间；动物头数和活重；过程路线；分包商；分配；包装；废水路线；共产品和废物去向；source ids |
| required_quality_disclosure | 一手数据覆盖；秤和仪表校准；批次追溯；阶段质量平衡残差；温度证据；公用工程分配；制冷剂核对；化学品身份；废水采样；排放计算；上游数据集代表性；不确定性和验证状态 |
| update_trigger | CPC 范围、参考 UUID、产品状态、物种、分割或带骨状态、屠宰或分割技术、制冷、消毒化学品、设施或供应商地域、废水处理、分配、包装或适用 PEF/BREF 指南发生变化 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-21116` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，代码 21116 “Meat of goat, fresh or chilled”，2025 年 6 月 30 日官方结构文件和仓库保留 raw CSV，https://unstats.un.org/unsd/classifications/Econ/cpc，访问于 2026-08-13 | 精确产品身份和鲜或冷藏边界；从参考类别排除冷冻肉和内脏 |
| `jrc-sa-bref-2024` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或食用共产品行业最佳可行技术参考文件》，JRC135916，doi:10.2760/18199，https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 从动物接收到屠宰、整理、分割和冷却的过程分解；消毒、公用工程、制冷、废水、排放及逐项分离动物输出 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279 合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 产品特定清单、公司特定前景数据、分配层级、完整性、透明度、数据质量和验证 |
