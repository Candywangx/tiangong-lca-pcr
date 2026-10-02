---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.lignite
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 褐煤

## 1. 范围与适用性

本 PCR 规定天然褐煤从开采到出矿交付的前景生产。覆盖未压块产品，包含出矿前实际进行的常规粒度处理和物理分选。排除次烟煤、硬煤、泥炭、人造褐煤压块、焦炭、焦油、化学转化及用户燃烧。质量参考用于供应清单，不代表各品级提供相同热量。CPC 将褐煤与相邻褐煤类产品区分（`unsd-cpc-2025`）。采矿环境事项须按场址评估（`ifc-mining-2007`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.lignite |
| classification_refs | CPC 3.0: 11032 — 褐煤 |
| covered_products | 收到基出矿未压块褐煤 |
| excluded_products | 次烟煤；硬煤；泥炭；褐煤压块；焦炭；焦油；燃烧服务 |
| representative_product | 声明水分与发热量的散装原褐煤 |
| production_route | 露天或地下开采、矿区环境管理及出矿处理；声明实际路线 |
| market_state | 出矿口净散装未压块产品；注明粒度及选煤处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在出矿口供应未压块褐煤 |
| How much | 1 千克净产品，收到基 |
| How well | 实测全水分、同一水分基准的低位发热量、灰分及硫；声明粒度及煤阶 |
| How long or cycle | 一个声明的生产报告期；纳入出矿前堆存时间 |
| reference_flow_link | `lignite_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 褐煤 `db766ffc-c44d-4ecf-b906-98d90565dc01` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 矿区及国家；报告期；开采路线；煤阶；水分及取样方法；发热量测定方法及基准；灰分；硫；粒度；调质处理；出矿位置；堆存时长；废物与水去向；土地恢复计划 |

必需限定信息须在数据集元数据、过程说明或等效产品字段中声明；缺失信息使参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 采用 cp_output 的出矿净质量；所有清单行均以每 1 kg 参考流为基准，保留收到基水分。 |
| `energy_units` | mine_electricity; gate_electricity | 低位热值 | MJ | 计量的 kWh 按 1 kWh = 3.6 MJ 转为 MJ；电力为能量输入，不是产品热含量。 |
| `water_units` | mine_supplied_water; mine_groundwater; mine_discharge_water | 按各行规定采用质量或体积 | kg; m3 | 质量与体积分别记录，仅凭有记录的密度和温度转换；疏干抽水不等同于耗水。 |
| `quality_basis` | lignite_gate | 质量及发热量 | kg; MJ/kg | 记录收到基水分分数 w 及出矿发热量；干质量为湿质量乘以 (1-w)。不得暗中替换湿质量参考，或将干基发热量与湿质量混用。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 开采前地下天然褐煤煤层；与矿床相关的矿区开发 |
| starting_condition_role | 天然资源起点，不是无负担的外购产品 |
| product_classification_scope | 未压块褐煤；排除相邻煤阶及人造燃料类别 |
| recursive_input_rule | 外购或调入褐煤作为单独计量的产品输入，并连接供应数据集；不得再次计入其先前资源开采，也不得使模型自循环。 |
| upstream_dataset_requirement | 为燃料、电力、供水、炸药、润滑油及处理连接相容的上游数据集，披露地域、时段和技术。 |
| disclosure | 声明前景出矿边界、供应边界、矿山寿命、开发与复垦归属、水量平衡及排除项。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_mine | foreground | 纳入归属于开采的开发、剥离、采掘、内部运输、疏干、环境治理、实际调质、堆存、装载及归属的关闭复垦。重要资本设备及处理活动单独建模；排除须说明依据。 | `ifc-mining-2007` |
| boundary_gate | downstream | 边界止于出矿交付；排除场外用户运输及使用期燃烧。自用矿须将采矿生产与电厂或转化设施分开。 |  |
| boundary_completeness | inventory | 各卡定义最小原子清单，不是场址完整用料表。存在时须另列煤矸石、每种水处理药剂、污泥、各实测水污染物、其他燃料、设备及土地原用途和恢复用途交换。凭记录识别所有实际路线并披露排除项；不得用总括行代替。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mine_operations | 开采与矿区环境管理 | required | 所有矿区；具体行按实际交换有条件适用 | 前景生产及复垦 | 每 1 kg 参考流 |
| blasting | 铵油炸药爆破 | conditional | 实际使用多孔粒状铵油炸药 | 前景开采辅助 | 每 1 kg 参考流 |
| gate_release | 出矿处理与产品交付 | required | 所有产品交付；处理设备按实际使用情况 | 前景终端处理 | 每 1 kg 参考流 |

### 过程：开采与矿区环境管理（`mine_operations`）

#### 输入

##### 产品流

###### 开采与环境治理用电（`mine_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

