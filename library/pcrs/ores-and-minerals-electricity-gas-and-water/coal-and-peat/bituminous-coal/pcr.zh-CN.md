---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.bituminous-coal
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 烟煤

## 1. 范围与适用性

本 PCR 覆盖未团聚烟煤从井工或露天开采，经物理加工、储存至矿场或选煤厂出厂装载的过程。适用于供热利用或冶金用途的煤，但不纳入其最终燃烧或焦化转化。可销售原煤与洗选煤必须分别声明加工状态，数据集不可互换。CPC 标识煤阶，不构成通用品质规范。[来源：`epa-coal-cleaning-1995`、`ipcc-fugitive-2019`]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.bituminous-coal |
| classification_refs | CPC 3.0: 11012 |
| covered_products | 未团聚烟煤，原煤或物理洗选煤；声明动力煤或冶金煤等级 |
| excluded_products | 无烟煤；次烟煤；褐煤；泥炭；型煤；焦炭；煤焦油；煤气；化学转化煤 |
| representative_product | 声明水分、灰分、硫和热值的出厂散装可销售烟煤 |
| production_route | 井工或露天开采及场址特定物理选煤；披露仅加工外购原料的经营模式 |
| market_state | 矿场或选煤厂出厂散装固体，收到基；不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为材料及燃料原料的烟煤 |
| How much | 1 千克净可销售煤 |
| How well | 声明煤阶、原煤或洗选状态、等级、全水分、灰分、硫、低位热值及检验基准；宣称结焦性能时需提供该性能 |
| How long or cycle | 一次生产及出厂供应事件；具有代表性的声明报告期 |
| reference_flow_link | `saleable_coal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 烟煤 `f10e7264-fc49-491a-a886-f717e3c7a437` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 矿场及煤田；开采方式；原煤或洗选状态；煤等级；水分、灰分及硫检验基准；低位热值及其基准；选煤工艺；储存时间；出厂位置；报告期；甲烷管理；分配方法 |

前景数据包必须附带必需限定信息。以质量作为参考数量；热值为限定信息，不得作为假定的煤质量与能量转换值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_gate_mass 所记录、声明收到基水分下的煤净质量；扣除容器和包装皮重。 |
| energy_unit | mine_electricity; prep_electricity | 能量 | MJ | 保留电表千瓦时读数，采用 1 kWh = 3.6 MJ 换算电能；不得对电力使用燃料热值。 |
| moisture_basis | all inventory rows | 质量 | kg | 分别记录湿基和干基数量；任何换算均使用实测水分，核对产品及矸石带水。不得将干基收率与未经换算的湿基分母混用。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采矿以煤层为起点；外购原料选煤数据集以可追溯原煤接收为起点 |
| starting_condition_role | 明确区分基本资源开采和外部供应产品输入 |
| product_classification_scope | 烟煤煤阶；分别披露原煤、洗选煤和内部燃烧煤量 |
| recursive_input_rule | 外购烟煤采用独立上游数据集及实测接收量。矿场到选煤及煤燃料内部转移仅核对一次，不重复开采。 |
| upstream_dataset_requirement | 供应的电力、柴油、化学品、水及外部处置废物应关联地区适用数据集。仅加工外购原料时必须追加独立原煤产品输入及上游采矿数据集。 |
| disclosure | 开采方式、矿深、煤层、选煤、出厂边界、时间覆盖、外购原料状态、水循环、复垦和基础设施覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | all inventory rows | 纳入采掘、剥离及场内运输、通风排水、适用选煤、堆存装载及相关废物管理。排除下游运输、燃烧、焦化和气化。 | epa-coal-cleaning-1995; ifc-mining-2007 |
| boundary_gases | mine_methane; prep_methane; mine_co2; prep_co2 | 分别记录出厂边界内煤层气、燃烧和采后排放。明确报告气体利用、氧化和火炬燃烧；捕集甲烷不是大气排放，也不自动产生负值抵扣。 | ipcc-fugitive-2019 |
| boundary_completeness | foreground package | 评估土地占用及转变、勘探、基础设施、复垦和关闭后责任；按声明的寿命期产量分配纳入重要贡献，或披露有依据的省略。每项实际材料、污染物及处理产物追加独立原子行；本清单为核心采集模板，不是穷尽场址的物料表。 | ifc-mining-2007; ipcc-fugitive-2019 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mine | 采掘及矿场服务 | required | 一体化采矿数据集；仅加工外购原料的数据集改为保留上游采矿关联 | 前景生产 | 每 1 kg 参考流 |
| preparation | 物理选煤 | conditional | 存在破碎、筛分、洗选、脱水或干燥 | 加工及储存 | 每 1 kg 参考流 |
| gate | 可销售煤出厂核算 | required | 所有数据集 | 参考产出 | 每 1 kg 参考流 |

无选煤工艺时，堆场及出厂操作排放归入采矿行，并依据不存在该过程的记录省略选煤行。采用热干燥机时，在选煤过程中分别追加各燃料、试剂和排放物种（包括 CO、NOx 和 SO2）；煤燃料卡仅适用于燃煤干燥机。

### 过程：采掘及矿场服务（`mine`）

#### 输入

##### 产品流

###### 电力 （`mine_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

