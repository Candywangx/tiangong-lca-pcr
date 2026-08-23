---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oils-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-es-25ec8f8e
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 部分或全部氢化、互酯化、再酯化或反油酸化的植物油及其馏分（无论是否精炼，未经进一步制备）

## 1. 范围与适用性

本 PCR 仅适用于一条明确路线：食品级精炼、脱色、脱臭大豆油在间歇式或半连续三相反应器中，以氢气和负载型镍催化剂进行部分氢化，随后过滤去除催化剂。本路线不得同时并入化学互酯化、酶法互酯化、再酯化或反油酸化。氢化后脱臭仅在实际发生且已声明时纳入。

所选路线不使用酶或反应中和剂；氢氧化钠仅作为单独清单化的清洗剂。现场蒸汽系统以天然气为唯一燃料。若使用酶、反应中和试剂或其他锅炉燃料，即构成不同的前景配置，不得无声明地汇总进本路线。

前景边界起点为改性工厂接收合格精炼大豆油、氢气、负载型镍催化剂、公用工程和辅料，终点为部分氢化大豆油完成冷却、储存并装包或准备散装出厂。大豆种植、油脂提取和精炼由供应商上游数据集表示。分销、食品配制、零售、使用和油品最终处置不在本前景边界内。数据包不得以本路线替代其他植物油、其他催化剂、完全氢化或互酯化路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oils-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-es-25ec8f8e |
| classification_refs | CPC 3.0：21693 |
| covered_products | 以精炼大豆油为原料、按所选负载型镍催化部分氢化路线生产的食品级部分氢化大豆油及其馏分；可有也可无已声明的后续脱臭 |
| excluded_products | 完全氢化油；化学或酶法互酯化油；再酯化或单独反油酸化油；动物或海洋脂肪；粗大豆油；混合油脂、人造黄油、起酥油、乳状液及其他进一步制品 |
| representative_product | 改性工厂门口的部分氢化精炼大豆油 |
| production_route | 接收并预处理精炼、脱色、脱臭大豆油；干燥和惰化；加入氢气并以负载型镍催化；以硅藻土助滤并去除催化剂；条件性脱臭；冷却、储存和包装 |
| market_state | 食品级半成品油脂，采用散装或已声明的 HDPE 桶包装，已准备出厂且未经进一步配制 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有已声明氢化程度和后处理状态的食品级部分氢化大豆油 |
| How much | 净重 1,000 kg 部分氢化大豆油 |
| How well | 符合买方规格和适用食品法规；声明碘值或等效饱和度指标、反式脂肪含量、残余镍结果、水分/挥发物、不溶性杂质、酸价、过氧化值和脱臭状态 |
| How long or cycle | 工厂门口交付的一个生产批次或生产周期；声明生产至出厂的储存时间 |
| reference_flow_link | 准备出厂的合格散装或包装部分氢化大豆油净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 部分氢化大豆油 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 大豆油身份；精炼/脱色/脱臭进料状态；部分氢化目标及实测终点；负载型镍催化剂身份；间歇或半连续反应器；氢气来源；催化剂过滤方法；氢化后脱臭是/否；散装或包装出厂；包装规格；生产地域；生产期间；反式脂肪结果及适用市场限值 |

