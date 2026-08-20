---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hat-forms-hat-bodies-and-hoods-of-felt-plateaux-and-manchons-of-felt-hat-shapes-plaited-3c814837
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 毡制帽胎、帽坯和帽盔、平顶毡帽和毡帽套；编结的或用各种材料组合制成的帽壳

## 1. 范围与适用性

本 PCR 适用于未制成毡帽胎、帽坯、帽盔、平顶毡坯和筒状毡坯，以及由任何材料编结或条带组装而成的未制成帽形坯的前景数据包。毡制路线从收到的已制备羊毛或毛皮纤维开始；编结/条带路线从收到的篾条、编条或具体条带开始，直至所声明的 CPC 28261 工厂门状态。

参考产品不得定型为最终帽形，也不得具有制成帽檐。编结或条带组装帽形坯还必须未衬里、未装饰。成品帽、最终款式定型、制成帽檐、衬里、帽带、装饰、零售包装、配送、使用和生命终期均在本 PCR 之外。动物饲养、毛皮硝制与分离、羊毛洗涤、作物种植、纸或聚合物生产以及外购物料制造属于上游，应通过供应商或二手数据集链接。

允许两类路线，未经披露代表性混合不得平均：(a) 毡纤维制备、纤维网/锥体成形、硬化/缩绒、有条件的染色/漂洗和干燥；(b) 适用时的编条制备、连续盘绕缝合或具体条带组装，并在最终定型前交付。具体数据集只保留适用原子交换。若实际使用的化学品、条带材料、燃料、制冷剂、包装组件、废物或排放未在下方卡片中命名，前景数据包必须新增一个化学或物理上明确的独立交换，不得用集合标签替代。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hat-forms-hat-bodies-and-hoods-of-felt-plateaux-and-manchons-of-felt-hat-shapes-plaited-3c814837` |
| classification_refs | CPC Ver. 3.0：`28261`（精确） |
| covered_products | 未制成毡帽胎、帽坯、帽盔、平顶毡坯和筒状毡坯；由已声明材料编结或条带组装而成的未制成帽形坯 |
| excluded_products | 成品帽及其他头饰；已定型产品；具有制成帽檐的产品；已衬里或装饰的编结/条带帽形坯；帽基、帽架、帽舌、颏带以及非头饰用毡片 |
| representative_product | 一件符合 CPC 28261 状态限制、路线已声明的未制成帽坯或帽形坯 |
| production_route | `felt_wool`、`felt_fur`、`plaited_straw` 或 `assembled_specific_strip`；若混合路线，声明各自质量份额 |
| market_state | 供下游制帽使用的工厂门中间品；未定型、无制成帽檐，且编结/条带帽形坯未衬里、未装饰 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付供下游制帽使用的合格未制成帽胎、帽坯、帽盔、平顶毡坯、筒状毡坯或未定型编结/条带组装帽形坯 |
| How much | 1 kg 净参考产品 |
| How well | 声明并核实材料、路线、产品形态、含水状态、颜色/整理状态及 CPC 28261 未制成市场状态 |
| How long or cycle | 工厂门处一个生产批次；本中间产品不设使用服务期 |
| reference_flow_link | `reference_hat_form_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净参考产品 |
| 参考产品流 | 毡制帽胎、帽坯和帽盔、平顶毡帽和毡帽套，编结的或用各种材料组合制成的帽壳 `ef72f4d7-8f9e-401f-bcff-8dc295e94396` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | route；fibre species or strip material and composition；product form；unblocked/no-made-brim state；lining and trimming absence where applicable；moisture content at weighing；dyeing/fulling status；geography；technology；reference year；packaging inclusion |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。包装作为投入报告，但不计入 1 kg 净产品质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将数据集归一化为工厂门处恰好 1 kg CPC 28261 合格净产品。 |
| `net_product_mass` | 参考产品与包装 | Mass | kg | 参考产品质量不含运输包装、托盘、可重复使用架和不合格品；适用时分别报告。 |
| `moisture_declaration` | 毡纤维、湿毡帽坯和干毡帽坯 | Mass | kg | 每个交接质量均记录对应含水率或干物质基准，确保湿干质量变化可审计。 |
| `item_to_mass_conversion` | 按件或打记录的产量 | Mass | kg | 用批次特定的抽样净质量换算为质量，并保留样本量、日期和变异性。 |
| `energy_preservation` | 电力、蒸汽和天然气 | Energy | kWh 或 MJ | 保留实测能量单位；换算时记录因子与来源，且不得把电力、蒸汽或燃料合并。 |
| `volume_to_mass_conversion` | 水与废水 | Mass | kg | 用同期实测密度或有记录的水密度假设把体积换算为质量，并保留原始体积记录。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_materials` | 所有路线 | 从收到已制备/洗净毡纤维、秸秆篾条或编条，或已声明的具体条带材料开始；上游纤维、作物、纸浆、聚合物和动物毛皮加工必须链接，不得隐含吸收。 | `historic-england-luton-hat-industry-2013`；`eu-ef-method-2021` |
| `boundary_required_operations` | 适用路线 | 纳入所声明工厂门前直接控制的全部材料制备、毡体成形/缩绒、湿整理、干燥、编结、组装、检验和包装操作。 | `historic-england-luton-hat-industry-2013`；`us-epa-textile-mills-1982` |
| `boundary_product_state` | 参考产品 | 在最终款式定型或制成帽檐之前结束；编结或条带组装帽形坯还须在衬里或装饰之前结束。 | `eurlex-cn-headgear-2010`；`un-cpc-ver3-structure-2025` |
| `boundary_upstream_inputs` | 外购产品与服务 | 每项外购纤维、条带、化学品、公用工程和包装投入都链接到地理与技术上适当的上游数据集，并保留其可见前景数量。 | `eu-ef-method-2021` |
| `boundary_exclusions` | 下游生命周期 | 排除成品帽定型、仅在最终定型后进行的硬挺整理、制成帽檐、衬里、帽带、装饰、配送、使用和生命终期。 | `eurlex-cn-headgear-2010`；`historic-england-luton-hat-industry-2013` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景工厂收到的已制备毡用纤维、小麦秸秆篾条或编条，或每种已声明具体条带材料 |
| starting_condition_role | 类别特定帽坯或帽形坯制造的起点；上游材料生产保持链接 |
| product_classification_scope | CPC Ver. 3.0 `28261`，并受本 PCR 未制成市场状态检验约束 |
| recursive_input_rule | 外购投入若已属于 CPC 28261，则以一个可见产品投入、上游数据集和声明质量记录；不得递归重建其制造，只纳入接收工厂新增操作 |
| upstream_dataset_requirement | 优先使用供应商特定数据；否则使用时间、地理和技术上有代表性的二手数据集并披露替代 |
| disclosure | 声明路线、材料/物种、外购或现场中间品状态、纳入湿加工、排除的整理操作、净含水基准、地理、技术、参考年和包装范围 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `felt_fibre_preparation` | 毡纤维制备与成网 | `conditional` | 毡制路线在前景工厂进行纤维开松、混合、梳理或成网时必须纳入。 | 前景材料制备 | 每 kg CPC 28261 净参考产品 |
| `felt_body_formation_fulling` | 毡帽坯成形、硬化与缩绒 | `conditional` | 毡制路线必须纳入；仅记录实际使用的缩绒化学品，并逐种拆分。 | 前景毡帽坯制造 | 每 kg CPC 28261 净参考产品 |
| `felt_body_conditioning` | 有条件的毡帽坯染色、漂洗与干燥 | `conditional` | CPC 28261 工厂门前发生染色、额外漂洗、通用帽盔展开或干燥时纳入；最终定型、制成帽檐、衬里和装饰排除。 | 前景湿整理与调理 | 每 kg CPC 28261 净参考产品 |
| `straw_plait_preparation` | 现场小麦秸秆篾条制备与编结 | `conditional` | 仅当前景边界内对小麦秸秆篾条进行软化、压平、剪端和编结时纳入；外购编条直接进入下一过程。 | 前景编条制造 | 每 kg CPC 28261 净参考产品 |
| `strip_hat_shape_assembly` | 编结或条带组装的未制成帽形坯组装 | `conditional` | 编结或条带组装路线必须纳入。只记录实际材料；未列材料必须新增专用原子交换，不得使用通用条带材料行。 | 前景帽形坯组装 | 每 kg CPC 28261 净参考产品 |
| `final_inspection_packaging` | 最终检验、净质量确定与包装 | `required` | 所声明工厂门产品始终纳入；只能有一个路线特定未制成产品投入适用。 | 前景最终处理与参考产品交付 | 1 kg CPC 28261 净参考产品 |

### 过程：毡纤维制备与成网（`felt_fibre_preparation`）

#### 输入

##### 产品流

###### 洗净羊毛纤维投入（`scoured_wool_fibre_input`）

洗净羊毛纤维投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Scoured wool fibre
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fibre_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 已制备兔毛纤维投入（`prepared_rabbit_fur_fibre_input`）

已制备兔毛纤维投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Prepared rabbit fur fibre
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fibre_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 开松、梳理与成网用电（`electricity_fibre_preparation_input`）

开松、梳理与成网用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fibre_records`
- 来源：`eu-ef-method-2021`

