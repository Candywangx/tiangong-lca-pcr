---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclass-42310
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类42310所列货物的零件

## 1. 范围与适用性

本 PCR 适用于可识别为专用于或主要用于核反应堆的实体成品零件，包括以验收合格组件状态交付的堆内构件和承压边界零件。其从摇篮到工厂大门的前景制造边界始于合格材料或合格预制坯件的接收，涵盖成形、机加工、适用的热加工、清洗、检验、试验、验收和制造商厂门放行。

本类别不包括完整核反应堆；未辐照和乏燃料元件；未辐照燃料元件的零件；同位素分离设备；蒸汽发生器及锅炉辅助设备；无法证明专用于核反应堆用途的通用紧固件、阀门、泵、仪表或结构制品；反应堆场址安装；运行、维护和退役。CPC 3.0 将子类 42310 识别为核反应堆，将子类 42341 识别为这些货物的零件。中文产品名称按 CPC 英文标题直译为“子类42310所列货物的零件”，普通技术表述采用“核反应堆零件”，与 HS 8401 对应品目中的中国官方税则术语一致。

代表性路线是以合格低合金钢锻件制造验收合格的核反应堆零件。采用其他涵盖材料或制造路线的数据集，应以物料清单中的每个实际材料流分别作为原子交换，替换代表性材料投入，并声明全部路线特定工序；不得把不同材料、燃料、化学品、废物或排放合并成集合标签。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclass-42310 |
| classification_refs | CPC 3.0：42341，子类42310所列货物的零件（语义关系为 exact；映射接受状态另行维护） |
| covered_products | 具有明确反应堆用途、组件标识、材料规范、制造路线和验收状态的核反应堆成品零件 |
| excluded_products | 完整反应堆；核燃料元件及其零件；同位素分离设备；锅炉或蒸汽发生器零件；非专用通用货物；场址安装、使用、维护和报废服务 |
| representative_product | 由合格锻件制造的验收合格低合金钢核反应堆零件 |
| production_route | 合格锻件接收；材料核验；成形与机加工；有条件的热切割或热处理；有条件的碱洗；无损检测、尺寸检验、验收与放行 |
| market_state | 制造商厂门处已完成清洁、检验、验收并具备文件的成品零件，不含运输包装和安装工装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 履行已声明结构、承压边界、支承、定位或堆内功能的核反应堆成品零件 |
| How much | 1 kg 验收合格成品零件净质量 |
| How well | 符合已声明图纸版本、材料规范、安全等级、尺寸及其他关键特性的验收准则，并具有完整制造和检验可追溯性 |
| How long or cycle | 一个完整制造与验收周期；服役寿命和反应堆运行不在本从摇篮到工厂大门参考范围内 |
| reference_flow_link | 将 `final_reactor_part` 报告的验收合格产品净质量归一化为恰好 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 核反应堆成品零件（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件标识和图纸版本；反应堆类型和预期用途；安全等级或声明的非安全级；材料牌号和锻件规范；制造路线和特殊过程状态；验收准则和放行状态；净质量基准；制造场址、地域和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用最终清洗和检验后的验收合格零件净质量。参考数量不得包含运输包装、临时工装、试验介质和不合格零件。 |
| `electricity_energy_conversion` | 全部电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始读数和供电背景。按精确恒等式 1 kWh = 3.6 MJ 转换，并披露转换过程。 |
| `gas_reference_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | 记录计量体积，并声明压力、温度和干湿基准。不得比较或合并参考条件不一致的体积。 |
| `water_mass_conversion` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先测量质量。若仅计量体积，应保留体积记录，并记录用于计算质量的密度和参考条件。 |
| `material_balance_basis` | 锻件、验收合格产品和机加工废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 接收锻件、验收合格产品和低合金钢机加工切屑采用同一经校准的质量基准和报告期；记录其他留存、厂内回用或处置的固体材料。 |

## 5. 系统边界

前景边界始于合格低合金钢锻件在组件制造商厂门处通过接收验收，终止于核反应堆成品零件通过已声明的检验和验收计划并在同一制造商厂门处放行。锻件、外购能源、气体、水和化学品的上游生产由所链接的背景数据集表示。前景范围包括场内成形、机加工、适用的热加工、清洗、直接排放、废物产生、无损检测、要求时的水压试验、最终验收，以及按物理因果关系归属于该零件的公用工程份额。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 附带材料身份、炉批或批次追溯、规范、质量和验收证据的合格低合金钢锻件 |
| starting_condition_role | 外购产品投入及从摇篮到工厂大门前景边界的起点 |
| product_classification_scope | 专用于或主要用于核反应堆的实体成品零件；经审查的精确分类参考为 CPC 3.0 42341 |
| recursive_input_rule | 同一语义类别的外购核反应堆子零件只作为一个单独产品投入记录，并链接其自身上游数据集；不在本前景数据包内递归重建其制造过程 |
| upstream_dataset_requirement | 每个外购材料、电力、气体、水和化学品流都应链接地域、技术和时间具有代表性且产品状态和单位相匹配的上游数据集 |
| disclosure | 声明零件标识、材料和安全等级、纳入及排除的单元操作、外包工序、分配选择、直接排放基准、废物去向，以及是否有同类别子零件进入边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从合格预制坯件接收到验收合格成品零件放行的制造与验收；排除反应堆场址安装、反应堆运行、维护和退役。 | `un-cpc-3-0-structure-2025`; `iaea-tecdoc-2034`; `iaea-pub2068` |
| `boundary_special_processes` | 实施时的成形、机加工、焊接、塑性成形、覆层、热处理、表面处理和无损检测 | 声明每个适用特殊过程、实施场址或供应商、资格状态和验收证据。仅当对所选零件和路线给出明确的不适用理由时方可省略。 | `iaea-tecdoc-2034`; `iaea-pub2068` |
| `boundary_company_specific` | 物料清单和前景制造 | 对范围内产品和制造过程采集公司特定的物料清单、能源、耗材、废物和直接排放数据。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_shaping` | 材料核验、成形与机加工 | required | 代表性低合金钢锻件路线始终纳入 | 前景材料转化 | 每 1 kg 验收合格成品零件 |
| `thermal_operations` | 热切割与场内热处理 | conditional | 前景边界内实施热切割或消耗燃料/电力的热处理时纳入 | 前景特殊过程 | 每 1 kg 验收合格成品零件 |
| `alkaline_cleaning` | 氢氧化钠碱洗 | conditional | 前景边界内使用氢氧化钠水溶液清洗槽时纳入 | 前景表面处理 | 每 1 kg 验收合格成品零件 |
| `inspection_acceptance` | 无损检测、水压试验、最终检验与放行 | required | 始终纳入；已声明验收计划不要求的操作标记为不适用 | 前景质量控制和参考产品放行 | 每 1 kg 验收合格成品零件 |