构建前景数据包时，`必需限定信息` 中每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告产品净质量，并将所有清单结果归一化到 1,000 kg 合格参考产品；参考数量不含包装质量。 |
| `material_mass_basis` | 油、氢气、催化剂、助滤剂、化学品、废物和排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测湿基或接收态质量；交换物为溶液、浆料或湿废物时，声明浓度、水分或固含量基准。 |
| `energy_carrier_basis` | 电力和天然气能量 | Energy | kWh 或 MJ | 保留计量单位、低位或高位热值约定及换算因子；不得把电力、燃料和蒸汽合成一个交换。 |
| `water_basis` | 工艺水、冷却水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各水回路分别记录；闭路冷却水循环量不得计作消耗，补水和排水应分别报告。 |
| `gas_basis` | 氢气、氮气和放空气体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按记录的压力、温度、组成和换算方法将气体表读数换算为质量；氢气和氮气分别保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 改性工厂接收的食品级精炼、脱色、脱臭大豆油，具有供应商身份、批次质量和质量证明 |
| starting_condition_role | 作为前景氢化路线输入的上游精炼油产品 |
| product_classification_scope | 仅限负载型镍催化部分氢化大豆油；较宽的 CPC 21693 名称只是分类语境，不能授权其他油种或改性路线 |
| recursive_input_rule | 同类部分氢化大豆油返工作为独立产品输入记录一次，附上游数据集和返工比例；不得在当前单元过程中递归展开 |
| upstream_dataset_requirement | 精炼大豆油、氢气、镍催化剂、硅藻土、天然气、电力、水、氮气、氢氧化钠和包装均要求供应商特定数据集；替代数据须披露并说明理由 |
| disclosure | 声明油品来源及精炼状态、氢化终点、反应器模式、催化剂身份及去向、过滤、条件性脱臭、公用工程配置、清洗和废水处理、储存、出厂方式以及全部排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_exclusivity` | 前景路线 | 仅建模所选精炼大豆油—负载型镍催化部分氢化路线；不得加入化学或酶法互酯化、再酯化或其他油种路线。 | `unsd-cpc-3-0`; `usda-ars-soybean-hydrogenation-2014` |
| `boundary_process_completeness` | 前景单元过程 | 纳入精炼油接收和预处理、干燥/惰化、氢化、催化剂和助滤剂去除、适用的后处理、冷却、储存、清洗、废水处理、公用工程供应以及包装或散装出厂。 | `eu-fdm-bat-2019`; `herrera-guzman-soybean-hydrogenation-2025` |
| `boundary_upstream_inputs` | 外购产品和公用工程 | 每项外购物料和能源载体均用上游数据集表示，其运输在该数据集中或以单独披露的过程表示；不得以截断名义漏掉上游负荷。 | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_emission_origin` | 直接排放 | 在排放产生的过程中记录直接废水、废气和残余物流，包括锅炉燃烧、反应器/储罐放空以及清洗/废水处理。 | `eu-fdm-bat-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `refined_oil_reception_preparation` | 精炼大豆油接收、过滤、干燥和惰化预处理 | required | 始终纳入 | 前景进料预处理 | 实测送入氢化的预处理油 |
| `natural_gas_steam_generation` | 场内天然气蒸汽发生 | required | 所选工厂路线使用场内天然气锅炉 | 前景公用工程发生 | 实测供应给前景过程的蒸汽 |
| `nickel_catalytic_hydrogenation` | 负载型镍催化部分氢化 | required | 始终纳入 | 前景化学改性 | 实测离开反应器的粗氢化油 |
| `catalyst_removal_post_treatment` | 镍催化剂去除和精滤 | required | 始终纳入 | 前景催化剂分离 | 实测过滤后氢化油 |
| `conditional_deodorization` | 氢化后脱臭 | conditional | 仅在批次氢化后实际脱臭时纳入 | 前景后处理 | 实测脱臭后氢化油 |
| `cooling_storage_packaging` | 产品冷却、储存和包装 | required | 始终纳入；包装行适用于已声明的 HDPE 桶出厂配置 | 前景成品处理 | 准备出厂的 1,000 kg 合格产品 |
| `cleaning_wastewater_treatment` | 设备清洗和场内废水处理 | required | 生产周期清洗始终纳入；处理反映所选场内配置 | 前景卫生和废物处理 | 与参考产品相关的清洗周期及处理废水 |

### 过程：精炼大豆油接收、过滤、干燥和惰化预处理（`refined_oil_reception_preparation`）

#### 输入

##### 产品流

###### 精炼大豆油进料（`refined_soybean_oil_input`）

本路线只允许食品级精炼、脱色、脱臭大豆油作为植物油进料。

- 选定流：精炼大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于合格产品的接收净质量，并按罐体期初、期末库存校正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_oil_preparation`
- 来源：`fao-who-codex-cxs210-1999`; `fao-who-codex-cxs19-1981`

###### 接收和预处理电力（`reception_electricity`）

卸料、泵送、过滤、真空干燥和仪表用电单独计量。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：预处理过程分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil_preparation`
- 来源：`eu-fdm-bat-2019`

###### 预处理蒸汽（`preparation_steam`）

罐体加热或真空干燥用蒸汽作为独立公用工程流记录。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应给预处理换热器和夹套的实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil_preparation`
- 来源：`eu-fdm-bat-2019`

###### 预处理氮气（`preparation_nitrogen`）

进料罐和干燥系统惰化用氮气与氢气分别记录。

- 选定流：氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按计量氮气用量及记录的压力、温度和纯度换算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_oil_preparation`
- 来源：`fao-who-codex-cxc36-1987`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理干燥大豆油（`prepared_soybean_oil_output`）

送入氢化反应器的实测干燥、惰化油是内部中间产品。

- 选定流：预处理干燥大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移流量计或经校准罐差计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil_preparation`
- 来源：`usda-ars-soybean-hydrogenation-2014`

##### 废物流

###### 预处理油损（`preparation_oil_loss`）

未继续转移的排放油、取样油和设备滞留油与滤饼和废水分别记录。

- 选定流：废精炼大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测收集废油加有记录的不可回收设备滞留量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_oil_preparation`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 预处理非甲烷挥发性有机物（`preparation_nmvoc`）

加热预处理和真空系统的任何实测有机放空损失均按 NMVOC 入空气报告。

- 选定流：入空气的非甲烷挥发性有机物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放空负荷，或以放空流量和浓度进行经验证的场址特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_oil_preparation`
- 来源：`eu-fdm-bat-2019`

### 过程：场内天然气蒸汽发生（`natural_gas_steam_generation`）

#### 输入

##### 产品流

###### 锅炉天然气（`boiler_natural_gas`）

天然气是所选路线唯一锅炉燃料，不得使用泛化燃料集合。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：按已声明热值基准计量的燃料能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

###### 锅炉给水（`boiler_feedwater`）

新鲜水与回收冷凝水应对账；此处只报告跨工厂边界的补水。

- 选定流：锅炉给水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给前景过程用汽的实测补水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

###### 锅炉电力（`boiler_electricity`）

燃烧空气、给水泵、控制和水处理用电单独计量。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：按输出蒸汽质量分配的锅炉房分表电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发生的饱和蒸汽（`generated_steam`）

蒸汽在锅炉总管计量后分配给用汽过程，不得以燃料与蒸汽净额表示。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向前景用户输送的实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 锅炉排污水（`boiler_blowdown`）

锅炉排污作为单独含水废物流记录。