#### 输出

##### 产品流

###### 已制备毡纤维网输出（`prepared_felt_web_output`）

已制备毡纤维网输出作为本过程交接点单独计量的产品流，不与其他产品或材料合并。

- 选定流：Prepared felt fibre web
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fibre_records`
- 来源：`us-epa-textile-mills-1982`

##### 废物流

###### 粗纤维剔除物（`coarse_fibre_rejects_output`）

粗纤维剔除物作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Coarse animal fibre rejects
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fibre_records`
- 来源：`historic-england-luton-hat-industry-2013`

##### 基本流

###### 排入空气的动物纤维粉尘（`airborne_fibre_dust_output`）

排入空气的动物纤维粉尘作为跨越环境边界的独立基本流记录，不与其他排放合并。

- 选定流：Animal fibre dust to air
- 流属性/单位：Mass / kg
- 数量规则：采用直接测量，或依 `calc_fibre_dust_release` 由投入、产品、收集废物和捕集粉尘记录计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fibre_dust_records`
- 来源：`us-epa-textile-bmp-1996`


### 过程：毡帽坯成形、硬化与缩绒（`felt_body_formation_fulling`）

#### 输入

##### 产品流

###### 已制备毡纤维网投入（`prepared_felt_web_input`）

已制备毡纤维网投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Prepared felt fibre web
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`historic-england-luton-hat-industry-2013`；`us-epa-textile-mills-1982`

###### 毡体成形与漂洗用工艺水（`process_water_fulling_input`）

毡体成形与漂洗用工艺水仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：记录供给适用批次的过程级计量用水；不得以通用行业平均值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`；`us-epa-textile-bmp-1996`

