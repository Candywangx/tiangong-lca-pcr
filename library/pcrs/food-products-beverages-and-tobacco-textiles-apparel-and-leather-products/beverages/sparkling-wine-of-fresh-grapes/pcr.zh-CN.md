---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.sparkling-wine-of-fresh-grapes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜葡萄起泡葡萄酒

## 1. 范围与适用性

本 PCR 适用于由鲜葡萄、葡萄汁或基酒经发酵制成的起泡葡萄酒前景数据包。前景边界从所声明的酒厂门投入状态开始，到酒厂发运门处装入所声明耐压包装的净起泡葡萄酒为止。范围包括场内基酒制备、一次酒精发酵、调配、传统瓶内二次发酵或密闭罐二次发酵、路线特定的熟成与澄清、补液、清洗、制冷、包装和场内废水处理。

数据集必须声明入口物料是酿酒鲜葡萄、葡萄汁还是基酒，不得重复计入已购同类别投入的上游生产。全部或部分使用外加二氧化碳制成的加气起泡葡萄酒、低于所声明起泡葡萄酒压力规格的半起泡葡萄酒、加香葡萄酒、水果酒、葡萄酒蒸馏产品、葡萄酒醋，以及不以鲜葡萄或葡萄衍生中间品制成的产品均不适用。葡萄种植、进厂运输、分销、零售、消费和包装生命末期在更广范围研究中须通过链接数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.sparkling-wine-of-fresh-grapes |
| classification_refs | CPC 3.0: 24211 |
| covered_products | 由鲜葡萄、葡萄汁或葡萄酒经一次或二次酒精发酵获得、二氧化碳源自发酵且满足所声明适用压力规格的起泡葡萄酒 |
| excluded_products | 加气起泡葡萄酒；半起泡葡萄酒；非起泡葡萄酒；加香葡萄酒；水果酒；葡萄汁饮料；葡萄酒醋；葡萄酒蒸馏产品；完全以非葡萄原料制成的产品 |
| representative_product | 酒厂发运门处采用一种已声明耐压瓶配置、可供市场使用的鲜葡萄起泡葡萄酒 |
| production_route | 鲜葡萄、葡萄汁或外购基酒；必要时一次发酵；传统瓶内二次发酵或密闭罐二次发酵；路线特定的熟成、澄清或除渣、补液、最终封口、包装和发运 |
| market_state | 装入已声明瓶与封口系统的成品加压液体；声明实际酒精度、残糖、20 摄氏度压力、瓶型、灌装量和生产路线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在酒厂发运门提供由鲜葡萄制成、可供市场使用且二氧化碳源自发酵的起泡葡萄酒 |
| How much | 1,000 kg 净起泡葡萄酒，不含包装 |
| How well | 符合所声明法律和市场规格中的实际酒精度、残糖、二氧化碳来源、20 摄氏度过压、感官或质量称谓及包装耐压等级 |
| How long or cycle | 一个完整生产批次，包括二次发酵、所声明熟成、后处理、包装和发运 |
| reference_flow_link | 扣除已记录的葡萄酒损耗后、下游分销前，合格灌装包装内的净可售液体质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 鲜葡萄起泡葡萄酒 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | actual_alcohol_percent_by_volume；residual_sugar_g_per_L 及所声明糖度类别；excess_pressure_bar_at_20_C；carbon_dioxide_origin=fermentation；production_route=traditional_bottle 或 closed_tank 或其他已声明发酵路线；entry_material=fresh_grapes 或 grape_must 或 base_wine；bottle_type 包括材料、标称容积、空瓶质量、耐压等级、可重复使用性和颜色；closure_type；net_fill_volume；质量换算所用实测液体密度和温度；葡萄品种或调配；年份或生产期；补液做法；熟成时长；地理范围 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量归一化交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1,000 kg 不含包装的净起泡葡萄酒液体，并将每项交换归一化至该质量。 |
| `liquid_volume_to_mass` | 以体积记录的葡萄酒、葡萄汁、水和液体辅料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留原始体积、液体温度、批次特定密度、仪器标识和体积乘以密度的换算；不得假定一升等于一千克。 |
| `alcohol_strength` | 成品参考产品 | 体积分数 | 20 摄氏度时 % vol | 报告实测实际酒精度和适用总酒精度规格，并标识分析方法与取样批次。 |
| `residual_sugar` | 成品参考产品与补液控制 | 质量浓度 | g/L | 在相同分析基准上报告实测残糖及所声明糖度类别；补液添加量与成品检测值分开保留。 |
| `sparkling_pressure` | 成品参考产品 | 压力 | 20 摄氏度时表压 bar | 在最终密闭容器内测量或验证 20 摄氏度时过压，并保留温度修正和检测记录。 |
| `bottle_and_fill_conversion` | 瓶数与灌装包装记录 | 质量和计数 | kg 和件 | 分别记录瓶型、空瓶质量、标称和实际灌装体积、灌装数量、废品与净液体密度，并计算液体质量及各包装组件质量。 |
| `energy_and_fuel_separation` | 电力、外购蒸汽和场内燃料 | 能量或燃料质量/体积 | kWh、MJ、kg 或 m3 | 外购电力、外购蒸汽、天然气、液化石油气、柴油及每种其他实际燃料分别建模；保留低位或高位热值基准和换算因子。 |
| `wastewater_load` | 直接水体排放指标 | 质量 | kg | 用匹配的排水量和浓度分别计算每种污染物负荷；不得把 COD、BOD5、悬浮物、氮或磷合并为一种排放流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 酒厂门接收的酿酒鲜葡萄、酒厂门接收的葡萄汁，或为生产起泡葡萄酒而接收的外购基酒 |
| starting_condition_role | 所声明生产路线中互斥的前景入口条件 |
| product_classification_scope | 鲜葡萄发酵产生气泡的起泡葡萄酒；不包括加气和半起泡产品及非葡萄发酵饮料 |
| recursive_input_rule | 外购葡萄汁、基酒或同类别起泡葡萄酒中间品只作为一个原子产品投入并链接其上游数据集；不得在接收过程中再次重建其上游酒厂生产。 |
| upstream_dataset_requirement | 所声明葡萄衍生入口物料、酵母、糖、每种酿酒辅料、水、电力、蒸汽、每种燃料、每种制冷剂、清洗剂、仅用于压力管理的食品级二氧化碳、每个包装组件及场外处理均须有代表性上游数据集。 |
| disclosure | 披露入口物料、路线、实际酒精度、残糖、压力、二氧化碳来源、瓶型与封口、熟成时间、外包工序、产品损耗、废水去向、残余物去向、制冷剂、分配、排除阶段及全部质量或能量换算。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_winery_gate` | 起泡葡萄酒前景系统 | 纳入从所声明酒厂门入口物料到最终合格灌装包装的全部归属工序；葡萄园、外购基酒、运输、分销、使用和生命末期数据集应链接而不得重复计入。 | `unsd-cpc-3-2025`; `eu-regulation-1308-2013`; `luke-sparkling-carbon-footprint-2021` |
| `boundary_route_specific` | 传统瓶内与密闭罐生产 | 传统瓶内数据必须包括装瓶引发二次发酵、瓶内发酵、酒泥接触或所声明熟成、适用时转瓶、除渣、补液、最终封口和包装；密闭罐数据必须包括罐内引发二次发酵、加压发酵与贮存、等压澄清、冷却、补液及实际进行的等压灌装。 | `oiv-sparkling-code-2025`; `andreola-charmat-energy-2025` |
| `boundary_carbon_dioxide_origin` | 产品类别适用性 | 参考产品的二氧化碳必须源自发酵；外购二氧化碳仅在惰化、平衡压力、转移或等压灌装时记录，不得借此把加气产品认定为发酵起泡葡萄酒。 | `oiv-sparkling-definition-2025`; `eu-regulation-1308-2013` |
| `boundary_atomic_exchanges` | 每个纳入过程 | 鲜葡萄、葡萄汁、基酒、每种酵母、糖、澄清剂、稳定剂、含硫物料、清洗剂、公用工程、燃料、制冷剂、包装组件、残余物、废水流、污泥及直接排放均须分别作为原子交换列示。 | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`; `luke-sparkling-carbon-footprint-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `base_wine_preparation` | 入口物料处理与基酒制备 | required | 只应用与 entry_material 匹配的卡片；场内制备基酒时纳入一次发酵 | 生产或接收所声明基酒或发酵调配液，且不重复计入上游生产 | 1,000 kg 参考产品 |
| `traditional_bottle_secondary` | 传统瓶内二次发酵与熟成 | conditional | production_route=traditional_bottle | 进行二次发酵准备、瓶内二次发酵、酒泥接触和瓶内熟成 | 1,000 kg 参考产品 |
| `closed_tank_secondary` | 密闭罐二次发酵与稳定 | conditional | production_route=closed_tank | 进行二次发酵准备、加压发酵、冷稳定、贮存和等压澄清 | 1,000 kg 参考产品 |
| `finishing_packaging` | 路线特定后处理、补液、封口与包装 | required | 按适用情况采用传统法除渣或密闭罐等压灌装卡片 | 生产最终符合压力要求的包装起泡葡萄酒 | 1,000 kg 参考产品 |
| `cleaning_refrigeration` | 清洗、热力公用工程与制冷支持 | required | 仅记录纳入前景过程中实际使用的交换 | 记录共用卫生、热能、燃料、制冷和直接公用工程排放 | 1,000 kg 参考产品 |
| `wastewater_treatment` | 场内废水处理与排放 | conditional | 酒厂废水由前景控制范围内处理或排放 | 处理酒厂废水并分别量化污泥和水体排放流 | 1,000 kg 参考产品 |

### 过程：入口物料处理与基酒制备（`base_wine_preparation`）

#### 输入

##### 产品流

###### 酿酒鲜葡萄（`fresh_wine_grapes`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：酿酒鲜葡萄
- 流属性/单位：质量 / kg
- 数量规则：entry_material=fresh_grapes 时按批次记录验收进厂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 葡萄汁（`received_grape_must`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：葡萄汁
- 流属性/单位：质量 / kg
- 数量规则：entry_material=grape_must 时由校准体积和密度换算接收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 外购基酒（`purchased_base_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：起泡葡萄酒用基酒
- 流属性/单位：质量 / kg
- 数量规则：entry_material=base_wine 时由校准体积和密度换算接收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 一次发酵酵母（`primary_fermentation_yeast`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：一次发酵用活性葡萄酒酵母
- 流属性/单位：质量 / kg
- 数量规则：场内进行一次发酵时记录称量添加的酵母
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 葡萄汁或基酒用二氧化硫（`base_wine_sulfur_dioxide`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：由制剂质量和浓度计算活性二氧化硫质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