- 选定流：锅炉排污废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往废水处理的流量计或罐差实测排污水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 锅炉燃烧化石二氧化碳（`boiler_co2_fossil`）

天然气燃烧产生的化石二氧化碳与其他烟气污染物分别计算。

- 选定流：入空气的化石二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测天然气用量乘以工厂特定或供应商碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-pef-2021`

###### 锅炉燃烧甲烷（`boiler_ch4`）

锅炉烟气中的未燃化石甲烷作为独立基本流排放报告。

- 选定流：入空气的化石甲烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测燃料用量乘以有文件依据的场址特定或适用燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-pef-2021`

###### 锅炉燃烧一氧化二氮（`boiler_n2o`）

燃烧产生的一氧化二氮与氮氧化物分别报告。

- 选定流：入空气的一氧化二氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测燃料用量乘以有文件依据的场址特定或适用燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-pef-2021`

###### 锅炉燃烧氮氧化物（`boiler_nox`）

锅炉烟气氮氧化物按已声明的二氧化氮当量基准报告。

- 选定流：入空气的氮氧化物（以二氧化氮计）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟囱监测，或实测燃料用量乘以有文件依据的适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

###### 锅炉燃烧一氧化碳（`boiler_co`）

天然气不完全燃烧产生的一氧化碳作为独立烟气排放量化。

- 选定流：入空气的一氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟囱监测，或实测燃料用量乘以有文件依据的适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

###### 锅炉燃烧二氧化硫（`boiler_so2`）

即使低硫天然气使实测量很小或为零，二氧化硫仍保留为原子排放项。

- 选定流：入空气的二氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟囱监测或按实测天然气批次进行硫质量平衡；仅在有气体组成证据时报告为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

###### 锅炉燃烧颗粒物（`boiler_pm`）

锅炉烟气排出的颗粒物与气态污染物分别记录。

- 选定流：入空气的颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟囱监测，或实测燃料用量乘以有文件依据的适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_steam_generation`
- 来源：`eu-fdm-bat-2019`

### 过程：负载型镍催化部分氢化（`nickel_catalytic_hydrogenation`）

#### 输入

##### 产品流

###### 送入反应器的预处理大豆油（`prepared_oil_to_hydrogenation`）

预处理干燥大豆油在投入氢化反应器时计量。

- 选定流：预处理干燥大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测反应器投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`usda-ars-soybean-hydrogenation-2014`

###### 反应氢气（`hydrogen_input`）

氢气按供应表或储存质量平衡计量，不得与氮气或反应器尾气合并。

- 选定流：氢气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供氢量减去单独实测的回收或放空氢气，并采用记录的气体条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`usda-ars-soybean-hydrogenation-2014`; `fillion-morsi-soybean-hydrogenation-2002`

###### 负载型镍催化剂（`supported_nickel_catalyst`）

记录供应态催化剂质量和镍浓度；本路线不得使用其他金属催化剂。

- 选定流：惰性载体负载镍催化剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量投入反应器的新鲜和再生催化剂，原始记录分别保留并在保留镍浓度后汇总
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`usda-ars-soybean-hydrogenation-2014`; `fillion-morsi-soybean-hydrogenation-2002`

###### 氢化电力（`hydrogenation_electricity`）

搅拌、压缩、真空和控制系统用电分配给氢化批次。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：氢化批次搅拌、压缩、真空和控制的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`eu-fdm-bat-2019`; `fillion-morsi-soybean-hydrogenation-2002`

###### 氢化蒸汽（`hydrogenation_steam`）

反应器升温和温控所供蒸汽与电力分别计量。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：反应器批次加热和温控的实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`fillion-morsi-soybean-hydrogenation-2002`

###### 氢化氮气（`hydrogenation_nitrogen`）

吹扫和惰性转移用氮气与反应氢气保持分开。

- 选定流：氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：吹扫、检漏和惰性转移所用质量，不含其他过程用氮
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`usda-ars-soybean-hydrogenation-2014`

###### 氢化冷却水（`hydrogenation_cooling_water`）

报告分配给反应器移热的冷却水补水；闭路循环量不计为消耗。

- 选定流：冷却水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给氢化的实测冷却水补水和排水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`eu-fdm-bat-2019`; `fillion-morsi-soybean-hydrogenation-2002`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗氢化大豆油（`crude_hydrogenated_oil_output`）

过滤前的反应器输出含氢化油和悬浮催化剂。

- 选定流：粗部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测反应器排出质量，并与釜底滞留和取样量对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`usda-ars-soybean-hydrogenation-2014`

##### 废物流

##### 基本流

###### 安全放空氢气（`hydrogen_vent`）

有记录的吹扫或安全放空氢气应记录，不得在氢气消耗中直接净除。

- 选定流：入空气的氢气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测放空质量，或按放空体积、压力、温度和组成进行工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`eu-fdm-bat-2019`

###### 氢化非甲烷挥发性有机物（`hydrogenation_nmvoc`）

反应器或真空放口排出的有机物在治理后按 NMVOC 报告。