###### 毡体成形与缩绒用电（`electricity_fulling_input`）

毡体成形与缩绒用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`eu-ef-method-2021`

###### 毡体成形与缩绒用外购蒸汽（`purchased_steam_fulling_input`）

毡体成形与缩绒用外购蒸汽仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录供应方计量的蒸汽能量，或由实测蒸汽质量和有记录的焓值计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 碱性缩绒或中和用碳酸钠（`sodium_carbonate_fulling_input`）

碱性缩绒或中和用碳酸钠仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和化学品领用记录记载制剂质量，并在元数据中保留浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`

###### 酸性缩绒用硫酸（`sulfuric_acid_fulling_input`）

酸性缩绒用硫酸仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和化学品领用记录记载制剂质量，并在元数据中保留浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`

###### 酸性缩绒用过氧化氢（`hydrogen_peroxide_fulling_input`）

酸性缩绒用过氧化氢仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：按批次配方和化学品领用记录记载制剂质量，并在元数据中保留浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`

#### 输出

##### 产品流

###### 湿毡帽坯输出（`wet_felt_body_output`）

湿毡帽坯输出作为本过程交接点单独计量的产品流，不与其他产品或材料合并。

- 选定流：Wet felt hat body
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`historic-england-luton-hat-industry-2013`

##### 废物流

###### 废缩绒浴废水（`fulling_bath_wastewater_output`）

废缩绒浴废水作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Spent fulling bath wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录废水计量质量；若计量体积，则用实测或有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`

###### 毡缩绒漂洗废水（`fulling_rinse_wastewater_output`）

毡缩绒漂洗废水作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Felt fulling rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录废水计量质量；若计量体积，则用实测或有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_fulling_records`
- 来源：`us-epa-textile-mills-1982`


### 过程：有条件的毡帽坯染色、漂洗与干燥（`felt_body_conditioning`）

#### 输入

##### 产品流

###### 湿毡帽坯投入（`wet_felt_body_input`）

湿毡帽坯投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Wet felt hat body
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 染色与漂洗用工艺水（`process_water_conditioning_input`）

染色与漂洗用工艺水仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：记录供给适用批次的过程级计量用水；不得以通用行业平均值替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`us-epa-textile-mills-1982`；`us-epa-textile-bmp-1996`

###### 调理与干燥用电（`electricity_conditioning_input`）

调理与干燥用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`eu-ef-method-2021`

###### 调理与干燥用外购蒸汽（`purchased_steam_conditioning_input`）

调理与干燥用外购蒸汽仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录供应方计量的蒸汽能量，或由实测蒸汽质量和有记录的焓值计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 现场调理供热用天然气（`natural_gas_conditioning_input`）

现场调理供热用天然气仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录分配给合格批次的实测低位热值能量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`historic-england-luton-hat-industry-2013`

#### 输出

##### 产品流

###### 干燥未制成毡帽坯输出（`dry_felt_hat_body_output`）

干燥未制成毡帽坯输出作为本过程交接点单独计量的产品流，不与其他产品或材料合并。

- 选定流：Dry unfinished felt hat body
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`eurlex-cn-headgear-2010`；`historic-england-luton-hat-industry-2013`

##### 废物流

###### 废染浴废水（`dye_bath_wastewater_output`）

废染浴废水作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Spent felt dye bath wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录废水计量质量；若计量体积，则用实测或有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`us-epa-textile-mills-1982`

###### 毡染色漂洗废水（`dye_rinse_wastewater_output`）

毡染色漂洗废水作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Felt dyeing rinse wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录废水计量质量；若计量体积，则用实测或有记录的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`us-epa-textile-mills-1982`

###### 毡边修整边角料（`felt_trimming_offcuts_output`）

毡边修整边角料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Felt edge-trimming offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_felt_conditioning_records`
- 来源：`historic-england-luton-hat-industry-2013`

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`fossil_carbon_dioxide_conditioning_output`）