#### 输出

##### 产品流

#### 输出

##### 产品流

###### 已制备基酒（`prepared_base_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：起泡葡萄酒用基酒
- 流属性/单位：质量 / kg
- 数量规则：由校准体积和批次密度计算转入调配的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

##### 废物流

##### 废物流

###### 葡萄梗（`grape_stems`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：葡萄梗
- 流属性/单位：质量 / kg
- 数量规则：场内对鲜葡萄去梗时移出的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-food-beverage-bemp-2017`

###### 葡萄果渣（`grape_pomace`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：葡萄果渣
- 流属性/单位：质量 / kg
- 数量规则：场内分离的果皮、籽和果肉湿质量，并记录去向和市场属性
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 一次发酵葡萄酒泥（`primary_wine_lees`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：一次发酵葡萄酒泥
- 流属性/单位：质量 / kg
- 数量规则：调配前移除的湿酒泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

##### 基本流

##### 基本流

###### 一次发酵生物源二氧化碳（`primary_biogenic_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测或由糖平衡计算场内一次发酵释放的二氧化碳
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`oiv-sparkling-code-2025`

###### 一次发酵乙醇排放（`primary_ethanol_air`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：乙醇，排入空气
- 流属性/单位：质量 / kg
- 数量规则：一次发酵乙醇损失的场址实测值或有文件依据的工程估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-food-beverage-bemp-2017`

### 过程：传统瓶内二次发酵与熟成（`traditional_bottle_secondary`）

#### 输入

##### 产品流

###### 瓶内二次发酵用基酒（`traditional_base_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：起泡葡萄酒用基酒
- 流属性/单位：质量 / kg
- 数量规则：传统瓶内路线装瓶引发二次发酵所用调配基酒质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 瓶内发酵引发糖（`traditional_tirage_sugar`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：蔗糖
- 流属性/单位：质量 / kg
- 数量规则：装瓶引发二次发酵用糖液中装入瓶内的称量蔗糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 瓶内路线二次发酵酵母（`traditional_secondary_yeast`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二次发酵用活性葡萄酒酵母
- 流属性/单位：质量 / kg
- 数量规则：装瓶引发二次发酵时添加的称量酵母接种物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 瓶内路线磷酸氢二铵营养盐（`traditional_dap`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：磷酸氢二铵
- 流属性/单位：质量 / kg
- 数量规则：使用时记录称量添加的营养盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`

###### 瓶内路线膨润土澄清剂（`traditional_bentonite`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：膨润土
- 流属性/单位：质量 / kg
- 数量规则：装瓶引发二次发酵时使用的称量膨润土
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 耐压发酵瓶（`traditional_fermentation_bottle`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：耐压玻璃起泡葡萄酒瓶
- 流属性/单位：质量 / kg
- 数量规则：合格瓶数乘以所声明瓶型的实测空瓶质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 发酵瓶皇冠盖（`traditional_crown_cap`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：钢制皇冠盖
- 流属性/单位：质量 / kg
- 数量规则：皇冠盖数量乘以供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-sparkling-code-2025`