- 选定流：入空气的非甲烷挥发性有机物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：反应器和真空系统有机放空负荷的实测或经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hydrogenation_batch`
- 来源：`eu-fdm-bat-2019`

### 过程：镍催化剂去除和精滤（`catalyst_removal_post_treatment`）

#### 输入

##### 产品流

###### 送往过滤的粗氢化油（`crude_hydrogenated_oil_input`）

含悬浮催化剂的粗氢化大豆油在过滤入口计量。

- 选定流：粗部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入催化剂去除过滤器的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`herrera-guzman-soybean-hydrogenation-2025`

###### 硅藻土助滤剂（`diatomaceous_earth_filter_aid`）

具体助滤剂与镍催化剂分别记录。

- 选定流：硅藻土助滤剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量加入过滤系统的新鲜助滤剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`herrera-guzman-soybean-hydrogenation-2025`

###### 过滤电力（`filtration_electricity`）

过滤泵、加压或真空设备及控制系统用电单独计量。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：泵、压滤或真空过滤和控制设备分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`eu-fdm-bat-2019`

###### 过滤蒸汽（`filtration_steam`）

维持油品流动性和辅助过滤回收的蒸汽作为独立公用工程投入记录。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：维持油品可滤性及从过滤系统回收油所用实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`fao-who-codex-cxc36-1987`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 过滤后氢化大豆油（`filtered_hydrogenated_oil_output`）

负载型镍催化剂和过滤固体去除后计量过滤油。

- 选定流：过滤后部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：催化剂去除后以校准罐计量或转移流量计计量的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`herrera-guzman-soybean-hydrogenation-2025`

##### 废物流

###### 废负载型镍催化剂（`spent_nickel_catalyst`）

送往再生、金属回收或危险废物处理的废催化剂应称量并保留镍浓度。

- 选定流：废负载型镍催化剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的实测湿质量，并记录固含量和镍含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`eu-fdm-bat-2019`; `herrera-guzman-soybean-hydrogenation-2025`

###### 含油滤饼（`oil_bearing_filter_cake`）

助滤剂、细催化剂和滞留油作为一个实际处置的滤饼记录；分析其油和镍含量，且不得同时计作游离油损。

- 选定流：含油硅藻土滤饼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测湿滤饼质量，并分析油和镍含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`eu-fdm-bat-2019`

###### 规格外氢化油（`off_spec_hydrogenated_oil`）

送返工或处置的游离规格外油与滤饼内滞留油分别记录。

- 选定流：废部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从合格产品路线移出的实测游离油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 过滤非甲烷挥发性有机物（`filtration_nmvoc`）

加热催化剂去除过滤的有机放空损失在治理后按 NMVOC 报告。

- 选定流：入空气的非甲烷挥发性有机物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加热过滤期间有机放空负荷的实测或经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_catalyst_filtration`
- 来源：`eu-fdm-bat-2019`

### 过程：氢化后脱臭（`conditional_deodorization`）

批次在氢化后未脱臭时，整个过程不纳入。数据集须声明该省略，不得把已纳入脱臭器的用量默认为零。

#### 输入

##### 产品流

###### 送入脱臭器的过滤油（`filtered_oil_to_deodorizer`）

适用脱臭时，在脱臭器入口计量过滤后氢化油。

- 选定流：过滤后部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：氢化后实际脱臭时的实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`fao-who-codex-cxs19-1981`

###### 脱臭汽提蒸汽（`deodorization_steam`）

供应给脱臭器的汽提和加热蒸汽与其他用汽分别计量。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：脱臭器汽提和加热所用实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

###### 脱臭电力（`deodorization_electricity`）

真空、泵送、冷却和脱臭器控制用电单独计量。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：真空、泵送、冷却和控制的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

###### 脱臭冷却水（`deodorization_cooling_water`）

分配给冷凝和产品冷却的冷却水补水及排水应对账。

- 选定流：冷却水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给脱臭冷凝和产品冷却的实测补水及排水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

###### 脱臭氮气（`deodorization_nitrogen`）

脱臭器惰性转移和保护用氮气独立计量。

- 选定流：氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：惰性转移和脱臭器保护所用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_deodorization`
- 来源：`fao-who-codex-cxc36-1987`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱臭后氢化大豆油（`deodorized_hydrogenated_oil_output`）

只有实际经历条件性脱臭的批次才计量脱臭后油。

- 选定流：脱臭后部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：脱臭和冷却后的实测油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`fao-who-codex-cxs19-1981`

##### 废物流

###### 脱臭馏出物（`deodorizer_distillate`）

冷凝脂肪酸和其他汽提油组分应称量；仅在出售给有记录市场时归为共产品，否则保持为废物。

- 选定流：大豆油脱臭馏出物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测收集馏出物质量，并记录去向和市场状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

###### 脱臭废水（`deodorization_wastewater`）

受污染的真空系统水或冷凝器水与清洁冷却水分别保留。

- 选定流：含油脱臭废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往废水处理的实测受污染水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 脱臭非甲烷挥发性有机物（`deodorization_nmvoc`）

经冷凝或治理后离开脱臭器放口的残余有机物按 NMVOC 报告。

- 选定流：入空气的非甲烷挥发性有机物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经过冷凝器或治理系统后的实测废气负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_deodorization`
- 来源：`eu-fdm-bat-2019`

### 过程：产品冷却、储存和包装（`cooling_storage_packaging`）

#### 输入

##### 产品流

###### 送入储存的氢化油（`hydrogenated_oil_to_storage`）

未脱臭时为过滤后油；纳入条件性脱臭时为脱臭后油。

- 选定流：最终储存前的部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最后一个适用后处理步骤的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`fao-who-codex-cxc36-1987`

###### 储存和灌装电力（`storage_electricity`）