现场天然气燃烧产生的化石二氧化碳作为跨越环境边界的独立基本流记录，不与其他排放合并。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依 `calc_natural_gas_emissions`，由天然气计量能量和披露的污染物特定因子计算；代表性烟气测试可替代计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-ef-method-2021`

###### 现场天然气燃烧产生的氮氧化物（`nitrogen_oxides_conditioning_output`）

现场天然气燃烧产生的氮氧化物作为跨越环境边界的独立基本流记录，不与其他排放合并。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依 `calc_natural_gas_emissions`，由天然气计量能量和披露的污染物特定因子计算；代表性烟气测试可替代计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-ef-method-2021`


### 过程：现场小麦秸秆篾条制备与编结（`straw_plait_preparation`）

#### 输入

##### 产品流

###### 小麦秸秆篾条投入（`wheat_straw_splints_input`）

小麦秸秆篾条投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Wheat-straw splints
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_plaiting_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 秸秆制备与编结用电（`electricity_straw_plaiting_input`）

秸秆制备与编结用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_plaiting_records`
- 来源：`eu-ef-method-2021`

#### 输出

##### 产品流

###### 小麦秸秆编条输出（`wheat_straw_plait_output`）

小麦秸秆编条输出作为本过程交接点单独计量的产品流，不与其他产品或材料合并。

- 选定流：Wheat-straw plait
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_plaiting_records`
- 来源：`historic-england-luton-hat-industry-2013`

##### 废物流

###### 小麦秸秆端头剪料（`straw_clippings_output`）

小麦秸秆端头剪料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Wheat-straw clippings
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_plaiting_records`
- 来源：`historic-england-luton-hat-industry-2013`

##### 基本流

###### 排入空气的小麦秸秆粉尘（`straw_dust_to_air_output`）

排入空气的小麦秸秆粉尘作为跨越环境边界的独立基本流记录，不与其他排放合并。

- 选定流：Wheat-straw dust to air
- 流属性/单位：Mass / kg
- 数量规则：采用直接测量，或依 `calc_straw_dust_release` 由有记录的过程质量平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_straw_dust_records`
- 来源：`us-epa-textile-bmp-1996`


### 过程：编结或条带组装的未制成帽形坯组装（`strip_hat_shape_assembly`）

#### 输入

##### 产品流

###### 帽形坯组装用小麦秸秆编条（`wheat_straw_plait_assembly_input`）

帽形坯组装用小麦秸秆编条仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Wheat-straw plait
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 帽形坯组装用纸条（`paper_strip_assembly_input`）

帽形坯组装用纸条仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Paper strip
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`un-cpc-ver3-structure-2025`

###### 帽形坯组装用聚丙烯条带（`polypropylene_strip_assembly_input`）

帽形坯组装用聚丙烯条带仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Polypropylene strip
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`un-cpc-ver3-structure-2025`

###### 帽形坯组装用棉纺织条带（`cotton_textile_strip_assembly_input`）

帽形坯组装用棉纺织条带仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Cotton textile strip
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`un-cpc-ver3-structure-2025`

###### 盘绕组装用棉缝纫线（`cotton_sewing_thread_input`）

盘绕组装用棉缝纫线仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Cotton sewing thread
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 条带帽形坯组装用电（`electricity_strip_assembly_input`）

条带帽形坯组装用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`eu-ef-method-2021`

#### 输出

##### 产品流

###### 未定型编结或条带组装帽形坯输出（`unblocked_plaited_hat_shape_output`）

未定型编结或条带组装帽形坯输出作为本过程交接点单独计量的产品流，不与其他产品或材料合并。

- 选定流：Unblocked plaited hat shape
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`eurlex-cn-headgear-2010`；`historic-england-luton-hat-industry-2013`

##### 废物流

###### 小麦秸秆编条边角料（`straw_plait_offcuts_output`）