#### 输出

##### 产品流

#### 输出

##### 产品流

###### 除渣前瓶内熟成起泡葡萄酒（`traditional_conditioned_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：瓶内熟成鲜葡萄起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：转瓶和除渣前合格熟成瓶内液体质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

##### 基本流

##### 基本流

###### 瓶内路线损失释放的生物源二氧化碳（`traditional_biogenic_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：糖平衡中未保留在可售葡萄酒内的二氧化碳，加上实测排气和除渣损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`oiv-sparkling-code-2025`

### 过程：密闭罐二次发酵与稳定（`closed_tank_secondary`）

#### 输入

##### 产品流

###### 密闭罐二次发酵用基酒（`tank_base_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：起泡葡萄酒用基酒
- 流属性/单位：质量 / kg
- 数量规则：加入耐压罐的调配基酒质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 密闭罐发酵引发糖（`tank_tirage_sugar`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：蔗糖
- 流属性/单位：质量 / kg
- 数量规则：罐内二次发酵引发糖液中加入的称量蔗糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 密闭罐路线二次发酵酵母（`tank_secondary_yeast`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二次发酵用活性葡萄酒酵母
- 流属性/单位：质量 / kg
- 数量规则：加入耐压罐的称量酵母接种物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 密闭罐路线磷酸氢二铵营养盐（`tank_dap`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：磷酸氢二铵
- 流属性/单位：质量 / kg
- 数量规则：使用时记录称量添加的营养盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`

###### 密闭罐路线膨润土澄清剂（`tank_bentonite`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：膨润土
- 流属性/单位：质量 / kg
- 数量规则：使用时记录称量添加的膨润土
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 罐内发酵与冷稳定用电（`tank_electricity`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：搅拌、泵送、制冷、澄清和压力控制的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`andreola-charmat-energy-2025`; `luke-sparkling-carbon-footprint-2021`

###### 等压操作用食品级二氧化碳（`tank_food_grade_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：食品级二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：仅用于惰化、压力平衡、转移或等压灌装的计量外购二氧化碳
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`

#### 输出

##### 产品流

#### 输出

##### 产品流

###### 已澄清散装起泡葡萄酒（`tank_bulk_sparkling_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：鲜葡萄散装起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：等压转移至最终灌装的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`; `andreola-charmat-energy-2025`

##### 废物流

##### 废物流

###### 密闭罐二次发酵酒泥（`tank_secondary_lees`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：密闭罐二次发酵葡萄酒泥
- 流属性/单位：质量 / kg
- 数量规则：罐内澄清时移出的湿酒泥质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

##### 基本流

##### 基本流

###### 密闭罐损失释放的生物源二氧化碳（`tank_biogenic_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：糖平衡中未保留在可售葡萄酒内的二氧化碳，加上实测排气和转移损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`oiv-sparkling-code-2025`