冷却、搅拌、泵送和灌装用电分配给储存及出厂过程。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：冷却、罐体搅拌、泵送和灌装的分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-fdm-bat-2019`

###### 储存冷却水（`storage_cooling_water`）

归属于最终产品冷却的冷却水补水和排水分别记录。

- 选定流：冷却水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于最终产品冷却的实测补水和排水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-fdm-bat-2019`

###### 储存氮气（`storage_nitrogen`）

储罐保护和转移吹扫用氮气独立计量。

- 选定流：氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：储罐保护和转移吹扫所用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`fao-who-codex-cxc36-1987`

###### 储存加热蒸汽（`storage_steam`）

仅在保持半固态油可泵送所必需时纳入蒸汽，并计量实际用量。

- 选定流：饱和蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应给储罐和转移管线的实测蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`fao-who-codex-cxc36-1987`

###### 高密度聚乙烯桶（`hdpe_drum`）

HDPE 桶是所声明包装配置的主包装；散装出厂时记录该配置未使用。

- 选定流：高密度聚乙烯桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给合格包装产品的外购桶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

###### 低密度聚乙烯缠绕膜（`ldpe_stretch_film`）

固定所声明桶和托盘包装所用 LDPE 缠绕膜作为单一包装材料记录。

- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给包装产品的外购膜质量，扣除已记录边角料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

###### 木托盘（`wooden_pallet`）

所声明包装配置使用的木托盘按经核验复用记录核算。

- 选定流：木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按有记录复用次数核算后发放给包装产品的托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装部分氢化大豆油（`packaged_hydrogenated_soybean_oil`）

本行为参考产品；包装质量不计入 1,000 kg 参考数量。

- 选定流：部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后正好 1,000 kg 净重合格参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021`

##### 废物流

###### 灌装油损（`filling_oil_loss`）

储存和灌装中的溢漏、排放或拒收油与过滤阶段规格外油分别记录。

- 选定流：废部分氢化大豆油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测收集油加经对账的灌装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-fdm-bat-2019`

###### 损坏 HDPE 桶（`damaged_hdpe_drum`）

拒收或损坏的 HDPE 桶按去向作为具体包装废物流记录。

- 选定流：废高密度聚乙烯桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线记录的实测拒收或损坏桶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

###### LDPE 包装废物（`ldpe_packaging_waste`）

薄膜边角料和拒收 LDPE 膜与损坏桶和托盘分别记录。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理路线记录的实测薄膜边角料和拒收膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

###### 损坏木托盘（`damaged_wooden_pallet`）

退出复用池成为废物的托盘作为具体木质包装废物流计量。

- 选定流：废木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按有记录复用次数分配的实测托盘废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-pef-2021`

##### 基本流

###### 储存非甲烷挥发性有机物（`storage_nmvoc`）

储罐和灌装放口的有机损失在治理后按 NMVOC 报告。

- 选定流：入空气的非甲烷挥发性有机物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：治理后储罐和灌装放空负荷的实测或经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_packaging`
- 来源：`eu-fdm-bat-2019`

### 过程：设备清洗和场内废水处理（`cleaning_wastewater_treatment`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

冲洗和在线清洗所用新鲜水与冷却水分别记录。

- 选定流：工艺水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给参考产品的清洗周期实测用水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

氢氧化钠是指定碱性清洗化学品，不得描述为未指明清洗剂集合。

- 选定流：氢氧化钠溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量溶液质量，并保留浓度、密度和回收复用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 废水处理电力（`wastewater_treatment_electricity`）

泵送、曝气、分离和污泥处理用电按处理负荷分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：按处理负荷分配的泵送、曝气、分离和污泥处理分表电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含皂碱性清洗水（`soap_containing_wash_water`）

含皂化残油的碱性清洗水应在处理前计量，不得与清洁冷却排水合并。

- 选定流：含皂碱性清洗水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废水质量，并记录 pH、温度、COD 或 TOC、悬浮物和油脂负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

###### 废水处理污泥（`wastewater_treatment_sludge`）

油水分离、中和及生物或物理处理产生的污泥按湿质量和干固体报告。

- 选定流：含油废水处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测湿污泥质量，并记录干固体比例和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 排入地表水的处理后废水（`treated_wastewater_to_surface_water`）

此处只报告场内实际排放；若送场外处理，则改用送往接收处理活动的废物流。