小麦秸秆编条边角料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Wheat-straw plait offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：`historic-england-luton-hat-industry-2013`

###### 纸条边角料（`paper_strip_offcuts_output`）

纸条边角料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Paper strip offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：

###### 聚丙烯条带边角料（`polypropylene_strip_offcuts_output`）

聚丙烯条带边角料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Polypropylene strip offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：

###### 棉纺织条带边角料（`cotton_textile_strip_offcuts_output`）

棉纺织条带边角料作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Cotton textile strip offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_strip_assembly_records`
- 来源：


### 过程：最终检验、净质量确定与包装（`final_inspection_packaging`）

#### 输入

##### 产品流

###### 最终处理用干燥未制成毡帽坯（`dry_felt_hat_body_final_input`）

最终处理用干燥未制成毡帽坯仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Dry unfinished felt hat body
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eurlex-cn-headgear-2010`

###### 最终处理用未定型编结帽形坯（`unblocked_plaited_hat_shape_final_input`）

最终处理用未定型编结帽形坯仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Unblocked plaited hat shape
- 流属性/单位：Mass / kg
- 数量规则：记录过程交接处的质量；毡材料同时记录对应含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eurlex-cn-headgear-2010`

###### 检验与包装用电（`electricity_finalization_input`）

检验与包装用电仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分表电量；若由设备表和运行时间计算，应保留经校准的计算记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-ef-method-2021`

###### 牛皮纸包材投入（`kraft_paper_wrap_input`）

牛皮纸包材投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Kraft paper wrapping
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：

###### 瓦楞纸板箱投入（`corrugated_fibreboard_box_input`）

瓦楞纸板箱投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：

###### 低密度聚乙烯薄膜袋投入（`ldpe_film_bag_input`）

低密度聚乙烯薄膜袋投入仅在所声明路线和过程适用时作为一个独立产品流跨越前景过程边界。

- 选定流：Low-density polyethylene film bag
- 流属性/单位：Mass / kg
- 数量规则：按经校准的接收、领料或批次记录，记录分配给合格批次的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：

#### 输出

##### 产品流

###### CPC 28261 参考产品输出（`reference_hat_form_product_output`）

这是唯一参考交换：工厂门处合格的未制成帽胎、帽坯、帽盔、平顶毡坯、筒状毡坯，或未定型编结/条带组装帽形坯。