将开采、疏干、通风和复垦用电与出矿处理用电分开计量；仅记录跨越本边界的电力。

- 选定流：电力
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_mine_energy 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mine_energy`

###### 移动设备柴油（`mine_diesel`）

使用柴油设备时纳入。记录实际耗油量，不能仅用采购量；上游供应与现场燃烧分开建模。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 设备润滑油（`mine_oil`）

纳入实际补充的润滑油，不与柴油、液压油或润滑脂合并。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 外购工艺用水（`mine_supplied_water`）

使用外部供应工艺用水时纳入。排除内部循环量，并与直接地下水取水区分。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

##### 基本流

###### 地下褐煤资源，质量（`lignite_resource`）

计量移出煤层的煤质量，并核对处理损失；此项为资源输入，不是外购褐煤。

- 选定流：地下褐煤资源，质量
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_resource 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resource`

###### 地下水抽取（`mine_groundwater`）

纳入疏干或生产抽取的地下水，记录含水层、抽取时段和来源；排除外购水及内部回用。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_water 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

###### 矿产开采用地占用（`mine_occupation`）

对占用的扰动土地面积按时间积分，纳入归属于生产的采坑、排土场和辅助区域。

- 选定流：矿产开采用地 `b0744c5e-9859-470f-99dc-b117be5a32c5`
- 流属性/单位：面积与时间乘积 `93a60a56-a3c8-21da-a746-0800200c9a66` / m2*a
- 数量规则：采用 cp_land 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land`

###### 转变为矿产开采用地（`mine_transform_to`）

矿区开发产生新增转换面积时纳入；数据集中另列匹配的原土地类型转换交换。

- 选定流：转变为矿产开采用地 `68f57e2a-2909-423c-ad8e-6a695f59a48f`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_land 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land`

###### 由矿产开采用地转变（`mine_transform_from`）

恢复活动使土地退出采矿用途时纳入，另列恢复后的土地类型；不得假定瞬时恢复。

- 选定流：由矿产开采用地转变 `b129498b-6ff1-4025-95f4-a7f821b341c1`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_land 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land`

#### 输出

##### 废物流

###### 开挖剥离土（`mine_overburden`）

存在时纳入送往排土场或回填的开挖剥离土；排除煤、选矿尾矿和可售矿物共产品。矿区整体模型中内部转移仅追踪一次。

- 选定流：开挖剥离土
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 废润滑油（`mine_used_oil`）

纳入单独收集的废润滑油，并连接实际回收或处置过程；不得预设原生油替代收益。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

##### 基本流

###### 排入淡水的液态水（`mine_discharge_water`）

纳入现场处理后实际排向淡水受纳水体的液态排水；数据集中为每种测得的溶解污染物及悬浮固体另列基本流。送往外部处理的废水是废物转移，不是此项排放。

- 选定流：排入淡水的液态水
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_water 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

###### 直接化石二氧化碳排放（`mine_co2`）

记录现场燃料燃烧及有依据的煤氧化排放，存在爆破排放时一并计入；排除用户后续燃烧及上游供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 直接化石甲烷排放（`mine_methane`）

记录到达空气的实测或透明建模矿井甲烷量，扣除送往利用或销毁的收集气体；判定不存在须有地质或监测证据。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 排入空气的氮氧化物，以二氧化氮计（`mine_nox`）

存在时纳入燃烧及爆破氮氧化物，声明分析报告基准。一氧化二氮是不同物质，不得代替。

- 选定流：排入空气的氮氧化物，以二氧化氮计
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 排入空气的二氧化硫（`mine_so2`）

存在时纳入实测或按燃料硫含量计算的二氧化硫，保留硫含量分析及治理效率依据。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_air 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

###### 空气颗粒物，粒径未特指（`mine_dust`）

纳入未捕集粉尘及燃烧颗粒物，保留粒径覆盖范围及捕集效率。已知粒径分级时，用互不重叠的实测分级替换本项，不得重复计量。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_air 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`