### 过程：材料核验、成形与机加工（`material_shaping`）

#### 输入

##### 产品流

###### 合格低合金钢锻件（`low_alloy_steel_forging`）

记录代表性路线中跨越厂门边界的合格低合金钢锻件。保留材料牌号、炉批或批次、锻造交付状态、证书、接收质量和验收结果。

- 选定流：低合金钢锻件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：为已声明验收合格零件产出所消耗的合格锻件验收质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

###### 成形与机加工用电力（`shaping_electricity`）

记录本过程中材料核验设备、成形、切削、机加工、磨削和切屑处理所计量或按物理关系分配的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：本过程实测电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-pef-2021-2279`

###### 成形与机加工用工艺用水（`shaping_process_water`）

记录本过程中用于机加工、磨削、冲洗或泄漏控制并跨越边界的工艺用水。未跨越过程边界的闭路循环水不计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入本过程的补充水和直流水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 低合金钢机加工切屑（`low_alloy_machining_scrap`）

记录离开本过程并送往回收、处理或处置的分离低合金钢切屑和车屑。不得与不锈钢、有色金属、磨削污泥或混合车间废物合并。

- 选定流：低合金钢废料, 机加工切屑 `826431d5-0492-4345-9051-8342d1f6c4d5`
- 流属性/单位：Mass / kg
- 数量规则：离开本过程的低合金钢机加工切屑实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 成形过程直接颗粒物排放（`shaping_particulate_to_air`）

记录经过已安装捕集或控制设备后直接排入空气的颗粒物实测量。不得计入已包含在上游电力或材料数据集中的颗粒物排放。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：成形与机加工直接排入未特指空气的实测或排污许可清单颗粒物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

### 过程：热切割与场内热处理（`thermal_operations`）

#### 输入

##### 产品流

###### 热加工用电力（`thermal_electricity`）

纳入本条件过程时，记录热切割、电阻加热、炉体辅助设备、控制系统和物料搬运所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入热加工工序的实测电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`iaea-tecdoc-2034`; `eu-pef-2021-2279`

###### 场内加热用气态天然气（`thermal_natural_gas`）

记录进入场内炉窑或燃烧器并用于纳入热加工工序的气态天然气。声明组成、供应地域和体积参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：输送至纳入炉窑或燃烧器的气态天然气实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_gas`
- 来源：`iaea-pub2068`; `eu-pef-2021-2279`