- 选定流：排入地表水的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测处理后出水质量，并记录流量、pH、温度、COD 或 TOC、总氮、总磷和悬浮物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享前景过程 | 首先按批次或生产周期细分计量的预处理、锅炉、氢化、过滤、脱臭、储存、清洗和废水作业。可取得过程级记录时，不得分配合并的全厂总量。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_steam_and_shared_utilities` | 蒸汽、共享电力、冷却水和氮气 | 共享公用工程按实测交付量分配；无法直接计量时，采用蒸汽焓、运行时间和额定负荷等有文件依据的工程驱动因子，并进行敏感性检验。 | `iso-14044-2006`; `eu-fdm-bat-2019` |
| `allocation_rework` | 返工氢化油 | 返工油作为单独量化的内部或上游产品流保留。分配返工实际引起的追加加工，防止原生产负荷重复计算。 | `eu-pef-2021` |
| `allocation_residue_and_recovery` | 废镍催化剂、脱臭馏出物、回收油和包装 | 不得在前景清单内扣除回收或再生信用。声明废物或共产品状态、质量、组成、去向及适用时的价格；在本单元过程之外应用所选研究有文件依据的寿命终止或多功能方法。 | `iso-14044-2006`; `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_oil_preparation` | `refined_oil_reception_preparation` | 油、电、蒸汽、氮气、预处理油、油损和放空 | 地磅、罐尺、转移流量计、公用工程分表、批记录和放空记录 | 批次；供应商油品；期初/期末库存；接收/转移质量；电；蒸汽；氮气压力/温度/组成；废油；放空流量/浓度 | 校准直接计量并进行批次质量对账 | kg；kWh | 每批；公用工程按计量间隔 | 至少连续 12 个代表性月，或较短生产周期的全部批次 | 服务所声明产品的全部预处理设备 | 汇总批记录后按合格产品质量归一化；核对期初库存 + 接收 = 转移 + 期末库存 + 损失 | 校准证书、供应商证明、批记录、库存对账和异常日志 |
| `cp_steam_generation` | `natural_gas_steam_generation` | 燃料、水、电、蒸汽、排污和烟气 | 燃料表、水表、电表、蒸汽表、气体组成证明和烟囱监测 | 燃料能量/热值基准；气体碳/硫；给水；冷凝水回收；电；蒸汽；排污；烟气流量和污染物浓度 | 校准计量和有文件依据的排放计算 | MJ；kg；kWh | 连续或每班；烟囱按许可频次 | 与产品数据相同期间 | 向前景路线供汽的锅炉和总管 | 按实测过程用汽分配；每项污染物单独计算 | 仪表校准、气体证明、烟气报告、计算表和蒸汽平衡 |
| `cp_hydrogenation_batch` | `nickel_catalytic_hydrogenation` | 油、氢气、镍催化剂、电、蒸汽、氮气、冷却水、产品和放空 | 反应器批记录、秤、气表、公用工程分表、实验室放行结果和放空日志 | 油投料；催化剂质量/镍含量；供氢/回收/放空条件；氮气；电；蒸汽；冷却水补排；釜底滞留；产品质量；时间/温度/压力/搅拌；碘值；反式脂肪 | 校准计量和批次质量平衡 | kg；kWh；工艺条件单位 | 每批 | 报告期内全部代表性批次 | 生产所声明产品的每台反应器 | 计算批次总量并按放行合格产品归一化；不同催化剂或油种不得合并 | 校准、催化剂证明、批记录、实验室色谱、偏差和放空记录 |
| `cp_catalyst_filtration` | `catalyst_removal_post_treatment` | 粗油、助滤剂、公用工程、过滤油、催化剂、滤饼、规格外油和放空 | 秤、转移流量计、过滤日志、废物联单和实验室分析 | 进/出油；助滤剂；电；蒸汽；废催化剂湿重/镍；滤饼质量/油/镍；游离规格外油；放空流量/浓度 | 直接称量、校准流量计和代表性取样 | kg；kWh | 每个过滤批次 | 与氢化数据相同期间 | 服务本路线的所有过滤器 | 核对油和固体，滤饼含油不得重复计作游离油损 | 校准、实验室结果、过滤日志、废物联单和质量平衡 |
| `cp_deodorization` | `conditional_deodorization` | 油、蒸汽、电、冷却水、氮气、产品、馏出物、废水和放空 | 批记录、公用工程表、罐尺、冷凝液接收器、废水表和烟气/放空记录 | 进/出油；蒸汽；电；冷却水；氮气；馏出物；废水；放空流量/浓度；真空、时间、温度 | 纳入该过程时直接计量 | kg；kWh | 每个脱臭批次 | 报告期内所有纳入批次 | 服务所声明产品的每台脱臭器 | 只对纳入批次归一化，并声明参考产品中脱臭比例 | 校准、批记录、质量放行、馏出物/废物记录和纳入声明 |
| `cp_storage_packaging` | `cooling_storage_packaging` | 产品、电、冷却水、氮气、蒸汽、包装、产品损失、包装废物和放空 | 罐尺、灌装秤、公用工程分表、包装领用记录、废物记录和放空记录 | 进油；出厂净油；电；冷却水；氮气；蒸汽；HDPE 桶；LDPE 膜；托盘质量/复用；产品损失；各包装废物；放空流量/浓度 | 直接计量和包装质量对账 | kg；kWh | 每批和每次出厂 | 与产品数据相同期间 | 所有产品罐和灌装线 | 包装不计入参考产品净质量；散装和包装配置分开 | 校准灌装秤、包装采购/领用、复用日志、废物票据和库存平衡 |
| `cp_cleaning_wastewater` | `cleaning_wastewater_treatment` | 清洗水、氢氧化钠、处理电力、清洗废水、污泥和出水 | CIP 日志、水和化学品表、处理分表、进出水表、污泥秤和实验室结果 | 水；NaOH 溶液/浓度；回收清洗液；电；废水流量/pH/温度/COD 或 TOC/油/固体；污泥湿重/干重；出水 TN/TP/TSS | 校准计量、批次化学品领用和代表性取样 | kg；kWh；浓度和负荷单位 | 每次清洗；出水按许可监测 | 与产品数据相同报告期 | 服务本路线的清洗回路和场内处理 | 按清洗批次及污染负荷分配；清洁冷却水保持分流 | CIP 记录、校准、实验室样品链、处理日志和排放记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化量 = 报告期交换量 / 报告期合格产品质量 × 1,000 kg | 交换量；合格产品质量 | 每 1,000 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_oil_mass_balance` | 预处理、氢化、过滤、脱臭和灌装 | 期初油 + 油投入 + 并入产品的氢 = 期末油 + 合格产品 + 实测含油废物 + 样品 + 有记录损失；报告残差并调查，不得直接分配给某项废物 | 库存、转移、产品、废物、样品和并入氢记录 | 经核对质量平衡及残差 | `iso-14044-2006` |
| `calc_gas_mass` | 氢气和氮气 | 气体质量 = 修正气体体积 × 声明压温基准下按组成确定的密度；回收量只扣除一次 | 表计体积；压力；温度；组成；回收气 | kg 气体 | `fillion-morsi-soybean-hydrogenation-2002` |
| `calc_boiler_emissions` | 每项锅炉排放 | 优先采用实测烟气负荷；否则污染物质量 = 实测天然气活动量 × 有文件依据的适用因子，其中 CO2 按燃料碳、SO2 按硫计算；每项污染物独立计算 | 燃料用量；热值；气体碳/硫；烟气流量/浓度或因子 | kg CO2、CH4、N2O、NOx、CO、SO2 或颗粒物 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_steam_assignment` | 用汽过程 | 分配蒸汽 = 过程实测蒸汽；无法计量时，以锅炉总管蒸汽 × 基于焓和运行记录的过程负荷占比分配 | 过程表或总管蒸汽；压力；冷凝水；负荷和运行时间 | 各过程 kg 蒸汽 | `eu-fdm-bat-2019` |
| `calc_packaging_reuse` | 可复用木托盘 | 每参考流托盘输入 = 外购替换托盘质量 / 经核验复用周期内有记录出厂产品总质量；不得假定复用次数 | 采购；托盘质量；复用/损失记录；出厂产品 | 每 1,000 kg 包装产品的 kg 托盘 | `eu-pef-2021` |
| `calc_wastewater_load` | 废水和处理后出水 | 各参数污染物负荷 = 流量比例浓度 × 废水流量；保留取样和平均期间 | 流量；浓度；取样时长 | 每 1,000 kg 产品的 kg 污染负荷和 kg 水 | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | 产品和过程身份 | 记录应证明大豆油进料、负载型镍催化剂、部分氢化终点、过滤及脱臭状态；排除其他油种、催化剂或路线批次。 | 供应商证明、催化剂证明、批记录和放行检验 |
| `dq_temporal` | 前景活动数据 | 使用覆盖季节和运行变化的连续代表期间；短于 12 个月时说明理由，并披露停工、试验和异常批次。 | 带日期表计导出、生产日历和代表性说明 |
| `dq_completeness` | 质量、能量、水、废物和排放 | 核对全部必需原子交换，解释每个缺失计量、零值或被排除过程；不得以未标记集合代替缺失数据。 | 完整性清单、平衡、零值证据和缺口登记 |
| `dq_measurement` | 仪表、秤和实验室数据 | 使用校准有效仪器；保留碘值、反式脂肪、残余镍、废水和烟气检测的取样、检出限、方法和不确定性。 | 校准、样品链、方法报告和不确定性记录 |
| `dq_source_technology` | 上游数据集 | 匹配地域、技术、能源结构、氢气来源、催化剂组成、包装和处理路线；披露替代数据年龄及不匹配。 | 数据集元数据和替代理由 |
| `dq_range_evidence` | 定量 QA 范围 | 在至少两项独立原文被核验为过程边界、单位和归一化基准相容前，不得添加经验数量范围；单一案例只作背景。 | 范围证据审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_and_route` | 身份和参考流 | 除非数据包归一化后报告净重恰为 1,000 kg 合格产品，并声明大豆油身份、负载型镍催化剂、部分氢化终点、过滤、脱臭状态和出厂配置，否则拒绝。 | `unsd-cpc-3-0`; `fao-who-codex-cxs19-1981` |
| `validate_atomic_inventory` | 清单结构 | 拒绝合并油品、公用工程、化学品、包装、废物或排放标签；逐项检查第 6 节每个选定流，包括每项锅炉污染物、包装材料和包装废物。 | `eu-fdm-bat-2019` |
| `validate_mass_balance` | 油品和固体 | 要求油品质量平衡以及镍催化剂/助滤剂和包装的独立平衡；标记无法解释的残差，防止把滤饼含油重复计作游离油损。 | `iso-14044-2006` |
| `validate_food_quality` | 参考产品放行 | 要求声明碘值或等效终点、反式脂肪、残余镍、水分/挥发物、不溶性杂质、酸价和过氧化值的检测方法和结果；适用法规及客户限值控制接收。 | `fao-who-codex-cxs19-1981`; `eu-trans-fat-regulation-2019` |
| `validate_trans_fat_market` | 投放欧盟最终消费者或零售市场的产品 | 按 Commission Regulation (EU) 2019/649 确认工业反式脂肪不超过每 100 g 脂肪 2 g；其他市场记录并按适用限值检验，不得把欧盟值视作全球通用。 | `eu-trans-fat-regulation-2019`; `who-replace-trans-fat-2020` |
| `validate_environmental_records` | 废水和废气 | 要求水、能源和原料清单，以及适用时的废水流量/pH/温度/污染负荷和废气流量/温度/NMVOC/CO/NOx/SOx/颗粒物记录；缺失监测应明确为数据缺口。 | `eu-fdm-bat-2019` |
| `validate_uuid_and_range_gaps` | 发布就绪性 | 未解决选定流 UUID 和未解决范围证据保持为审查阻塞项；不得选择近似 Tiangong 流或虚构估算以消除警告。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 `secondary_dataset` 或 `background_dataset` 的前景生产数据集 |
| downstream_use | 为采用所声明负载型镍路线的食品级部分氢化大豆油构建归因型过程或生命周期模型 |
| allowed_use | 油品身份、氢化终点、催化剂、过滤、脱臭状态、地域、期间、公用工程系统和出厂配置均匹配的研究 |
| excluded_use | 其他植物油；完全氢化；互酯化、再酯化或反油酸化；生物柴油加氢处理；配制油脂；未披露反式脂肪合规；仅按 CPC 代码选择替代方法 |
| required_metadata | 参考流限定信息；工厂地域；报告期；批次覆盖；油品供应商/精炼状态；氢气来源；催化剂组成和去向；反应器和终点；过滤；脱臭；公用工程计量；清洗/处理；包装；分配；上游数据集版本；未解决身份和范围缺口 |
| required_quality_disclosure | 质量平衡残差；仪表和实验室不确定性；缺失记录；替代数据集；异常批次；废水和废气监测覆盖；反式脂肪和残余镍方法/结果；废物去向 |
| update_trigger | 植物油、催化剂、氢气来源、反应器或终点、过滤、脱臭、燃料/蒸汽系统、清洗化学品、废水处理、包装、法定反式脂肪限值、生产地域发生变化，或年度能耗、水耗、收率、废物或排放绩效发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 文献或文件 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | 官方指南（`official_guidance`） | 联合国统计司《Central Product Classification Version 3.0》结构和解释说明，https://unstats.un.org/unsd/classifications/Econ/CPC | 分类范围以及分类语境与路线方法的区别 |
| `fao-who-codex-cxs210-1999` | 标准（`standard`） | Codex Alimentarius CXS 210-1999《Standard for Named Vegetable Oils》现行官方文本，https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ | 大豆油身份、质量和食品级进料状态 |
| `fao-who-codex-cxs19-1981` | 标准（`standard`） | Codex Alimentarius CXS 19-1981《Standard for Edible Fats and Oils Not Covered by Individual Standards》现行官方文本，https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ | 纳入氢化/酯交换食用油，以及产品质量和放行参数 |
| `fao-who-codex-cxc36-1987` | 标准（`standard`） | Codex Alimentarius CXC 36-1987《Code of Practice for the Storage and Transport of Edible Fats and Oils in Bulk》2024 修订，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 惰性储存、加热、温控、散装操作和污染预防 |
| `usda-ars-soybean-hydrogenation-2014` | 文献（`literature`） | Cheng, H.N. 等，2014，Comparison of Soybean and Cottonseed Oils upon Hydrogenation with Nickel, Palladium and Platinum Catalysts，Journal of the American Oil Chemists' Society 91:1461-1469，DOI: 10.1007/s11746-014-2487-1；USDA ARS 记录 https://www.ars.usda.gov/research/publications/publication/?seqNo115=295108 | 大豆油—氢气—镍催化路线身份，以及终点和反式脂肪监测语境 |
| `fillion-morsi-soybean-hydrogenation-2002` | 文献（`literature`） | Fillion, B. 等，2002，Kinetics, Gas-Liquid Mass Transfer, and Modeling of the Soybean Oil Hydrogenation Process，Industrial & Engineering Chemistry Research 41:697-709，DOI: 10.1021/ie0104013 | 负载型 Ni/Al2O3 路线、温度/压力/混合/传热控制和过程数据字段；不用于数量范围 |
| `herrera-guzman-soybean-hydrogenation-2025` | 文献（`literature`） | Herrera-Guzmán, K. 等，2025，Partial hydrogenation of soybean oil over a Pd/bentonite catalyst，RSC Advances 15:14292-14306，DOI: 10.1039/D5RA01198A，https://pubs.rsc.org/en/content/articlehtml/2025/ra/d5ra01198a | 独立核验氢化过程分解、催化剂过滤和痕量金属后处理；不支持镍用量或范围 |
| `eu-fdm-bat-2019` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2019/2031 食品、饮料和乳业 BAT 结论，CELEX 32019D2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng；JRC FDM BREF 2019，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries | 逐过程水、能源、原料、残余物、废水和废气清单；CIP、水流分隔、监测和处理 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 环境足迹方法，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 功能单位、参考流、生命周期清单、多功能性、数据质量、包装和下游数据集用途 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006《Environmental management — Life cycle assessment — Requirements and guidelines》，2022 年确认继续有效，https://www.iso.org/standard/38498.html | LCI 完整性、分配层级、数据质量、解释和审查 |
| `eu-trans-fat-regulation-2019` | 标准（`standard`） | Commission Regulation (EU) 2019/649 关于非动物脂肪天然存在反式脂肪，CELEX 32019R0649，https://eur-lex.europa.eu/eli/reg/2019/649 | 市场特定反式脂肪限值和企业间披露 |
| `who-replace-trans-fat-2020` | 官方指南（`official_guidance`） | 世界卫生组织，2020，《REPLACE trans fat: an action package to eliminate industrially produced trans-fatty acids》，ISBN 978-92-4-002110-5，https://www.who.int/publications/b/57274 | 健康政策理由和部分氢化油反式脂肪明确披露 |