- 选定流：毡制帽胎、帽坯和帽盔、平顶毡帽和毡帽套，编结的或用各种材料组合制成的帽壳 `ef72f4d7-8f9e-401f-bcff-8dc295e94396`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 净参考产品；运输包装质量不计入。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-ver3-structure-2025`；`eurlex-cn-headgear-2010`

##### 废物流

###### 不合格未制成毡帽坯（`rejected_felt_hat_bodies_output`）

不合格未制成毡帽坯作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Rejected unfinished felt hat bodies
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：

###### 不合格未定型编结帽形坯（`rejected_plaited_hat_shapes_output`）

不合格未定型编结帽形坯作为一个独立废物流离开本过程，不与其他废物或废水合并。

- 选定流：Rejected unblocked plaited hat shapes
- 流属性/单位：Mass / kg
- 数量规则：称量适用合格批次收集并送往有记录去向的该项物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多路线、多材料或多产品操作 | 只要物理记录允许，先按路线与产品细分批次、设备、计量表和配方记录，再考虑分配。 | `eu-ef-method-2021` |
| `allocation_reuse_internal` | 内部回用纤维、水、编条和边角料 | 内部回用作为内部转移，不给予避免产品抵扣；只记录跨越前景边界的剩余废物。 | `us-epa-textile-bmp-1996` |
| `allocation_mass_fallback` | 不可分的共用操作 | 无法细分且产品功能可比时，按净输出质量分配，并披露受影响过程、分母、期间和敏感性。 | `eu-ef-method-2021` |
| `allocation_economic_exception` | 功能显著不同的共产品 | 仅在物理细分和合理物理关系均不可用时采用经济分配；披露价格、期间、币种、份额和质量分配敏感性。 | `eu-ef-method-2021` |
| `allocation_no_reject_credit` | 废物与不合格品 | 不得仅因出售或回收就把不合格品、废水、粉尘或边角料视为无负担共产品；另行建模其废物或回收材料去向。 | `eu-ef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_felt_fibre_records` | `felt_fibre_preparation` | 纤维、电力、中间品与剔除物数量 | 接收单；批次表；经校准秤与电表记录 | date; lot; species; supplier; input kg; web kg; reject kg; kWh; moisture | 按合格批次核对接收、批次、交接、剔除物和分表记录 | kg; kWh | 每批并每月核对 | 至少 12 个代表性月份，较短生产期取完整周期 | 全部前景纤维制备设备 | 汇总合格批次并按净参考产品质量归一化 | 校准证书；批次追溯；核对签字 |
| `cp_fibre_dust_records` | `felt_fibre_preparation` | 未捕集动物纤维粉尘 | 烟道/室内空气测试或质量平衡记录 | test result; sampled hours; inlet fibre; product; collected reject; captured dust | 优先代表性直接测量，否则保留每个质量平衡项 | kg | 代表性测试并每月平衡 | 与生产数据同期 | 全部相关开松、梳理和空气处理点 | 按 `calc_fibre_dust_release` 计算并归一化 | 测试报告或签字平衡；捕集系统维护记录 |
| `cp_felt_fulling_records` | `felt_body_formation_fulling` | 材料、水、公用工程、化学品、中间品与废水 | 批次配方；领用记录；水/汽/电表；秤；废水表 | batch; input kg; output kg; moisture; water kg; kWh; steam kg or MJ; chemical name; concentration; chemical kg; wastewater kg | 采集每个纳入批次，每种化学品保持独立台账行 | kg; kWh; MJ | 每批并每月核对 | 至少 12 个代表性月份，较短生产期取完整周期 | 全部成形、硬化、缩绒、洗涤和漂洗设备 | 汇总适用原子记录并按参考质量归一化 | 计量校准；配方批准；化学品 SDS/规格；批次核对 |
| `cp_felt_conditioning_records` | `felt_body_conditioning` | 毡帽坯、水、公用工程、包装前交接与废物 | 批次表；水/能表；燃料发票；秤；废水表 | batch; wet kg; dry kg; moisture; water kg; kWh; steam MJ; natural gas MJ; wastewater kg; offcut kg | 只记录声明 CPC 28261 门状态之前发生的操作 | kg; kWh; MJ | 每批并每月核对 | 至少 12 个代表性月份，较短生产期取完整周期 | 全部纳入染色、漂洗、通用展开和干燥设备 | 汇总纳入批次并按净参考质量归一化 | 计量校准；路线/状态签字；质量平衡复核 |
| `cp_combustion_emission_records` | `felt_body_conditioning` | 天然气直接燃烧排放 | 燃料表；适用时烟气测试；批准因子记录 | natural gas MJ; factor name; factor unit; factor value; stack result; operating hours | 将实测燃料与披露的现行因子或代表性烟气测试配对 | MJ; kg | 每月及燃烧器/因子变化后 | 与调理数据同期 | 全部边界内燃气设备 | 对每种污染物分别应用 `calc_natural_gas_emissions` | 燃料表校准；因子引用/版本；烟气测试报告 |
| `cp_straw_plaiting_records` | `straw_plait_preparation` | 秸秆、电力、编条与剪料 | 接收单；批次表；秤；电表 | lot; splint kg; plait kg; clipping kg; kWh | 核对每个编条批次并保留秸秆等级与含水率 | kg; kWh | 每批并每月核对 | 至少 12 个代表性月份，较短生产期取完整周期 | 全部现场秸秆制备与编结设备 | 汇总批次并按净参考质量归一化 | 秤/表校准；批次追溯；质量平衡签字 |
| `cp_straw_dust_records` | `straw_plait_preparation` | 未捕集小麦秸秆粉尘 | 直接颗粒物测试或有记录质量平衡 | sampled hours; splint kg; plait kg; clippings kg; captured dust kg; emission kg | 优先直接测量，否则保留 `calc_straw_dust_release` 全部项 | kg | 代表性测试并每月平衡 | 与编条生产同期 | 全部滚压、剪切和收集点 | 将计算或测量排放按参考质量归一化 | 测试报告或签字平衡；收集器维护记录 |
| `cp_strip_assembly_records` | `strip_hat_shape_assembly` | 编条/条带、缝线、电力、中间品与材料特定边角料 | 材料领退记录；批次流转卡；秤；缝纫机电表 | batch; material identity; issued kg; returned kg; thread kg; kWh; output kg; each offcut kg | 每种材料身份保持独立原子台账，不使用通用条带平衡 | kg; kWh | 每批并每月核对 | 至少 12 个代表性月份，较短生产期取完整周期 | 全部编条压平与缝合/组装设备 | 按声明材料汇总合格批次并归一化 | 材料规格；批次追溯；秤/表校准 |
| `cp_final_packaging_records` | `final_inspection_packaging` | 路线投入、参考输出、包装与路线特定不合格品 | 检验记录；经校准秤；包装领用；不合格记录 | batch; route; product form; input kg; output kg; moisture; paper kg; box kg; LDPE kg; reject kg; state checks | 每批核验未制成状态限定，并将净产品与包装分别称量 | kg; kWh | 每个发运批次并每月核对 | 与生产数据同期 | 全部最终检验和包装工位 | 汇总合格净输出至 1 kg 参考质量，包装单列 | 秤/表校准；检验表；发运与不合格追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | 每项非参考清单数量 | 归一化数量 = 期间内归属于合格产品的数量 / 期间合格净参考产品质量 | 原子期间数量；合格净产品 kg | 每 1 kg 参考产品的数量 | `eu-ef-method-2021` |
| `calc_steam_energy` | 外购蒸汽 | 交付蒸汽 MJ = 实测蒸汽质量 ×（交付比焓 − 凝结水回流比焓）；披露两端状态 | 蒸汽质量；压力/温度或供应方焓值；凝结水状态 | MJ 外购蒸汽 |  |
| `calc_fibre_dust_release` | 动物纤维粉尘 | 未捕集粉尘 = 投入纤维 − 已制备纤维网 − 固体剔除物 − 捕集粉尘 − 有记录含水变化；负值无效 | 全部质量平衡项 | kg 排入空气的动物纤维粉尘 | `us-epa-textile-bmp-1996` |
| `calc_straw_dust_release` | 小麦秸秆粉尘 | 未捕集粉尘 = 篾条投入 − 编条输出 − 剪料 − 捕集粉尘 − 有记录含水变化；负值无效 | 全部质量平衡项 | kg 排入空气的小麦秸秆粉尘 | `us-epa-textile-bmp-1996` |
| `calc_natural_gas_emissions` | 每项天然气直接污染物 | 污染物质量 = 天然气计量能量 × 已披露污染物特定因子；代表性烟气测量可替代计算 | natural gas MJ；一个污染物特定因子或烟气结果 | 一种已命名污染物的 kg | `eu-ef-method-2021` |
| `calc_mass_balance` | 每个过程和路线 | 不平衡量 = 总质量投入 − 产品输出 − 废物输出 − 基本流质量输出 − 有记录蒸发/含水变化；应调查而非强制归零 | 原子质量记录与含水数据 | 已披露过程不平衡量 | `eu-ef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个代表路线保留 CPC 28261 产品形态与市场状态检验证据。 | 批次检验表；产品规格；适用时照片 |
| `dq_material_identity` | 纤维、编条、条带、缝线、化学品和包装 | 保留供应商、批次、组成/物种、化学品浓度和产品规格；不得用复数材料类别替代。 | 采购规格；分析证书；SDS；批次记录 |
| `dq_primary_activity_data` | 前景制造 | 对代表工厂和产品使用企业特定材料与制造活动数据。 | `eu-ef-method-2021`；计量表；台账；批次记录 |
| `dq_water_measurement` | 毡制湿加工 | 使用过程级校准水表或有记录的临时计量活动；设备制造商估计不得作为最终前景证据。 | `us-epa-textile-bmp-1996`；校准和水表记录 |
| `dq_temporal_coverage` | 全部可变前景数据 | 至少覆盖 12 个代表性月份，较短生产期覆盖完整周期；披露季节性、停机与排除项。 | 带日期原始记录与覆盖声明 |
| `dq_completeness` | 全部过程 | 核对材料、能量、水、废物与直接排放记录，并解释缺失或估计值。 | 签字的过程与年度质量/能量核对 |
| `dq_atomic_chemicals` | 缩绒、染色、清洗与整理配方 | 每种实际化学品按独立名称、浓度和数量记录；三种已命名缩绒化学品不授权遗漏或聚合其他配方化学品。 | 批准配方；领用台账；SDS |
| `dq_atomic_fuels_refrigerants` | 现场公用工程 | 每种实际燃料和制冷剂分别记录；若边界内使用柴油、LPG、其他燃料或制冷剂，新增专用原子行及相应直接排放或泄漏。 | 燃料/制冷剂台账；计量表；维护记录 |
| `dq_background_links` | 外购投入 | 每项材料、公用工程、化学品和包装投入记录上游数据集、地理、技术、参考年及替代理由。 | 数据集映射日志与质量复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考交换必须使用产品流 `ef72f4d7-8f9e-401f-bcff-8dc295e94396`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 与 kg，并归一化为恰好 1 kg 净产品。 |  |
| `validate_route_and_state` | 参考产品 | 缺失路线/材料/产品形态限定，或纳入与 CPC 28261 不符的最终定型、制成帽檐、衬里或装饰时，拒绝数据包。 | `un-cpc-ver3-structure-2025`；`eurlex-cn-headgear-2010` |
| `validate_mass_balance` | 每个过程和路线 | 要求过程质量核对，包括含水变化、蒸发、产品、每项具体废物和质量基本流；调查无法解释的不平衡。 | `eu-ef-method-2021` |
| `validate_atomic_inventory` | 全部清单 | 拒绝组合或集合交换；适用时电力、蒸汽、每种燃料、每种制冷剂、每种化学品、每个包装组件、每项废物和每种基本流均须分列。 |  |
| `validate_wet_processing` | 毡制缩绒与调理 | 发生缩绒、染色、洗涤或漂洗时，要求实测水、逐种命名的配方化学品和分别计量的废水；否则要求有记录的不适用声明。 | `us-epa-textile-mills-1982`；`us-epa-textile-bmp-1996` |
| `validate_direct_fuel_emissions` | 现场燃烧 | 出现现场燃料投入时，要求每种建模污染物有独立直接排放交换并披露因子或烟气测试；外购蒸汽不得视为现场燃料。 | `eu-ef-method-2021` |
| `validate_strip_materials` | 编结/条带路线 | 每种实际编条、条带、缝线及材料特定边角料分别识别；未列材料须新增原子行，不得复用其他材料行。 | `un-cpc-ver3-structure-2025` |
| `validate_packaging` | 工厂门交付 | 每种实际包装材料作为独立投入，并确认全部包装质量不计入 1 kg 净产品参考量。 |  |
| `validate_data_quality` | 前景数据包 | 时间覆盖不完整、缺少校准/追溯证据、估算无法解释，或背景链接未披露地理、技术和年份时，拒绝。 | `eu-ef-method-2021`；`us-epa-textile-bmp-1996` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 未制成 CPC 28261 帽胎/帽坯/帽盔/平顶毡坯/筒状毡坯或编结/条带组装帽形坯的产品特定前景制造数据集 |
| downstream_use | 当路线、材料、市场状态、地理、技术和年份匹配时，可作为下游制帽的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 下游帽类与头饰的工厂门 LCA；供应商特定产品足迹；限定信息一致时的路线特定基准比较 |
| excluded_use | 未增加定型/衬里/装饰过程就代表成品帽；未经敏感性分析替代显著不同路线；消费者使用或生命终期声明；未经独立关键性评审的公开比较声明 |
| required_metadata | PCR id；CPC code；参考流 UUID；路线；纤维物种或条带组成；产品形态；含水率；颜色/整理状态；排除整理确认；地理；技术；参考年；分配；包装；数据源 |
| required_quality_disclosure | 一手数据份额；时间覆盖；计量表与秤校准；配方和材料追溯；过程平衡；背景数据集选择；未解决 UUID 身份；假设与局限 |
| update_trigger | 材料路线或配方变化；新增/移除湿过程；设备或能源来源变化；直接排放因子变化；包装改版；供应商/背景数据变化；或数据不再代表当前技术与市场条件 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver3-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure and registry, adopted 2025. https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | CPC 28261 精确类别身份，以及编结/条带组装帽形坯对材料中立的覆盖 |
| `eurlex-cn-headgear-2010` | `standard` | European Union, Combined Nomenclature headings 6501 and 6502, Official Journal notice 2010/C 63/05. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52010XC0310(03) (retrieved 2026-08-13) | 未制成市场状态边界：未定型、无制成帽檐，且编结/条带帽形坯未衬里、未装饰 |
| `historic-england-luton-hat-industry-2013` | `official_guidance` | Historic England, *The Hat Industry of Luton and its Buildings*, 2013. https://historicengland.org.uk/images-books/publications/hat-industry-luton-buildings/hat-industry-luton-and-buildings/ (retrieved 2026-08-13) | 羊毛与毛皮毡帽坯、秸秆编条、连续盘绕缝合、蒸汽/滚压/压制、染色及转入最终定型的独立过程分解 |
| `us-epa-textile-mills-1982` | `official_guidance` | U.S. Environmental Protection Agency, *Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills Point Source Category*, EPA 440/1-82/022, September 1982. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004LF3.TXT (retrieved 2026-08-13) | 毡加工过程图；成网、硬化/缩绒；碳酸钠、硫酸和过氧化氢的独立条件化学品；漂洗、染色、整理和废水 |
| `us-epa-textile-bmp-1996` | `official_guidance` | U.S. Environmental Protection Agency, *Best Management Practices for Pollution Prevention in the Textile Industry*, EPA/625/R-96/004, September 1996. https://www.epa.gov/sites/default/files/2020-04/documents/best-management-practices-textile-industry-manual.pdf (retrieved 2026-08-13) | 现场水计量、记录质量、直接测量、过程特定废物表征和质量平衡控制 |
| `eu-ef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13) | 功能单位/系统边界一致性、产品特定物料清单、企业特定制造数据、完整性、分配、数据质量和背景链接披露 |