计量采掘、通风、排水、输送和废物管理用电；声明电压和供应方。

- 选定流：电力
- 流属性/单位：能量 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_mine_energy 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_energy`
- 来源：`ifc-mining-2007`

###### 柴油 （`mine_diesel`）

计量采矿设备和场内运输消耗的柴油；核对燃料库存，体积记录需注明密度。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_energy 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_energy`
- 来源：`ifc-mining-2007`

###### 工艺用水 （`mine_water`）

计量抑尘和生产使用的外供补充水；排除内部循环水重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_water 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_water`
- 来源：`ifc-mining-2007`

###### 硝酸铵 （`mine_explosive`）

仅在硝酸铵作为爆破材料跨越矿场边界时纳入；记录其实际质量，燃油及其他炸药组分另行记录。

- 选定流：硝酸铵 `4d621a16-cd12-4fc1-9499-21cd8001941f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_materials 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_materials`
- 来源：`ifc-mining-2007`

##### 基本流

###### 地下硬煤资源 （`coal_resource`）

记录扣除矿物废石后的采出煤质量及其水分基准；保留煤层和开采损失记录。

- 选定流：地下硬煤资源
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_mine_mass 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_mass`
- 来源：`ifc-mining-2007`

#### 输出

##### 废物流

###### 煤矿废石 （`mine_rock`）

计量送往排土场或回填的含煤废石；声明矿物组成和去向。存在露天剥离物时另行记录。

- 选定流：煤矸石 `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_waste 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_waste`
- 来源：`ifc-mining-2007`

###### 待处理煤矿矿井水 （`mine_effluent`）

矿井水外送处理时纳入；计量水量及污染物浓度，记录去向和处理覆盖范围。

- 选定流：待处理煤矿矿井水
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_mine_water 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_water`
- 来源：`ifc-mining-2007`

###### 废润滑油 （`mine_oil`）

产生设备维护废油时纳入；单独称量并保留合规处置记录。

- 选定流：废润滑油
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_mine_waste 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_waste`
- 来源：`ifc-mining-2007`

##### 基本流

###### 化石源甲烷 （`mine_methane`）

计量通风和抽采系统排入大气的甲烷；区分放空、捕集、利用和销毁气体。纳入关闭阶段时追加场址特定归属量。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ipcc-fugitive-2019`

###### 化石源二氧化碳 （`mine_co2`）

纳入场内燃料使用、煤层气、氧化和火炬燃烧产生的化石源二氧化碳；记录各来源的计量或计算方法。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ipcc-fugitive-2019`

###### 化石源一氧化碳 （`mine_co`）