### 过程：铵油炸药爆破（`blasting`）

#### 输入

##### 产品流

###### 多孔粒状铵油炸药（`blasting_anfo`）

仅使用该具体多孔粒状铵油配方时纳入。记录装药质量及供应商配方；其他炸药须另列数据集交换。现场爆破排放仅在 mine_operations 中计入一次。

- 选定流：多孔粒状铵油炸药 `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_blasting 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blasting`

### 过程：出矿处理与产品交付（`gate_release`）

#### 输入

##### 产品流

###### 破碎、输送与出矿装载用电（`gate_electricity`）

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

计量实际粒度处理、输送、堆存及装载用电，并与开采及环境治理用电分开。

- 选定流：电力
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_gate_energy 采集归属交换量；按每 1 kg 参考流报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_energy`

#### 输出

##### 产品流

###### 出矿褐煤（`lignite_gate`）

验收产品参考为出矿口收到基的 1 千克净质量未压块褐煤；排除运输设备及游离排水。

- 选定流：褐煤 `db766ffc-c44d-4ecf-b906-98d90565dc01`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_mine_operations | 优先分离独立计量及可直接归属的活动。共用矿区作业按有记录的因果驱动量分配，例如物料搬运量、抽水负荷及设备时间；在 cp_allocation 中保留原始总量及分配比例。 |  |
| allocation_outputs | coproducts_and_waste | 剥离土、废油及排水不能仅因离开矿区就视为共产品。真实可售共采产品须披露物理关系；不能合理细分或按因果关系分配时，将该数据集分配提交审查。本 PCR 不规定自动收入分配或替代收益。 |  |
| allocation_restoration | mine_life | 依据声明的矿山全寿命计划，将开发和复垦（含关闭义务）归属于对应可采产出。披露全寿命产出假设及敏感性；不得仅归于最后运行年，也不得将未来复垦视为零负担。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | gate_release | product | weighing | 发运净质量；期初期末库存；水分；发热量；灰分；硫；粒度；取样日期 | 采用校准皮带秤或地磅扣除皮重，配套代表性水分与质量取样；核对转移及库存 | kg | 每次发运及代表性质检取样 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_mine_energy | mine_operations | electricity | meter | 电表读数；设备；电压；供应者；自发电；运行小时 | 采用分表并核对供电账单；与出矿处理电表及自发电燃料分开 | MJ | 连续计量、每月核对 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_gate_energy | gate_release | electricity | meter | 出矿处理电表读数；设备运行小时；调质状态 | 计量出矿处理用电，凭运行记录分配共用需求 | MJ | 连续计量、每月核对 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_materials | mine_operations | fuel_and_consumables | stock | 期初库存；收货；期末库存；退料；设备用量；燃料密度；水密度 | 采用燃料及润滑油领用记录、供水计量；仅凭已记录密度将体积转为质量 | kg | 每次领用；每月库存核对 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_resource | mine_operations | coal_resource | survey | 移出煤层；体积密度；采出煤；煤损失；水分基准 | 将地质测量及密度检测与采出质量、库存变化及废弃煤按相容水分基准核对 | kg | 测量批次及月度产出 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_water | mine_operations | water_balance | meter | 含水层；抽水表；用量；回用；排水表；受纳水体；降水；蓄水变化；样品 | 分别计量抽水及液态排放；核对水量平衡及排水质量，保留分污染物分析 | m3 | 连续计量及按风险取样 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_waste | mine_operations | waste | transfer | 废物身份；质量；密度；来源；去向；内部堆放；处理路线 | 称量废油转移；用实测密度换算测量的剥离土体积；核对内部回填及外部处置 | kg | 每次转移及测量批次 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_air | mine_operations | direct_emissions | monitoring | 源；物质；环境区室；质量流率；小时；燃料；硫；甲烷浓度；通风量；粉尘粒径；捕集；因子来源 | 采用匹配的监测及运行记录。未测排放须记录适用的场址排放模型和经独立核验的因子来源；区分估计与实测，避免重复供应者排放 | kg | 监测批次及连续活动记录 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_land | mine_operations | land | survey | 前后土地类型；地块；扰动面积；占用起止；复垦阶段；全寿命产出 | 采用 GIS 及有日期测量；占用面积按年积分，转换面积单独记录，全寿命负担归于全寿命产出 | m2*a; m2 | 年度测量及每次土地变化 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_blasting | blasting | explosive | charge_log | 配方；装药质量；爆破事件；开采区域；产出归属 | 采用装药记录并核对供应收货；保留配方及活动分配 | kg | 每次爆破 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |
| cp_allocation | mine_operations | shared_burdens | allocation_record | 共用原始总量；产品；因果驱动量；比例；全寿命产出；关闭计划 | 保留独立过程记录及合理分配，包含全寿命开发和复垦假设 | fraction | 报告期及矿山计划修订 | 一个完整声明年度；全寿命活动单独披露 | 声明矿区及其相关辅助区域 | 每 1 kg 参考流 | 校准、原始记录、核对及不确定性；保留分配依据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | 所有清单行 | 各归属交换总量除以相应褐煤净产出千克数，保留原始总量及归属依据；参考产品行等于 1 千克。不得用年度产出归一化全寿命负担。 | cp_output; cp_allocation | 每 1 kg 参考流的交换量 |  |
| electricity_conversion | mine_electricity; gate_electricity | 计量 kWh 乘以 3.6 得到 MJ 后归一化 | cp_mine_energy; cp_gate_energy | 每 1 kg 参考流的 MJ |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_product | lignite_gate | 煤阶、水分及质量取样可追溯，且产出基准一致 | cp_output |
| quality_balance | 所有清单行 | 核对煤、水、燃料及废物平衡；披露损失、缺测、不确定性及内部转移。不以通用行业范围替代场址数据。 | cp_resource; cp_water; cp_materials; cp_waste |
| quality_coverage | 场址及矿山全寿命 | 声明监测缺口、因子来源、全寿命假设、复垦覆盖及所有重要遗漏活动。按场址实际交换扩展原子清单。 | cp_air; cp_land; cp_allocation |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | lignite_gate | 要求 1 千克出矿收到基净褐煤、完整限定信息以及一致的水分与发热量基准。 |  |
| validate_amounts | inventory | 每项存在的交换须有单一身份、单位、采集或模型来源及每参考流基准；核对总量、分表及分配比例。零值或不适用须有不存在的依据；缺测不是零。 |  |
| validate_environment | mine_operations | 核对水量平衡、剥离土去向、直接排放环境区室及土地时间归属。实测污染物分别列项；不得将废物转移计作直接环境排放。 | `ifc-mining-2007` |
| validate_models | dataset | 要求相容的上游地域、技术及时段数据；核对自备电厂边界、全寿命复垦及无重复计量。未解决的数据集分配或无支持的排放因子须审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为前景数据包的 process 或 lifecyclemodel 投影中的褐煤供应输入 |
| allowed_use | 状态相容且质量已披露的出矿质量基准褐煤供应 |
| excluded_use | 无实测热值转换的热量等效；人造压块；未添加后续阶段的燃烧或交付燃料清单 |
| required_metadata | 矿区；地域；时段；路线；品级；水分；质量基准；出矿边界；上游链接；分配；矿山寿命；排除项；版本 |
| required_quality_disclosure | 实测与模型区分；平衡结果；不确定性；因子来源；身份或数量证据缺口；全寿命及复垦假设 |
| update_trigger | 煤层质量、设备、能源供应、水管理、出矿状态、分配、矿山计划或复垦义务变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 原文件获取于 2026-09-10；核验于 2026-10-01 | 产品身份及相邻类别排除 |
| `ifc-mining-2007` | official_guidance | 世界银行集团 / IFC，采矿环境、健康与安全指南，2007 年 12 月 10 日; https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf; 原文件获取及核验于 2026-10-01；第 2–5、12–13、24 页 | 定性水、废物、粉尘、甲烷、能源及矿山关闭管理覆盖；不提供数值清单范围 |
