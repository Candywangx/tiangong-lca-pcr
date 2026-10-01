---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.natural-water.natural-water
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自然水

## 1. 范围与适用性

本 PCR 适用于可供声明后续用途的饮用或非饮用散装水，包括未处理淡水取用、常规处理、膜法或热法淡化及已用水再生。固定实际水源、处理流程及水质。供应出口可为厂内计量点或声明网络交付点，网络泵送、冲洗及泄漏仅按该边界纳入。排除作为商品出售的原海水、蒸汽及热水、瓶装饮料、碳酸矿泉水、蒸馏水化学产品及不适合再利用的水。废水处理服务和可用再生水供应须分别声明负荷及产品。 对离子交换、吸附或额外再生步骤，须逐项补入实际树脂、再生剂、活性炭、残余物及污染物交换；候选卡片不能替代场站审计。 `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.natural-water.natural-water |
| classification_refs | CPC 3.0:18000 |
| covered_products | 满足一种声明后续用途规范的散装液态水 |
| excluded_products | 商品海水；热水供热；蒸馏水化学品；瓶装或碳酸饮料；不可再利用废水 |
| representative_product | 适合声明后续用途的散装水 |
| production_route | 取水及泵送; 澄清、过滤及消毒; 膜法淡化; 热法淡化; 已用水再生; 供给计量及声明分销 |
| market_state | 具有实测水温的一个厂内或分销计量出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应适合声明用途的散装水，不宣称饮用及非饮用水普遍等效 |
| How much | 1 m3 |
| How well | 场址、流域及年份；水源及盐度；未处理、处理或再生状态；预定后续用途及水质证据；处理流程；表计水温；厂内或网络出口；损失及库存变化；残余物去向；分配；能源供应 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 适合声明后续用途的散装水 |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 场址、流域及年份；水源及盐度；未处理、处理或再生状态；预定后续用途及水质证据；处理流程；表计水温；厂内或网络出口；损失及库存变化；残余物去向；分配；能源供应 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Volume | m3 | D 为正的、验收净出口产品总量，单位为 m3。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Volume | m3 | 闭合水源、产水、浓液、污泥水、反洗、回用、蒸发、冲洗、管网损失及库存平衡。D 为声明出口验收净 m3，记录表计水温。化学溶液及湿污泥质量按实测浓度和水分转换。取水不等于耗水，披露受纳流域及退水数量水质。不按未披露的通用密度将 m3 换算 kg。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别天然淡水或海水资源、供给原水或可追溯再生用水进料 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 满足一种声明后续用途规范的散装液态水 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址、流域及年份；水源及盐度；未处理、处理或再生状态；预定后续用途及水质证据；处理流程；表计水温；厂内或网络出口；损失及库存变化；残余物去向；分配；能源供应 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于可供声明后续用途的饮用或非饮用散装水，包括未处理淡水取用、常规处理、膜法或热法淡化及已用水再生。固定实际水源、处理流程及水质。供应出口可为厂内计量点或声明网络交付点，网络泵送、冲洗及泄漏仅按该边界纳入。排除作为商品出售的原海水、蒸汽及热水、瓶装饮料、碳酸矿泉水、蒸馏水化学产品及不适合再利用的水。废水处理服务和可用再生水供应须分别声明负荷及产品。 对离子交换、吸附或额外再生步骤，须逐项补入实际树脂、再生剂、活性炭、残余物及污染物交换；候选卡片不能替代场站审计。 | `epa-water-2004`, `doe-desalination`, `doe-alternative-water` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| intake | 取水及泵送 | conditional | 资源或购入进料取用 | 前景生产 | per 1 m3 reference flow |
| conventional | 澄清、过滤及消毒 | conditional | 常规处理或再生水深度处理 | 前景生产 | per 1 m3 reference flow |
| membrane | 膜法淡化 | conditional | 实际膜法路线 | 前景生产 | per 1 m3 reference flow |
| thermal | 热法淡化 | conditional | 实际热法路线 | 前景生产 | per 1 m3 reference flow |
| reuse | 已用水再生 | conditional | 再生水路线 | 前景生产 | per 1 m3 reference flow |
| supply | 供给计量及声明分销 | required | 所有声明场址 | 前景生产 | per 1 m3 reference flow |

### 过程：取水及泵送 (`intake`)

#### 输入

##### 产品流

###### 供给原水 (`purchased_raw_water`)

仅购入水，供应方承担取水负荷，不再同时计入资源取用。

- 选定流: 供给原水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_purchased_raw_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_raw_water`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 取水用电 (`intake_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际进水泵及格栅。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_intake_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_intake_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

##### 基本流

###### 河水取用 (`river_resource`)

仅直接河水取用，标识流域及进水计量。

- 选定流: 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_river_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_river_resource`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 地下水取用 (`groundwater_resource`)

仅直接地下水取用，记录含水层及泵送。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_groundwater_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_groundwater_resource`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 淡化海水取用 (`seawater_resource`)

仅实际海水进水，区分商品原海水。

- 选定流: 淡化海水取用
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_seawater_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_seawater_resource`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### 过程：澄清、过滤及消毒 (`conventional`)

#### 输入

##### 产品流

###### 硫酸铝混凝剂 (`aluminium_sulfate`)

仅实际铝盐混凝路线，分别记录有效比例及溶液质量。

- 选定流: 硫酸铝混凝剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_aluminium_sulfate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium_sulfate`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 次氯酸钠消毒剂 (`sodium_hypochlorite`)

仅实际次氯酸盐路线，其他消毒剂及 UV 电力须独立卡片。

- 选定流: 次氯酸钠消毒剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_hypochlorite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_hypochlorite`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 处理用电 (`treatment_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

混合、过滤、反洗及实际消毒设备。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_treatment_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_treatment_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### 输出

##### 废物流

###### 水处理污泥 (`treatment_sludge`)

转交湿污泥，记录干固体比例、污染物及处理去向。

- 选定流: 水处理污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_treatment_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_treatment_sludge`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### 过程：膜法淡化 (`membrane`)

#### 输入

##### 产品流

###### 膜系统用电 (`membrane_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际高压、循环及回收辅助设备，核对净回收能量而不重复抵扣。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_membrane_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_membrane_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 更换聚酰胺反渗透膜 (`polyamide_membrane`)

仅实际聚酰胺 RO 组件，记录维护更换比例及一次处置。

- 选定流: 更换聚酰胺反渗透膜
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_polyamide_membrane 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_polyamide_membrane`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### 输出

##### 废物流

###### 转交管理的反渗透浓液 (`membrane_concentrate`)

仅转交处理或管理，直接受纳水排放需物种及介质行。

- 选定流: 转交管理的反渗透浓液
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_membrane_concentrate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_membrane_concentrate`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### 过程：热法淡化 (`thermal`)

#### 输入

##### 产品流

###### 外供淡化热量 (`desalination_heat`)

实际购入热能，场内制热采用自身燃料及燃烧清单。

- 选定流: 外供淡化热量
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_desalination_heat 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_desalination_heat`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### 热法淡化用电 (`thermal_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际蒸发、循环及产水泵。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_thermal_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### 输出

##### 废物流

###### 转交管理的热法淡化浓盐水 (`thermal_brine`)

记录温度、盐度及管理去向，物种特定直接排放另列。

- 选定流: 转交管理的热法淡化浓盐水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_thermal_brine 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_brine`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### 过程：已用水再生 (`reuse`)

#### 输入

##### 产品流

###### 再生用电 (`reuse_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际再生过程，细分曝气、泵送及深度处理，避免重复常规处理表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_reuse_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_reuse_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

##### 废物流

###### 再生前不适用的已用水进料 (`used_water_feed`)

仅实际废水进料，已适用的供给再生水是带供应方的产品投入。

- 选定流: 再生前不适用的已用水进料
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_used_water_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_used_water_feed`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### 输出

##### 废物流

###### 已用水再生污泥 (`reclamation_sludge`)

仅实际再生水处理固体，区分上游废水处理污泥，每项处理负荷计入一次。

- 选定流: 已用水再生污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_reclamation_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_reclamation_sludge`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### 过程：供给计量及声明分销 (`supply`)

#### 输入

##### 产品流

###### 供给用电 (`supply_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅选定参考出口延伸至管网时纳入分销泵送。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_supply_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supply_power`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### 输出

##### 产品流

###### 适合声明后续用途的散装水 (`final_product`)

一种水质规范及出口，排除不可用残余物及独立声明的海水商品。

- 选定流: 适合声明后续用途的散装水
- 流属性 / 单位: Volume / m3
- 数量规则: 1 m3
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 m3 reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 分离原水取用、处理、淡化、再生及分销计量。联产热、电或盐须保留未分配清单及已证明物理关系。再生水不自动无负荷，也不自动取得避免淡水抵扣；一致声明废水处理服务及回用分配。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_river_resource | intake | `river_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配运行区间积分校准水源或进料表计；记录流域或供应方、水源盐度和水质、温度、期初期末储存、旁路及回用；单独记录退水量及去向，不按产水体积推断取水，不假设取水等于耗水。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_groundwater_resource | intake | `groundwater_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配运行区间积分校准水源或进料表计；记录流域或供应方、水源盐度和水质、温度、期初期末储存、旁路及回用；单独记录退水量及去向，不按产水体积推断取水，不假设取水等于耗水。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_seawater_resource | intake | `seawater_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配运行区间积分校准水源或进料表计；记录流域或供应方、水源盐度和水质、温度、期初期末储存、旁路及回用；单独记录退水量及去向，不按产水体积推断取水，不假设取水等于耗水。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purchased_raw_water | intake | `purchased_raw_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配运行区间积分校准水源或进料表计；记录流域或供应方、水源盐度和水质、温度、期初期末储存、旁路及回用；单独记录退水量及去向，不按产水体积推断取水，不假设取水等于耗水。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_intake_power | intake | `intake_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_aluminium_sulfate | conventional | `aluminium_sulfate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对称量到货、罐库存变化及实际投加日志；保留溶液密度及实测有效浓度，按有效化学品质量归一化，并披露载体水而不重复计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_hypochlorite | conventional | `sodium_hypochlorite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对称量到货、罐库存变化及实际投加日志；保留溶液密度及实测有效浓度，按有效化学品质量归一化，并披露载体水而不重复计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_treatment_power | conventional | `treatment_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_treatment_sludge | conventional | `treatment_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配盐度、湿干固体化验、温度及最终管理去向的校准体积或称量记录测量转交残余物；区分退水及直接受纳水物种，保留运输和处理供应方信息。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_membrane_power | membrane | `membrane_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_polyamide_membrane | membrane | `polyamide_membrane` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_membrane_concentrate | membrane | `membrane_concentrate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配盐度、湿干固体化验、温度及最终管理去向的校准体积或称量记录测量转交残余物；区分退水及直接受纳水物种，保留运输和处理供应方信息。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_desalination_heat | thermal | `desalination_heat` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_brine | thermal | `thermal_brine` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配盐度、湿干固体化验、温度及最终管理去向的校准体积或称量记录测量转交残余物；区分退水及直接受纳水物种，保留运输和处理供应方信息。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_used_water_feed | reuse | `used_water_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配运行区间积分校准水源或进料表计；记录流域或供应方、水源盐度和水质、温度、期初期末储存、旁路及回用；单独记录退水量及去向，不按产水体积推断取水，不假设取水等于耗水。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_reuse_power | reuse | `reuse_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supply_power | supply | `supply_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | supply | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 在选定厂内或网络出口记录校准体积表读数及水温，扣除不合格和退货产水，核对储存及转移，独立保留正的净验收体积 D（m3）；水质采样须匹配报告期及预定用途规范。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_reclamation_sludge | reuse | `reclamation_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 具有实测水温的一个厂内或分销计量出口 | per 1 m3 reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 m3 reference flow |  |
| physical_balance | production | 闭合水源、产水、浓液、污泥水、反洗、回用、蒸发、冲洗、管网损失及库存平衡。D 为声明出口验收净 m3，记录表计水温。化学溶液及湿污泥质量按实测浓度和水分转换。取水不等于耗水，披露受纳流域及退水数量水质。不按未披露的通用密度将 m3 换算 kg。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 m3、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | 闭合水源、产水、浓液、污泥水、反洗、回用、蒸发、冲洗、管网损失及库存平衡。D 为声明出口验收净 m3，记录表计水温。化学溶液及湿污泥质量按实测浓度和水分转换。取水不等于耗水，披露受纳流域及退水数量水质。不按未披露的通用密度将 m3 换算 kg。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应适合声明用途的散装水，不宣称饮用及非饮用水普遍等效 |
| excluded_use | 商品海水；热水供热；蒸馏水化学品；瓶装或碳酸饮料；不可再利用废水 |
| required_metadata | 场址、流域及年份；水源及盐度；未处理、处理或再生状态；预定后续用途及水质证据；处理流程；表计水温；厂内或网络出口；损失及库存变化；残余物去向；分配；能源供应 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-water-2004 | official_guidance | US EPA, Drinking Water Treatment, EPA 816-F-04-034, June 2004, PDF pp.2–3. https://archive.epa.gov/water/archive/web/pdf/2009_08_28_sdwa_fs_30ann_treatment_web.pdf | 水源差异、絮凝沉淀、过滤及消毒，仅用于过程描述，不作为当前合规指南。 |
| doe-desalination | official_guidance | US DOE, Desalination Basics, web snapshot 1 October 2026, How Does Desalination Work? https://www.energy.gov/cmei/ito/desalination-basics | 膜法及热法路线区分、产水及盐浓液，不采用性能默认值。 |
| doe-alternative-water | official_guidance | US DOE, Best Management Practice 14: Alternative Water Sources, web snapshot 1 October 2026. https://www.energy.gov/cmei/femp/best-management-practice-14-alternative-water-sources | 再生及替代水对声明后续用途的适用性。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