存在场内燃烧排放时纳入化石源一氧化碳；采用适用监测或有记录的来源模型量化。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ifc-mining-2007`

###### 氮氧化物，以二氧化氮计 （`mine_nox`）

存在燃烧或爆破排放时纳入氮氧化物；保留二氧化氮当量报告基准，不得替换为一氧化二氮。

- 选定流：氮氧化物，以二氧化氮计
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ifc-mining-2007`

###### 二氧化硫 （`mine_so2`）

存在场内燃烧排放时纳入二氧化硫；采用监测排放或燃料硫记录及有依据的固硫信息。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ifc-mining-2007`

###### 颗粒物，粒径未特指 （`mine_pm`）

计量采掘及运输经控制设施后排放的空气颗粒物总量；声明粒径信息。颗粒物总量不得与重叠粒径分级重复相加。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_mine_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mine_gas`
- 来源：`ifc-mining-2007`

### 过程：物理选煤（`preparation`）

#### 输入

##### 产品流

###### 电力 （`prep_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

计量选煤边界内破碎、筛分、分选、脱水、除尘和堆场用电。

- 选定流：电力
- 流属性/单位：能量 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_preparation_energy 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_energy`
- 来源：`epa-coal-cleaning-1995`

###### 工艺用水 （`prep_water`）

湿法选煤或抑尘运行时纳入补充水；核对回用水及煤和矸石所带水分。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_water 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_water`
- 来源：`epa-coal-cleaning-1995`

###### 磁铁矿粉 （`prep_magnetite`）

仅在采用磁铁矿重介质回路时纳入磁铁矿补充量；计量采购及库存变动，排除内部介质循环。

- 选定流：磁铁矿粉
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_preparation_materials 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_materials`
- 来源：`epa-coal-cleaning-1995`

###### 烟煤 （`dryer_coal`）

采用燃煤干燥机时纳入煤燃料；与可销售产出分开称量。自供煤为内部转移，不重复计入开采量。

- 选定流：烟煤 `f10e7264-fc49-491a-a886-f717e3c7a437`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_mass 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_mass`
- 来源：`epa-coal-cleaning-1995`

#### 输出

##### 废物流

###### 洗煤矸石 （`prep_reject`）

分选运行时纳入矸石；计量湿质量及干质量、残留碳和去向，区分出售共产品和废物。

- 选定流：煤矸石 `a5fa448c-4a0f-4ead-b9b3-8bd843d346b9`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_waste 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_waste`
- 来源：`epa-coal-cleaning-1995`

###### 待处理洗煤废水 （`prep_effluent`）

湿法回路运行且排污水外送时纳入；记录悬浮物、污染物浓度和外部处理。

- 选定流：待处理洗煤废水
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_preparation_water 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_water`
- 来源：`epa-coal-cleaning-1995`

##### 基本流

###### 化石源甲烷 （`prep_methane`）

采集加工和储存至出厂边界期间向大气释放的采后甲烷；不纳入下游运输。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_gas`
- 来源：`ipcc-fugitive-2019`

###### 化石源二氧化碳 （`prep_co2`）

存在热干燥或煤氧化时纳入直接化石源二氧化碳；区分燃烧和煤层气释放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_gas`
- 来源：`ipcc-fugitive-2019`

###### 颗粒物，粒径未特指 （`prep_pm`）