###### 热切割用工业氧气（`cutting_oxygen`）

采用氧燃料切割路线时，记录供应至该工序的工业氧气。纯度、压力、供应方式和参考条件为前景限定信息。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：热切割所消耗的计量或供应商发票工业氧气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gas`
- 来源：`iaea-pub2068`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 场内天然气产生的直接化石二氧化碳（`thermal_fossil_co2`）

仅记录本过程中场内天然气燃烧直接释放的化石二氧化碳。电力和燃料供应的上游排放保留在所链接背景数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：纳入场内燃烧器直接化石二氧化碳的实测量或场址排放清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021-2279`

### 过程：氢氧化钠碱洗（`alkaline_cleaning`）

#### 输入

##### 产品流

###### 碱洗用电力（`cleaning_electricity`）

纳入本条件清洗过程时，记录清洗槽加热、循环、过滤、通风和物料搬运所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：碱洗过程实测电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-pef-2021-2279`

###### 碱洗用工艺用水（`cleaning_process_water`）

记录用于配制氢氧化钠清洗槽液和相关冲洗的工艺用水。未跨越边界的厂内循环水不重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入纳入碱洗过程的补充水和冲洗水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`eu-pef-2021-2279`

###### 碱洗用氢氧化钠（`cleaning_sodium_hydroxide`）

记录加入清洗槽的氢氧化钠产品质量。声明产品状态和溶液浓度；氢氧化钠质量与溶液总质量分别报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：供应商发票或批记录中加入清洗槽的氢氧化钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemical`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废碱洗液（`waste_alkaline_liquor`）