### 过程：路线特定后处理、补液、封口与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 进入除渣的瓶内熟成葡萄酒（`finishing_traditional_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：瓶内熟成鲜葡萄起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：traditional_bottle 路线中进入转瓶和除渣的合格质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 进入等压灌装的散装起泡葡萄酒（`finishing_tank_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：鲜葡萄散装起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：closed_tank 路线中进入等压灌装的合格质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`oiv-sparkling-code-2025`

###### 补液用葡萄酒（`dosage_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：补液用葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：使用时记录加入补液的葡萄酒质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`

###### 补液用糖（`dosage_sugar`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：蔗糖
- 流属性/单位：质量 / kg
- 数量规则：使用时记录加入补液的称量蔗糖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`

###### 补液用柠檬酸稳定剂（`dosage_citric_acid`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：柠檬酸
- 流属性/单位：质量 / kg
- 数量规则：使用时记录加入补液的称量柠檬酸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 补液用二氧化硫（`dosage_sulfur_dioxide`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：使用时由补液配方计算活性二氧化硫质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 密闭罐路线耐压成品瓶（`tank_final_bottle`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：耐压玻璃起泡葡萄酒瓶
- 流属性/单位：质量 / kg
- 数量规则：合格瓶数乘以所声明瓶型的实测空瓶质量；传统路线已在发酵装瓶时记录的瓶不得重复计入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### 天然软木塞（`natural_cork_closure`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：天然软木起泡葡萄酒塞
- 流属性/单位：质量 / kg
- 数量规则：采用该封口时，合格塞数乘以供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 合成聚合物瓶塞（`synthetic_polymer_closure`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：聚乙烯起泡葡萄酒塞
- 流属性/单位：质量 / kg
- 数量规则：采用该替代封口时，合格塞数乘以供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021`

###### 丝笼（`wire_cage`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：钢制起泡葡萄酒丝笼
- 流属性/单位：质量 / kg
- 数量规则：合格丝笼数量乘以供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 纸质瓶标（`paper_label`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：涂布纸瓶标
- 流属性/单位：质量 / kg
- 数量规则：已贴标签数量乘以实测或供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 瓦楞纸箱（`corrugated_carton`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：使用纸箱数量乘以实测或供应商声明单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 聚乙烯托盘膜（`polyethylene_film`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：低密度聚乙烯拉伸膜
- 流属性/单位：质量 / kg
- 数量规则：发放至合格托盘的净膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

#### 输出

##### 产品流

#### 输出

##### 产品流

###### 成品起泡葡萄酒（`finished_sparkling_wine`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：鲜葡萄起泡葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：合格最终包装内恰好 1,000 kg 净液体
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`reference-mass-identity`

##### 废物流

##### 废物流

###### 除渣移出的二次发酵酒泥（`disgorged_secondary_lees`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：瓶内二次发酵葡萄酒泥
- 流属性/单位：质量 / kg
- 数量规则：除渣时收集的湿酒泥和葡萄酒损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`oiv-sparkling-code-2025`

###### 破损或不合格玻璃瓶（`rejected_glass_bottle`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：废耐压玻璃瓶
- 流属性/单位：质量 / kg
- 数量规则：离开前景控制范围的破损或质量不合格瓶实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

##### 基本流

##### 基本流

###### 除渣或灌装释放的二氧化碳（`finishing_biogenic_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：后处理释放的发酵二氧化碳实测值或由压力和质量平衡计算的值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`oiv-sparkling-code-2025`

###### 除渣或灌装乙醇排放（`finishing_ethanol_air`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：乙醇，排入空气
- 流属性/单位：质量 / kg
- 数量规则：除渣、补液、转移和灌装中乙醇损失的场址实测值或工程估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-food-beverage-bemp-2017`

### 过程：清洗、热力公用工程与制冷支持（`cleaning_refrigeration`）

#### 输入

##### 产品流

###### 清洗水（`cleaning_water`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：过程水
- 流属性/单位：体积 / m3
- 数量规则：设备、管线、罐、瓶和地面清洗的计量供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`; `luke-sparkling-carbon-footprint-2021`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：氢氧化钠
- 流属性/单位：质量 / kg
- 数量规则：由清洗制剂及其浓度计算活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_agent_records`
- 来源：`eu-fdm-bat-2019`; `luke-sparkling-carbon-footprint-2021`

###### 柠檬酸清洗剂（`citric_acid_cleaner`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：柠檬酸
- 流属性/单位：质量 / kg
- 数量规则：清洗或除垢使用的活性柠檬酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_agent_records`
- 来源：`eu-fdm-bat-2019`; `luke-sparkling-carbon-footprint-2021`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：过氧乙酸
- 流属性/单位：质量 / kg
- 数量规则：使用时由消毒制剂和浓度计算活性过氧乙酸质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_agent_records`
- 来源：`eu-fdm-bat-2019`

###### 外购电力（`shared_electricity`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：基酒处理、泵送、瓶处理、转瓶、除渣、灌装、压缩空气、清洗和制冷的归属计量电力，不含已单独计量的密闭罐路线电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`andreola-charmat-energy-2025`; `luke-sparkling-carbon-footprint-2021`

###### 外购蒸汽（`purchased_steam`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：清洗、消毒或暖瓶使用的计量外购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 天然气燃料（`natural_gas_fuel`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：场内燃烧的计量天然气，并记录热值基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-food-beverage-bemp-2017`

###### 液化石油气燃料（`lpg_fuel`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：液化石油气
- 流属性/单位：质量 / kg
- 数量规则：场内燃烧的称量或发票核对液化石油气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`luke-sparkling-carbon-footprint-2021`

###### 柴油燃料（`diesel_fuel`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：归属于前景系统的固定或专用场内设备所燃烧的计量柴油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-food-beverage-bemp-2017`