计量破碎、筛分、储存和干燥经控制设施后的颗粒物；保留来源和粒径证据。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_preparation_gas 采集每 1 kg 参考流的归属交换数量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_preparation_gas`
- 来源：`epa-coal-cleaning-1995`

### 过程：可销售煤出厂核算（`gate`）

#### 输出

##### 产品流

###### 烟煤 （`saleable_coal`）

1 千克；采用经校准称量及声明的收到基水分确定可销售煤净质量。

- 选定流：烟煤 `f10e7264-fc49-491a-a886-f717e3c7a437`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_gate_mass`
- 来源：`ifc-mining-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | foreground burdens | 采用独立计量和记录将可分离作业归属各煤等级及外售气体。在 cp_allocation 中记录分配系数、数量和依据。不假定替代产品抵扣。 |  |
| allocation_joint | joint coal outputs | 对不可分离的煤等级产出，先论证分配的物理关系；负荷随含能煤生产变化时，采用各等级实测质量及热值计算低位热值能量分配。不适用时披露另一有依据的基准及敏感性。不得仅因废物含碳就向其分配。 |  |
| allocation_gas | mine_methane; mine_co2 | 区分甲烷捕集、内部使用、外售和排放。共用过程负荷及明确分配与排放核算分别保留；不得从已经计量的净排放再次扣除捕集量。 | ipcc-fugitive-2019 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mine_energy | mine | energy | 计量及库存记录 | 电表读数；电量千瓦时；柴油千克；油罐液位；密度；电压 | 读取仪表并核对燃料接收、期初期末库存及设备日志；以 MJ 报告电力。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | MJ; kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_mine_water | mine | water | 水平衡 | 补充水质量；循环水质量；排水；排污；水分；溶解及悬浮污染物 | 分别计量供水及排污；记录体积质量换算密度并采样分析废水化学组成。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_mine_materials | mine | materials | 材料库存记录 | 化学品身份；纯度；采购；库存；硝酸铵；磁铁矿回收 | 逐一核对化学品接收及库存；分开各配方组分及内部回收。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_mine_mass | mine | mass | 称量及化验 | 煤净质量；皮重；水分；灰分；等级；燃料或资源角色 | 经校准汽车衡或皮带秤及代表性煤样；核对产出、内部燃料和库存。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_mine_waste | mine | waste | 废物追踪 | 废物类型；湿质量；干质量；去向；残煤；处理；再利用 | 分别称量废石、矸石及废油流；保留转移联单及组成分析。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_mine_gas | mine | gas | 排放监测 | 来源；气体流量；浓度；温度；压力；水分；持续时间；捕集；火炬；粒径；模型因子 | 采用经校准出口流量及浓度监测，或有记录的场址特定模型；按物种及来源分别积分控制后的排放，不重复扣除捕集。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_energy | preparation | energy | 计量及库存记录 | 电表读数；电量千瓦时；柴油千克；油罐液位；密度；电压 | 读取仪表并核对燃料接收、期初期末库存及设备日志；以 MJ 报告电力。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | MJ; kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_water | preparation | water | 水平衡 | 补充水质量；循环水质量；排水；排污；水分；溶解及悬浮污染物 | 分别计量供水及排污；记录体积质量换算密度并采样分析废水化学组成。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_materials | preparation | materials | 材料库存记录 | 化学品身份；纯度；采购；库存；硝酸铵；磁铁矿回收 | 逐一核对化学品接收及库存；分开各配方组分及内部回收。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_mass | preparation | mass | 称量及化验 | 煤净质量；皮重；水分；灰分；等级；燃料或资源角色 | 经校准汽车衡或皮带秤及代表性煤样；核对产出、内部燃料和库存。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_waste | preparation | waste | 废物追踪 | 废物类型；湿质量；干质量；去向；残煤；处理；再利用 | 分别称量废石、矸石及废油流；保留转移联单及组成分析。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_preparation_gas | preparation | gas | 排放监测 | 来源；气体流量；浓度；温度；压力；水分；持续时间；捕集；火炬；粒径；模型因子 | 采用经校准出口流量及浓度监测，或有记录的场址特定模型；按物种及来源分别积分控制后的排放，不重复扣除捕集。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_gate_mass | gate | mass | 称量及化验 | 煤净质量；皮重；水分；灰分；等级；燃料或资源角色 | 经校准汽车衡或皮带秤及代表性煤样；核对产出、内部燃料和库存。 同期每项总量除以 cp_gate_mass 的可销售煤净千克数。 | kg | 连续或每批；每月核对 | 声明具有代表性的十二个月期间，或有依据的更短生产周期 | 同一矿场、选煤及出厂边界 | 每 1 kg 参考流 | 校准、原始记录、化验、覆盖及不确定性 |
| cp_allocation | gate | 联合产出 | 分配台账 | 等级质量；低位热值；气体外售；独立计量；共用成本；分配份额 | 记录细分及有依据的联合产出基准；检验替代基准敏感性 | kg; MJ | 报告期 | 同一报告期 | 整个前景边界 | 联合分配负荷的份额之和为一；最终结果为每 1 kg 参考流 | 产品化验、分配依据及敏感性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 以同一报告期归属交换的声明单位数量除以参考煤净可销售质量千克数。一体化数据包中的内部转移相互抵消；参考产出为 1 千克。 | 实测交换；cp_gate_mass；cp_allocation | 每 1 kg 参考流数量 |  |
| methane_accounting | mine_methane; prep_methane | 按声明温度、压力、水分及质量换算，积分各来源流量和甲烷浓度。区分实测净排放和依据回收记录调整的总量估计；另计燃烧产物。 | 监测；捕集、利用及火炬记录 | 向空气排放的化石源甲烷质量 | ipcc-fugitive-2019 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_coal | saleable_coal | 验证煤阶、品质及出厂净质量；逐项声明水分和热值基准。 | 称量及代表性煤样化验 |
| quality_coverage | 所有清单行 | 区分正值、零值及缺失记录。量化不确定性、监测缺口及估算方法。缺少 UUID 或文献范围不意味着零交换。 | 采集协议及不确定性台账 |
| quality_water | mine_water; prep_water; mine_effluent; prep_effluent | 核对新水供应、矿井排水、回用、排放及产出带水；模拟场内处理时按污染物报告排放负荷。 | ifc-mining-2007 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | saleable_coal | 要求全部参考限定信息，及声明水分下恰为 1 千克净参考产出。核对中英文清单身份及分母一致性。 |  |
| validate_balance | 所有清单行 | 在同一期间核对煤、水、能量及废物记录。依据已记录的测量不确定性调查平衡残差，不虚构通用容差。 | ifc-mining-2007 |
| validate_emissions | mine_methane; prep_methane; mine_co2; prep_co2 | 拒绝对气体捕集、内部燃料或上游电力排放重复计数。验证大气环境区室及化石来源；不得用另一化学物替代缺失物种 UUID。 | ipcc-fugitive-2019 |
| validate_extensions | foreground package | 核查各适用场址交换、废物处理及土地贡献已纳入或明确论证；随数据集披露未解决的身份及范围缺口。 | ifc-mining-2007 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明矿场出厂烟煤在材料及能源供应链中的供应 |
| excluded_use | 其他煤阶；焦炭或电力生产；下游燃烧；无工艺证据的通用采矿平均值 |
| required_metadata | 参考限定信息、期间、地区、出厂边界、上游关联、单位换算、分配及完整性 |
| required_quality_disclosure | 测量不确定性、估算、省略过程、未解决身份及范围证据、基础设施及关闭假设 |
| update_trigger | 煤层、工艺、水分及等级、甲烷管理、能源供应、分配变化或新增验证测量 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| epa-coal-cleaning-1995 | official_guidance | US EPA. 11.10 Coal Cleaning. AP-42, November 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c11s10.pdf 检索日期 2026-09-30 | 物理选煤、粉尘及干燥机来源采集；第 11.10-1 至 11.10-3 页；不采用因子 |
| ipcc-fugitive-2019 | official_guidance | IPCC. 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories. Volume 2, Chapter 4: Fugitive Emissions. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/2_Volume2/19R_V2_4_Ch04_Fugitive_Emissions.pdf 检索日期 2026-09-30 | 煤层气、采后排放、回收及监测；第 4.1.1–4.1.3 节；不采用默认因子 |
| ifc-mining-2007 | official_guidance | World Bank Group. Environmental, Health, and Safety Guidelines for Mining. 10 December 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf 检索日期 2026-10-01 | 水平衡、废石、尾矿、大气及寿命期范围；第 2–6、12 页；不采用数值限值 |