氢氧化钠清洗槽液离开本过程送往处理或处置时，记录该废液。保留 pH、氢氧化钠来源、主要污染物、危险废物分类和去向等前景限定信息。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：离开纳入清洗过程的废碱液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-pef-2021-2279`

##### 基本流

### 过程：无损检测、水压试验、最终检验与放行（`inspection_acceptance`）

#### 输入

##### 产品流

###### 检验与验收用电力（`acceptance_electricity`）

记录前景边界内无损检测、尺寸检验、水压试验设备、控制系统和最终验收活动所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：检验与验收实测电力或按物理关系分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

###### 水压试验用工艺用水（`hydrotest_process_water`）

已声明验收计划要求水压试验时，记录加入试验系统的工艺用水。未跨越边界的回用水不重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入水压试验系统的补充水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格核反应堆成品零件（`final_reactor_part`）

仅当零件的已声明关键特性、检验状态和制造记录满足验收计划后，才记录其放行产品质量。不合格或未放行零件不得计为参考产品。

- 选定流：核反应堆成品零件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：将采集的验收合格产品净质量归一化后恰好为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格核反应堆成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_accepted_output`
- 来源：`un-cpc-3-0-structure-2025`; `iaea-tecdoc-2034`; `iaea-pub2068`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享或多功能制造过程 | 优先通过过程或计量表拆分避免分配，使投入、废物和直接排放归属于引发它们的零件和单元操作。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 公用电力、气体、水、耗材、废物处理和排放 | 无法拆分时，采用有文件记录的因果物理驱动量，例如机器时间、计量能源、处理质量或清洗槽装载量。仅在证明无法采用拆分和物理关系并披露理由后，方可采用经济分配。 | `eu-pef-2021-2279` |
| `allocation_scrap_separate_output` | 低合金钢机加工切屑和其他回收材料 | 将实际废料作为厂门处单独废物输出记录。不得在前景负荷中无说明地扣除其质量、销售收入或原生材料避免负荷；任何回收分配应由已声明的下游 LCA 方法处理。 | `eu-pef-2021-2279` |
| `allocation_rework_and_rejects` | 返工、不合格零件和破坏性试样 | 将实测返工和不合格负荷分配给同一报告期的验收合格产出，除非证明存在物理独立的产品系统。异常事件生产批次如排除，应另行披露。 | `eu-pef-2021-2279`; `iaea-tecdoc-2034` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `material_shaping` | 合格锻件投入 | 接收记录、物料清单和材料证书 | part_id; drawing_revision; heat_or_lot; material_grade; product_state; received_mass_kg; accepted_mass_kg; certificate_id | 将接收称量、物料清单发料和证书追溯与验收合格零件批次核对 | kg | 每次接收及每个生产批次 | 完整的已声明参考期 | 为前景零件供货的全部场址 | 汇总消耗的验收合格锻件质量；仅扣除有文件记录并以未使用状态离开的退料 | 经校准称量记录；证书；材料验收和追溯记录 |
| `cp_electricity` | 全部纳入过程 | 过程电力 | 结算电表、分表或设备能耗记录 | meter_id; process_id; start_reading; end_reading; unit; allocation_driver; accepted_output_kg | 优先采用过程分表；否则用有文件记录的因果物理驱动量分配共用电表 | kWh 和 MJ | 每批或每月 | 至少连续 12 个有代表性的月份；一次性制造采用完整生产周期 | 全部前景制造和验收场址 | 按过程汇总，转换为 MJ 后归一化 | 电表校准；账单；分配工作表；停机和异常记录 |
| `cp_water` | `material_shaping`; `alkaline_cleaning`; `inspection_acceptance` | 工艺用水投入 | 水表、储罐或批记录 | source; process_id; volume_or_mass; unit; density; reference_conditions; reuse_volume; discharge_destination | 计量跨越边界的补充水和直流水；厂内循环水不重复计入 | kg；适用时保留原始 m3 | 每批或每月 | 与验收合格产出相同期间 | 全部使用水的前景场址 | 按过程汇总净边界投入并归一化 | 水表校准；批记录；密度或换算记录；水平衡 |
| `cp_fuel_gas` | `thermal_operations` | 天然气投入 | 燃气表或供应商发票 | meter_id; volume_m3; pressure; temperature; dry_wet_basis; composition; process_share | 计量纳入燃烧器的燃气，或用物理驱动量分配共用燃气表 | m3 | 每批或每月 | 与验收合格产出相同期间 | 纳入前景的炉窑和燃烧器 | 在统一声明参考条件下汇总并归一化 | 经校准燃气表；发票核对；分配工作表 |
| `cp_process_gas` | `thermal_operations` | 工业氧气投入 | 钢瓶、储罐或流量计记录 | supplier; purity; delivery_mode; volume_m3; pressure; temperature; process_id | 核对供应商交付和库存变化，或采用经校准的过程流量计 | m3 | 每批或每个交付期 | 与验收合格产出相同期间 | 纳入的热切割工序 | 交付量加期初库存减期末库存，分配至过程并归一化 | 发票；库存记录；流量计校准；参考条件记录 |
| `cp_process_chemical` | `alkaline_cleaning` | 氢氧化钠投入 | 批配方和采购记录 | product_state; concentration; solution_mass_kg; sodium_hydroxide_mass_kg; bath_id; additions; carryover | 根据经核实的产品浓度和批次加入量计算纯氢氧化钠产品质量 | kg | 每个清洗槽及每批 | 与验收合格产出相同期间 | 纳入的碱洗线 | 汇总氢氧化钠质量而非溶液总质量，并归一化 | 安全数据表；证书；经校准秤；批记录；浓度核验 |
| `cp_waste` | `material_shaping`; `alkaline_cleaning` | 分离机加工切屑或废碱液 | 地磅、容器秤和废物转移联单 | row_id; waste_identity; mass_kg; container_tare; date; destination; hazardous_classification; pH_or_contaminants | 每个分离废物流外运前称量并扣除容器皮重 | kg | 每个容器或每次发运 | 与验收合格产出相同期间 | 全部前景废物收集点 | 按原子废物身份和去向汇总并归一化 | 经校准秤；废物联单；组成或 pH 证据；接收凭证 |
| `cp_direct_emissions` | `material_shaping`; `thermal_operations` | 直接颗粒物或化石二氧化碳 | 烟道测试、连续监测或受监管场址排放清单 | flow_identity; source_id; concentration; flow_rate; operating_time; measured_mass_kg; control_status; method | 可用时采用源特定测量；否则采用场址有文件记录的排放清单，不导入上游排放 | kg | 每次监测并按期汇总 | 与验收合格产出相同期间且运行条件具有代表性 | 全部前景直接排放点 | 按基本流身份和排放源汇总后归一化 | 方法报告；校准；运行日志；控制设备状态；排放清单核对 |
| `cp_accepted_output` | `inspection_acceptance` | 验收合格成品零件 | 生产放行和检验档案 | part_id; drawing_revision; material_heat_or_lot; safety_class; acceptance_plan; inspection_results; release_status; net_mass_kg; release_date | 称量验收合格清洁零件，并将身份与已放行制造档案核对 | kg | 每个放行零件或批次 | 完整的已声明参考期 | 全部前景放行点 | 仅汇总验收合格且已放行的净质量，并作为归一化分母 | 经校准秤；材料追溯；检验与试验记录；签署放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期该行数量 / 报告期验收合格产品净质量 | 原子流数量；`cp_accepted_output` 的验收合格产品净质量 | 每 1 kg 验收合格成品零件的数量 | `eu-pef-2021-2279` |
| `calc_electricity_mj` | 电力行 | electricity_MJ = metered_kWh × 3.6 | 实测或分配的 kWh | 参考流归一化前的 MJ 电力 |  |
| `calc_material_reconciliation` | 锻件、验收合格产品和固体材料输出 | 接收锻件质量 = 验收合格产品质量 + 分离机加工切屑质量 + 其他明确记录的固体去向 ± 经核实的库存变化 | `cp_material_bom`; `cp_waste`; `cp_accepted_output` | 经核对的物料平衡及未解释差异 | `eu-pef-2021-2279` |
| `calc_shared_resource_allocation` | 共用计量表和共享处理 | 仅以因果物理驱动量分配实测共用总量，并保证各产品合计守恒 | 共用计量总量；各产品机器时间、计量能源、处理质量或清洗槽装载量 | 产品特定分配量和披露的驱动量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 在全部记录中保存零件标识、图纸版本、反应堆用途、安全等级、材料炉批或批次以及验收放行状态。 | 制造档案和签署放行记录；`iaea-tecdoc-2034`; `iaea-pub2068` |
| `dq_special_process_traceability` | 全部特殊过程 | 保留每个适用特殊过程的人员和设备资格、程序版本、过程参数、停工待检点或见证点、检验结果和验收准则。 | 合格程序及人员记录；检验与试验计划；`iaea-tecdoc-2034` |
| `dq_measurement` | 仪表、秤和分析测量 | 在有效校准期内使用经校准设备，并保留原始读数、单位、转换、不确定度或分辨率和异常处置。 | 校准证书、原始日志和 QA 审查 |
| `dq_temporal` | 前景清单 | 至少覆盖连续 12 个有代表性的月份；一次性或长周期零件应覆盖完整制造周期并披露其代表性理由。 | 生产日历、计量期间和生产周期记录 |
| `dq_completeness` | 全部纳入过程 | 核对物料清单、能源、水、耗材、废物、直接排放和验收合格产出。不得把流隐藏在集合行中；省略适用操作或流时应给出明确缺口说明。 | 物料和能源核对、排放源清单审查及缺口记录；`eu-pef-2021-2279` |
| `dq_geography_technology` | 上游链接和共享服务 | 匹配供应地域、产品状态、参考条件、技术和时间期间，并披露每个代理和分配驱动量。 | 供应商记录、数据集元数据和分配工作表 |
| `dq_range_status` | 全部 16 个清单行 | 因未建立边界、功能单位和产品状态兼容的两个独立原始文本来源，本 PCR 不规定外部典型范围或 QA 范围。前景采集为强制要求，证据需求保留在 manifest 未解决项中。 | manifest `review_metadata.unresolved.range_evidence_needs` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | 产品和数据集元数据 | 确认输出是专用于或主要用于核反应堆的实体零件，而非排除的燃料元件、锅炉零件、通用货物或服务。 | `un-cpc-3-0-structure-2025`; `china-tariff-2026-nuclear-reactor-parts` |
| `validate_reference_flow` | 参考数量 | 确认验收合格清洁产品净质量为正，且每行均归一化至恰好 1 kg 验收合格成品零件；包装、工装、试验介质和不合格件不计入参考产出。 | `eu-pef-2021-2279`; `iaea-tecdoc-2034` |
| `validate_uuid_property_unit` | 每个带 UUID 的清单行 | 确认所选 Tiangong UUID、流类型、流属性和单位组与原子交换相符，体积行声明参考条件。UUID 为空的行保持为明确未解决发现，不得用代理匹配替代。 |  |
| `validate_process_route` | 过程图和清单 | 确认必需过程存在、条件过程与声明路线一致，并且每个适用特殊过程均有资格、参数、检验和验收证据。 | `iaea-tecdoc-2034`; `iaea-pub2068` |
| `validate_inventory_completeness` | 前景清单 | 确认每种材料、电力、气体、水、化学品、废物和直接排放均由原子行表示或明确记录为不适用；核对物料和共享资源总量。 | `eu-pef-2021-2279` |
| `validate_allocation` | 多功能和共享操作 | 确认首先尝试拆分，每项剩余分配使用因果物理驱动量，总量守恒，任何经济关系均另行说明理由。 | `eu-pef-2021-2279` |
| `validate_quality_release` | 最终产品 | 将零件计为参考产品前，确认关键特性、检验状态、制造可追溯性和放行证据完整。 | `iaea-tecdoc-2034`; `iaea-pub2068` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 `secondary_dataset` 或 `background_dataset` 的产品特定从摇篮到工厂大门前景数据集 |
| downstream_use | 需要制造商厂门处验收合格核反应堆零件的核反应堆建设和设备模型 |
| allowed_use | 与已声明零件功能、材料牌号和状态、制造路线、安全等级、地域、参考期及厂门边界相匹配的产品系统 |
| excluded_use | 完整反应堆制造；燃料元件；锅炉或蒸汽发生器零件；场址安装；反应堆运行、维护或退役；未经协调而比较不同安全等级或制造路线 |
| required_metadata | PCR id 和版本；零件标识和图纸版本；反应堆用途；安全等级；材料牌号、炉批或批次及锻造状态；制造和外包过程路线；验收计划和放行状态；场址和地域；参考期；分配和截断决定；上游数据集身份 |
| required_quality_disclosure | 前景记录覆盖和校准；物料与能源核对；特殊过程和验收追溯；直接排放方法；废物去向；代理和分配选择；未解决 UUID 和范围证据需求 |
| update_trigger | 图纸、材料规范、安全等级、供应商、制造路线、场址、分配方法、上游技术、验收计划或代表期变化；任一未解决流 UUID 得到确认；或获得兼容的独立范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，经哈希核验的 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 42310 上位类别“核反应堆”的官方身份及 CPC 42341 英文分类标题 |
| `china-tariff-2026-nuclear-reactor-parts` | 官方指南（`official_guidance`） | 中华人民共和国财政部，2026 年税则表：https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf（检索日期：2026-09-05） | 对应 HS 8401 品目中“核反应堆”“堆内构件”“其他核反应堆零件”的专业中文术语 |
| `iaea-tecdoc-2034` | 官方指南（`official_guidance`） | 国际原子能机构，*Suitability Evaluation of Commercial Grade Products for Use in Nuclear Power Plant Safety Systems*，IAEA-TECDOC-2034，2023，ISBN 978-92-0-153323-4：https://www-pub.iaea.org/MTCD/Publications/PDF/TE-2034web.pdf（检索日期：2026-09-05） | 关键特性、可追溯性、特殊过程分解、检验、验收和制造质量记录 |
| `iaea-pub2068` | 官方指南（`official_guidance`） | 国际原子能机构，*Project Management in the Construction of Research Reactors*，IAEA Nuclear Energy Series No. NG-T-5.12，2024：https://www-pub.iaea.org/MTCD/publications/PDF/p15232-PUB2068_web.pdf（检索日期：2026-09-05） | 材料证书、制造投入、分阶段检验、有文件记录的验收和制造记录 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会，2021 年 12 月 15 日 Commission Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint Method：https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索日期：2026-09-05） | 公司特定物料清单与制造清单、数据采集、分配层级、数据质量和披露 |