###### 氨制冷剂补充（`ammonia_refrigerant`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：制冷剂级氨
- 流属性/单位：质量 / kg
- 数量规则：安装氨制冷设备时按库存平衡计算补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### R-134a 制冷剂补充（`r134a_refrigerant`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：1,1,1,2-四氟乙烷制冷剂 R-134a
- 流属性/单位：质量 / kg
- 数量规则：安装 R-134a 设备时按库存平衡计算补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### R-404A 制冷剂补充（`r404a_refrigerant`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：制冷剂混合物 R-404A
- 流属性/单位：质量 / kg
- 数量规则：安装 R-404A 设备时按库存平衡计算补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 废物流

#### 输出

##### 废物流

###### 酒厂清洗废水（`cleaning_wastewater`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：酒厂清洗与消毒废水
- 流属性/单位：体积 / m3
- 数量规则：处理或场外转移前清洗与消毒产生的计量废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`

##### 基本流

##### 基本流

###### 氨制冷剂排入空气（`ammonia_refrigerant_air`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg
- 数量规则：扣除回收及有记录维修转移后的氨库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### R-134a 制冷剂排入空气（`r134a_refrigerant_air`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：扣除回收及有记录维修转移后的 R-134a 库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### R-404A 制冷剂排入空气（`r404a_refrigerant_air`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：制冷剂混合物 R-404A，排入空气
- 流属性/单位：质量 / kg
- 数量规则：扣除回收及有记录维修转移后的 R-404A 库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### 场内燃烧化石二氧化碳（`combustion_fossil_co2`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：二氧化碳，化石，排入空气
- 流属性/单位：质量 / kg
- 数量规则：各燃料活动量乘以有文件依据的化石二氧化碳因子后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021`

###### 场内燃烧甲烷（`combustion_ch4`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：甲烷，化石，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每种燃料活动量乘以其甲烷因子，仅在原子因子计算后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021`

###### 场内燃烧氧化亚氮（`combustion_n2o`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每种燃料活动量乘以其氧化亚氮因子，仅在原子因子计算后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-pef-2021`

###### 场内燃烧氮氧化物（`combustion_nox`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每种燃料活动量乘以其氮氧化物因子，仅在原子因子计算后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-fdm-bat-2019`

### 过程：场内废水处理与排放（`wastewater_treatment`）

#### 输入

##### 废物流

###### 未处理酒厂废水（`untreated_winery_wastewater`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：未处理酒厂废水
- 流属性/单位：体积 / m3
- 数量规则：纳入酒厂过程送入场内处理的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`

##### 产品流

##### 产品流

###### 废水处理用电（`wastewater_electricity`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：泵送、曝气、混合、脱水和控制的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019`

###### 聚丙烯酰胺絮凝剂（`wastewater_flocculant`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：聚丙烯酰胺絮凝剂
- 流属性/单位：质量 / kg
- 数量规则：使用时投加至处理过程的活性絮凝剂质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_records`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 产品流

#### 输出

##### 产品流

###### 回用处理水（`treated_water_reuse`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：回用处理过程水
- 流属性/单位：体积 / m3
- 数量规则：转至有记录回用途径的计量处理水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 废物流

###### 废水处理污泥（`wastewater_sludge`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：酒厂废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：记录湿污泥质量、实测干物质分数和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

##### 基本流

###### 排入水体的化学需氧量（`wastewater_cod`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：化学需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以实测 COD 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 排入水体的五日生化需氧量（`wastewater_bod5`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：五日生化需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以实测 BOD5 浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 排入水体的总悬浮物（`wastewater_tss`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：悬浮物，排入水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以实测总悬浮物浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 排入水体的总氮（`wastewater_total_n`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：总氮，排入水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以实测总氮浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 排入水体的总磷（`wastewater_total_p`）

本卡仅记录所声明过程和适用路线中的这一项原子交换；其数量按所列采集协议取得。

- 选定流：总磷，排入水体
- 流属性/单位：质量 / kg
- 数量规则：匹配排水量乘以实测总磷浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 酒厂共用工序 | 优先细分计量过程、路线批次、贮存时段、清洗周期、包装批次和废水负荷，使物理记录直接归属于起泡葡萄酒产品。 | `eu-pef-2021` |
| `allocation_recycled_internal` | 前景系统内回用的葡萄酒、酒泥、补液物料、清洗液和水 | 内部回用作为内部转移建模，不再次施加上游负荷；仍须清点额外处理、能源、损失和排放。 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_residue_co_product` | 具有经济价值的葡萄果渣、葡萄酒泥及其他外运物料 | 依据去向和市场证据判定输出属性；无法细分而仍需分配时，一致采用研究所遵循方法，并披露物理和经济分配敏感性。 | `luke-sparkling-carbon-footprint-2021`; `eu-pef-2021` |
| `allocation_packaging_reuse` | 可重复灌装瓶、周转箱、托盘或耐压容器 | 分别记录首次使用、重复使用次数、损失、清洗和返程运输，并采用研究所遵循方法；不得无记录假定重复使用次数。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | base_wine_preparation; traditional_bottle_secondary; closed_tank_secondary; finishing_packaging | 葡萄衍生投入、中间品、产品和损失 | 秤重、罐容、灌装与库存记录 | lot_id; material_name; route; opening_stock; received_mass_or_volume; temperature; density; transfers; closing_stock; saleable_output; loss | 校准称重，或以匹配密度换算罐容/灌装体积 | kg、L、degrees C、kg/L | 每批和每次转移 | 包括熟成在内的完整所声明生产期 | 全部受控酒厂区域和外包工序 | 先按过程与路线平衡，再归一化至 1,000 kg 产品 | 校准记录、罐容表、批次单、灌装报告、库存核对 |
| `cp_ingredient_records` | all production processes | 酵母、糖、含硫物料、澄清剂、稳定剂、营养盐、二氧化碳和处理化学品 | 批次配方和领用记录 | product_name; formulation; active_fraction; lot; quantity; unit; process; route; returned_quantity | 称量领用和制剂活性量计算 | kg 或 L | 每次添加 | 完整所声明生产期 | 全部纳入过程 | 按单一原子辅料和路线汇总活性质量 | 供应商规格、秤具校准、签署配方 |
| `cp_packaging_records` | traditional_bottle_secondary; finishing_packaging | 瓶、盖、塞、丝笼、标签、纸箱和膜 | 包装清单、计数与废品记录 | component; material; supplier; unit_mass; issued_count; accepted_count; reject_count; refillability; bottle_pressure_rating | 计数核对乘以组件特定单件质量 | 件和 kg | 每个包装批次 | 完整所声明生产期 | 场内及外包包装 | 组件质量等于净使用数量乘以单件质量；不得使用合并包装行 | 供应商声明、耐压证书、计数和废品核对 |
| `cp_energy_records` | closed_tank_secondary; finishing_packaging; cleaning_refrigeration; wastewater_treatment | 电力和外购蒸汽 | 仪表、发票和运行记录 | meter_id; reading; time; process; route; steam_mass_or_energy; conversion_factor | 优先校准分表；否则使用可辩护的运行时间分配 | kWh 或 MJ | 连续或每批 | 包括冷藏和熟成的完整生产期 | 全部纳入设备 | 优先直接归属；剩余共用量采用有文件依据的物理驱动量 | 仪表校准、发票、运行日志、分配工作表 |
| `cp_fuel_records` | cleaning_refrigeration | 天然气、液化石油气、柴油和每种其他燃料 | 仪表、交付、库存和设备日志 | fuel_identity; opening_stock; purchases; closing_stock; meter; heating_value; equipment; time | 库存核对和校准燃料计量 | kg、m3、L 或 MJ | 每次交付及生产期末 | 完整所声明生产期 | 可归属场内燃烧 | 各燃料分别计算后再形成任何能量总量 | 发票、罐存、仪表校准、热值证书 |
| `cp_water_records` | all winery processes | 过程水和清洗水 | 水表和清洗周期记录 | meter_id; start; end; process; cycle; reuse_source; destination | 分表或经验证清洗周期估算 | m3 | 连续或每个清洗周期 | 完整所声明生产期 | 全部纳入过程 | 按过程区分新水、回用水、过程水和清洗水 | 仪表校准和清洗日志 |
| `cp_cleaning_agent_records` | cleaning_refrigeration | 每种清洗或消毒化学品 | 清洗配方和领用记录 | chemical_identity; formulation; active_fraction; quantity; cycle; recovered_quantity; discharge_route | 称量或计量添加及活性质量计算 | kg 或 L | 每个清洗周期 | 完整所声明生产期 | 全部纳入系统 | 按单一化学品汇总活性质量；仅扣除有记录的回收物料 | 供应商安全/规格资料和清洗日志 |
| `cp_refrigerant_records` | cleaning_refrigeration | 每种装机制冷剂及损失 | 设备台账、采购、回收和维修记录 | equipment_id; refrigerant_identity; opening_charge; additions; recovered_mass; closing_charge; service_event; allocation_driver | 按制冷剂进行年度或生产期库存平衡 | kg | 每次维修和生产期末 | 覆盖所声明生产期的期间 | 服务于纳入过程的全部制冷设备 | 损失 = 期初 + 添加 - 回收 - 期末；采用有文件依据的制冷服务驱动量分配 | 持证技师记录、采购与回收凭证、设备台账 |
| `cp_residue_records` | all production processes | 葡萄梗、果渣、酒泥、玻璃废品、污泥及每种其他废物 | 容器称重和去向记录 | residue_identity; wet_mass; dry_matter; source_process; destination; market_status; treatment | 校准秤或称重容器核对 | kg | 每次移出 | 完整所声明生产期 | 全部纳入过程和场内处理 | 按去向分别汇总每种残余物 | 秤具校准、废物联单、销售或转移记录 |
| `cp_wastewater_records` | cleaning_refrigeration; wastewater_treatment | 废水、处理水和污染物负荷 | 流量计和实验室记录 | source_process; flow; destination; sample_time; COD; BOD5; TSS; total_N; total_P; detection_limit | 可行时流量比例采样及认可实验室分析 | m3 和 mg/L | 连续流量；代表性采样 | 包括清洗峰值的完整生产期 | 每个受控排放和转移点 | 将浓度与排水量匹配；每种污染物分别计算 | 仪表校准、样品链、实验室 QA/QC |
| `cp_direct_emissions` | all production processes | 发酵气体、乙醇、制冷剂损失和燃料排放 | 测量、质量平衡或因子计算 | substance; source; activity; retained_quantity; factor; factor_source; time; route | 优先直接测量；否则使用有文件依据的物质特定计算 | kg | 每批或每生产期 | 完整所声明生产期 | 全部纳入直接排放源 | 每种物质和来源分别计算后再汇总 | 仪器 QA、质量平衡、因子标识、计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_liquid_mass` | 以体积记录的葡萄酒、葡萄汁、水和液体辅料 | mass_kg = volume_L 乘以匹配温度下 density_kg_per_L | 校准体积；实测温度；批次特定密度 | 原子液体质量 | `reference-mass-identity` |
| `calc_reference_output` | 最终灌装包装 | net_liquid_mass = 合格灌装体积总和乘以匹配成品酒密度；不含包装质量 | 合格瓶数；实际灌装体积；密度；温度；废品 | 归一化后恰好 1,000 kg 参考液体 | `reference-mass-identity` |
| `calc_packaging_mass` | 每个包装组件 | component_mass = 净使用数量乘以 component_unit_mass；膜直接称量 | 发放、退回、废弃和合格数量；单件质量 | 分开的瓶、塞、丝笼、标签、纸箱和膜质量 | `eu-pef-2021` |
| `calc_active_ingredient` | 二氧化硫、清洗化学品和配制辅料 | active_mass = formulation_mass 乘以 active_fraction | 制剂数量和供应商浓度 | 原子活性物料质量 | `oiv-sparkling-code-2025` |
| `calc_fermentation_co2` | 一次和二次发酵 | released_biogenic_CO2 = 糖平衡生成量 - 产品中溶解 CO2 - 回收 CO2 - 实测受控损失 | 消耗糖；产品 CO2；回收量；批次损失 | 按过程分别记录生物源二氧化碳排放 | `oiv-sparkling-code-2025` |
| `calc_refrigerant_loss` | 每种制冷剂 | loss = opening_charge + additions - recovered_mass - closing_charge | 设备库存和维修记录 | 氨、R-134a、R-404A 或另加明确原子制冷剂行的分别排放质量 | `eu-fdm-bat-2019` |
| `calc_combustion_emissions` | 每种直接燃烧排放 | emission_mass = fuel_activity 乘以有文件依据的燃料和物质特定因子 | 每种燃料量；热值；因子标识 | 分开的化石 CO2、CH4、N2O 和 NOx 排放 | `eu-pef-2021` |
| `calc_wastewater_load` | 每种直接水体排放指标 | load_kg = discharge_volume_m3 乘以 concentration_mg_per_L 除以 1,000 | 匹配排水量与浓度 | 分开的 COD、BOD5、TSS、总氮和总磷负荷 | `eu-fdm-bat-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个代表性产品组须保留实际酒精度、残糖、20 摄氏度压力、二氧化碳来源、路线、葡萄基础、瓶型、封口、补液和熟成记录。 | 成品证书、实验室报告、压力检测、批次与包装规格 |
| `dq_route_completeness` | 过程图 | 证明从入口物料到成品包装的一条一致路线，纳入每个实际进行的条件过程，且不重复计入外购基酒生产。 | 路线图、批次流转单、供应商数据集链接、质量平衡 |
| `dq_atomic_inventory` | 全部交换 | 每个流须保留一个身份、数量、单位、来源过程和去向；场址使用其他燃料、制冷剂、添加剂、包装组件、废物或排放时须另加原子行。 | 总账、批次单、仪表图、化学品与设备台账 |
| `dq_temporal` | 前景记录 | 覆盖一个完整代表性生产期，包括场内一次生产、二次发酵、完整所声明熟成或冷藏期、包装、清洗和废水处理。 | 带日期仪表导出、批次日历、期初期末库存记录 |
| `dq_measurement` | 质量、体积、能量、压力、糖、酒精、水和污染物 | 使用校准仪器或有文件依据的工程估算，并保留温度、密度、换算、检出限和不确定性记录。 | 校准证书、实验室 QA/QC、换算工作表 |
| `dq_completeness` | 物料平衡与排放 | 核对葡萄衍生物料、产品、酒损、酒泥、果渣、包装废品、废水、污泥、发酵二氧化碳、制冷剂及直接燃料排放；解释全部差额。 | 签署生产期平衡和完整性审查 |
| `dq_range_evidence` | 重要清单数量 | 场址记录作为数据集数值；至少两份独立且边界兼容的原文支持综合之前，不得编写或强制执行经验 PCR range。 | 链接至原始全文的 range 证据审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求单数产品名称、Mass UUID、质量单位组 UUID、kg 单位、1,000 kg 净液体，以及全部酒精度、糖度、压力、路线、瓶型、封口、密度和换算限定信息；仅当 manifest 审查元数据记录缺口时，参考产品流 UUID 可在候选阶段保持未解决。 | `unsd-cpc-3-2025`; `eu-regulation-1308-2013`; `oiv-sparkling-definition-2025` |
| `validate_product_eligibility` | 成品起泡葡萄酒 | 确认产品二氧化碳源自发酵、20 摄氏度适用过压、实际及总酒精度要求和残糖声明；拒绝以加气或半起泡产品替代。 | `eu-regulation-1308-2013`; `oiv-sparkling-definition-2025` |
| `validate_route` | 过程图 | 要求恰好一条所声明入口物料路线和一条所声明起泡路线；传统瓶内生产须有瓶内发酵与路线后处理，密闭罐生产须有罐内发酵、实际进行的澄清或稳定及等压灌装。 | `oiv-sparkling-code-2025`; `andreola-charmat-energy-2025` |
| `validate_atomic_inventory` | 清单行 | 拒绝合并辅料、化学品、公用工程、燃料、制冷剂、包装、废物、废水、污泥或排放标签；每项实际交换须对应一个物理或化学上具体的流。 | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017` |
| `validate_mass_and_conversion` | 物料平衡 | 核对期初库存加葡萄衍生投入、辅料和包装，与可售液体、期末库存、残余物、酒损、排放和废品；验证每项体积转质量及计数转质量换算。 | `eu-pef-2021`; `luke-sparkling-carbon-footprint-2021` |
| `validate_packaging` | 最终包装 | 要求瓶型与耐压等级、空瓶质量、标称和实际灌装量、封口类型，以及使用时分别记录瓶、盖、塞、丝笼、标签、纸箱和膜；禁止在最终包装重复计入传统发酵瓶。 | `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021` |
| `validate_wastewater_and_refrigerants` | 清洗、制冷与废水处理 | 每种制冷剂补充和损失、来源过程废水量、污泥去向，以及监测或法规要求时分开的 COD、BOD5、TSS、总氮和总磷排放负荷均为必需。 | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017` |
| `validate_ranges` | 清单数量 | 拒绝基于一家工厂、一个案例、摘要或不兼容边界编写经验 range；审查两份独立兼容原文之前，只要求无 PCR range 的前景数值，并保留 manifest 未解决 range 记录。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 酒厂发运门处采用已声明耐压包装、可供市场使用的鲜葡萄起泡葡萄酒前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学审查和发布后可作 `background_dataset` |
| allowed_use | 与所声明入口物料、发酵路线、产品规格、瓶系统、生产期、地理和边界一致的产品与过程 LCA、环境足迹研究、供应链清单、热点分析和情景建模 |
| excluded_use | 加气或半起泡葡萄酒、非起泡或加香葡萄酒、水果酒、蒸馏产品、未披露路线替代，或仅依据本酒厂门数据集提出从摇篮到坟墓声明 |
| required_metadata | PCR id 与版本；入口物料；葡萄品种或调配；年份或生产期；实际酒精度；残糖和类别；20 摄氏度过压；二氧化碳来源；传统瓶内或密闭罐路线；熟成时长；补液；瓶材料、颜色、耐压等级、空瓶质量、容积和可重复使用性；封口；净灌装量；密度和温度；地理；数据期间；制冷剂；废水路线；残余物去向；分配；上游数据集身份 |
| required_quality_disclosure | 一手与二手数据比例；仪表和实验室覆盖；测量与换算方法；校准；时间、地理和技术代表性；完整性；不确定性；分配敏感性；缺失 UUID；缺失 range 证据；排除项和外包工序 |
| update_trigger | 入口物料、葡萄或葡萄酒来源、产品规格、发酵或稳定路线、熟成时间、能源系统、燃料、制冷剂、清洗化学品、瓶或封口系统、废水处理、残余物去向、分配方法、适用法规或重大数据质量发现发生变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，《产品总分类》第 3.0 版，小类 24211“鲜葡萄起泡葡萄酒”：https://unstats.un.org/unsd/classifications/Econ/CPC | 官方产品类别身份；访问日期 2026-08-23 |
| `oiv-sparkling-definition-2025` | official_guidance | 国际葡萄与葡萄酒组织，《国际酿酒实践法典》第一部分 I.4.4 起泡葡萄酒：https://www.oiv.int/standards/international-code-of-oenological-practices/part-i-definitions/special-wines/sparkling-wines | 发酵来源二氧化碳、压力规格、路线及糖度类别身份；访问日期 2026-08-23 |
| `oiv-sparkling-code-2025` | official_guidance | 国际葡萄与葡萄酒组织，《国际酿酒实践法典》第二部分，特殊葡萄酒：起泡葡萄酒：https://www.oiv.int/standards/international-code-of-oenological-practices/part-ii-oenological-treatments-and-practices/special-wines%3A-sparkling-wines | 基酒、调配液、引发二次发酵、酵母、营养盐、澄清剂、二次发酵、瓶内路线、除渣、罐内路线、澄清、冷却、补液和等压灌装；访问日期 2026-08-23 |
| `eu-regulation-1308-2013` | standard | 欧盟第 1308/2013 号法规，附件 VII 第二部分，合并文本：https://eur-lex.europa.eu/eli/reg/2013/1308 | 起泡葡萄酒法律定义、发酵来源、压力和酒精度要求；访问日期 2026-08-23 |
| `eu-fdm-bat-2019` | standard | 欧盟委员会实施决定 (EU) 2019/2031，食品、饮料和乳品行业最佳可行技术结论：https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 能源、水、清洗化学品、低 GWP 制冷剂、残余物分离、废水控制、处理、监测和直接排放规则；访问日期 2026-08-23 |
| `eu-food-beverage-bemp-2017` | official_guidance | 欧盟委员会联合研究中心，《食品与饮料制造业最佳环境管理实践》，2017：https://susproc.jrc.ec.europa.eu/activities/emas/documents/FoodBeverageBEMP.pdf | 酒厂用水、清洗、废水组成、冷却、能源、废物和排放过程分解；访问日期 2026-08-23 |
| `luke-sparkling-carbon-footprint-2021` | official_guidance | Usva, K. 等，《产品环境碳足迹报告：有机起泡葡萄酒》，Natural Resources and Bioeconomy Studies 89/2021，芬兰自然资源研究所：https://jukuri.luke.fi/handle/10024/552333 | 基酒、辅料、二次发酵、能源、水、清洗、酒泥、灌装、玻璃瓶、LPG 和包装清单需求的机构原始案例证据；不用于编写 PCR range |
| `andreola-charmat-energy-2025` | literature | Andreola, F. 等，Energy optimization of the Martinotti-Charmat refermentation process in sparkling wines production，Cleaner Engineering and Technology 27 (2025) 101018，DOI：https://doi.org/10.1016/j.clet.2025.101018 | 密闭罐再发酵、冷稳定、贮存、制冷、过滤和灌装的开放同行评审原始工艺证据；不用于编写 PCR range |
| `eu-pef-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 参考流一致性、前景数据质量、分配层级、包装和计算披露；访问日期 2026-08-23 |
| `reference-mass-identity` | method_factor | PCR 参考质量恒等式：归一化可售起泡葡萄酒液体输出等于 1,000 kg，包装另行列入清单 | 参考流归一化和固定输出数量 |
