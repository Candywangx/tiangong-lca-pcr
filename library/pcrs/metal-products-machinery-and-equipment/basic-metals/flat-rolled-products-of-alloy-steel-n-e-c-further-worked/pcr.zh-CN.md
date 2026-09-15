---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-n-e-c-further-worked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另列明的经进一步加工合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于未另列明的合金钢平板轧材从已申报热轧或冷轧来料状态开始，经至少一道进一步加工工序至工厂门的门到门生产。数据包必须声明合金类别、来料状态、尺寸、进一步加工路线、表面及镀层状态和交付形式。典型范围包括酸洗、冷减薄轧制、退火或其他热处理、平整或光整轧制、路线特定金属镀层、纵剪、横剪、矫直、检验、涂油、标识和包装。

范围不包括上游粗钢生产与铸造、非合金钢、不锈钢、硅电工钢、最终状态仅为热轧或仅为冷轧的产品、零部件制造、使用和寿命终结。仅当镀锌属于申报的 CPC 41239 路线时纳入；采用其他镀层化学体系前必须增设各自的原子交换行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-n-e-c-further-worked |
| classification_refs | CPC 3.0：41239，精确产品分类语境 |
| covered_products | 未另列明的合金钢卷、带或板，在热轧或冷轧来料状态后实施一道或多道已申报进一步加工工序 |
| excluded_products | 非合金钢；不锈钢；硅电工钢；仅热轧或仅冷轧产品；制成零件；钢管、条、杆、型材和钢丝 |
| representative_product | 以合格合金钢平板轧材为投入、按已申报进一步加工路线生产的合金钢卷或板 |
| production_route | 门到门进一步加工；明确从过程图选择实际路线工序 |
| market_state | 工厂门处干燥成品卷、带或板，并申报尺寸、表面、镀层、涂油及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供处于申报市场状态、未另列明的经进一步加工合金钢平板轧材 |
| How much | 1,000 kg 净合格产品 |
| How well | 符合申报的合金牌号、尺寸、力学性能、表面质量、镀层状态和适用产品规范 |
| How long or cycle | 工厂门处代表的一个生产批次；不规定使用期限 |
| reference_flow_link | `finished_alloy_steel_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净合格产品 |
| 参考产品流 | 未另列明的经进一步加工合金钢平板轧材 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号和标准；热轧或冷轧来料状态；来料及成品厚度和宽度；卷、带或板形式；过程顺序；使用退火时的技术和气氛；使用镀层时的金属和镀层质量；表面质量；涂油状态；净合格质量；场址；地域；生产期 |

必需限定信息应在数据集元数据、过程说明、参考流备注或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及固体物料平衡 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将净合格产品及物料交换归一化到 1,000 kg；可拆卸运输包装不得计入产品质量。 |
| `electricity_energy_conversion` | 交流电行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电表读数和换算依据；按 1 kWh = 3.6 MJ 换算。 |
| `gas_volume_conditions` | 气态天然气行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明基准温度、压力和干湿基准，并保留供应商能量换算。 |
| `coating_mass_separation` | 金属镀层 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 镀层金属与钢基材分别记录，并声明成品镀层质量或单位面积镀层质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格合金钢平板轧材投入，包括合金牌号、热轧或冷轧状态、尺寸、氧化皮或表面状态及已有镀层 |
| starting_condition_role | 由独立上游数据集表示的外购或转入产品 |
| product_classification_scope | 按 CPC 3.0 代码 41239 语境实施进一步加工、未另列明的合金钢平板轧材 |
| recursive_input_rule | 同类投入仅按申报来料状态记录一次，不用本 PCR 递归展开 |
| upstream_dataset_requirement | 匹配合金牌号、生产路线、地域、再生料口径和来料状态；披露任何代理数据 |
| disclosure | 纳入和省略工序、内部循环、酸再生、水循环配置、镀层路线、废料去向、包装及共享设施截断 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_qualified_flat_product` | 前景边界 | 从接收合格平板轧材投入开始，纳入申报的进一步加工工序直至工厂门净合格产品。 | `unsd-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_route_conditioning` | 过程选择 | 仅在场址记录证明确实发生时纳入条件工序；不得把不存在的路线工序平均进产品。 | `eu-jrc-fmp-bref-2022` |
| `boundary_support_operations` | 辅助作业 | 纳入可归属的轧辊准备、槽液维护、烟气控制、场内废水处理、搬运、检验和包装。 | `eu-jrc-fmp-bref-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receiving_preparation` | 原料接收与准备 | `required` | 始终纳入；确定来料状态和生产批次质量平衡 | 前景投入控制与准备 | 合格投入和准备后输出的 kg |
| `pickling_rinsing` | 酸洗、漂洗与干燥 | `conditional` | 当后续加工前以化学方式去除氧化皮或调整表面状态时纳入 | 前景表面准备 | 酸洗后输出 kg 和处理面积 m2 |
| `cold_reduction` | 冷减薄轧制 | `conditional` | 当通过冷轧改变厚度或力学性能时纳入 | 前景成形 | 冷轧输出 kg |
| `annealing_heat_treatment` | 退火或热处理 | `conditional` | 当申报路线采用罩式或连续热处理时纳入 | 前景热处理 | 退火输出 kg |
| `temper_skin_pass` | 平整或光整轧制 | `conditional` | 当轻压下轧制用于确定最终性能、板形或表面状态时纳入 | 前景最终轧制 | 平整后输出 kg |
| `metallic_coating` | 锌金属镀层 | `conditional` | 仅对明确申报的 CPC 41239 镀锌产品纳入 | 前景表面镀层 | 镀层后输出 kg 和镀覆面积 m2 |
| `finishing_packaging` | 精整与包装 | `required` | 始终纳入；记录实际精整和包装配置 | 前景最终调理 | 1,000 kg 净合格产品 |
| `wastewater_treatment` | 场内冷加工废水处理 | `conditional` | 当过程废水在前景边界内处理时纳入 | 前景污染控制 | 处理进水 m3 |

### 过程：原料接收与准备（`feedstock_receiving_preparation`）

#### 输入

##### 产品流

###### 热轧合金钢平板轧材投入（`hot_rolled_alloy_steel_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：热轧合金钢平板轧材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量归属该生产批次的净来料质量；仅当申报来料状态为热轧时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_mass_balance`
- 来源：`unsd-cpc-3-0-structure-2025`

###### 冷轧合金钢平板轧材投入（`cold_rolled_alloy_steel_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：冷轧合金钢平板轧材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量归属该生产批次的净来料质量；仅当申报来料状态为冷轧时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_mass_balance`
- 来源：`unsd-cpc-3-0-structure-2025`

###### 接收与准备用电（`receiving_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将计量值或按设备运行时间分配的用电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后合金钢中间品（`prepared_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：准备后合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转入首个申报深加工工序的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_mass_balance`
- 来源：

##### 废物流

##### 基本流

### 过程：酸洗、漂洗与干燥（`pickling_rinsing`）

#### 输入

##### 产品流

###### 酸洗工序合金钢投入（`pickling_feedstock_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入酸洗的合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量生产线入口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 盐酸酸洗剂（`hydrochloric_acid`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：盐酸溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原态溶液库存平衡记录消耗量；仅实际使用时纳入并申报浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 除盐漂洗水（`demineralized_rinse_water`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：除盐水 `9385842f-1815-4f19-a6b9-3dbb7ccbbffc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量不含场内循环水的新鲜补水体积，并按申报参考条件下实测或有文件依据的密度换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 酸洗用电（`pickling_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

###### 酸洗天然气（`pickling_natural_gas`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按申报基准状态计量酸洗槽加热、干燥或可归属酸再生用气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗后合金钢中间品（`pickled_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：酸洗后合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量漂洗和干燥后的转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 酸性酸洗废液（`acidic_pickling_effluent`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：合金钢酸洗酸性废液
- 流属性/单位：体积 / m3
- 数量规则：记录扣除内部循环后的净处理进水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 酸洗供热化石二氧化碳（`pickling_fossil_co2`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据酸洗天然气实测量及有据可查的场址或供应商碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：

### 过程：冷减薄轧制（`cold_reduction`）

#### 输入

##### 产品流

###### 冷轧投入（`cold_rolling_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入冷减薄轧制的酸洗后合金钢平板轧材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量轧机入口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 轧制油（`rolling_oil`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：冷轧润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按库存平衡记录新补充轧制油，不重复计入循环油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 冷轧用电（`cold_rolling_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧合金钢中间品（`cold_rolled_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：冷轧合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量达到申报厚度的轧机出口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 冷轧合金钢废料（`cold_rolling_steel_scrap`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：冷轧产生的合金钢废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量洁净切边和不合格合金钢输出并申报去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`worldsteel-lci-methodology-2017`

##### 基本流

### 过程：退火或热处理（`annealing_heat_treatment`）

#### 输入

##### 产品流

###### 退火投入（`annealing_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入退火的合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉前投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 保护氮气（`protective_nitrogen`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：退火保护气氛用氮气
- 流属性/单位：体积 / m3
- 数量规则：按申报基准状态计量或采用供应商记录；仅实际使用时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 退火用电（`annealing_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将电加热及辅助设备的分表电量或有记录的分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

###### 退火天然气（`annealing_natural_gas`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按申报基准状态计量炉用天然气；仅燃气热处理时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火合金钢中间品（`annealed_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：退火合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉后质量并申报达到的性能和表面状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_records`
- 来源：`worldsteel-finished-cold-rolled-coil-2026`

##### 废物流

##### 基本流

###### 退火化石二氧化碳（`annealing_fossil_co2`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据退火天然气实测量及有据可查的场址或供应商碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：

### 过程：平整或光整轧制（`temper_skin_pass`）

#### 输入

##### 产品流

###### 平整轧制投入（`temper_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入平整轧制的合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量平整机入口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temper_finishing_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 平整轧制用电（`temper_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 平整后合金钢中间品（`tempered_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：平整后合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量平整机出口质量并申报表面和性能限定信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temper_finishing_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

### 过程：锌金属镀层（`metallic_coating`）

#### 输入

##### 产品流

###### 金属镀层投入（`coating_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入镀锌的合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量镀层线入口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 锌镀层金属（`coating_zinc`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：钢带镀层用锌金属
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按库存平衡记录净锌投入；申报牌号，任何合金添加物均须另设原子行
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 镀层线用电（`coating_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

###### 镀层线天然气（`coating_natural_gas`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量可直接归属清洗、热处理或镀层槽辅助供热的天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 镀锌合金钢中间品（`coated_alloy_steel_intermediate`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：镀锌合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量镀层线出口质量并申报镀层质量和镀覆面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 镀层线供热化石二氧化碳（`coating_fossil_co2`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据镀层线天然气实测量及有据可查的场址或供应商碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stage_fuel_and_emissions`
- 来源：

### 过程：精整与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 精整工序合金钢投入（`finishing_feedstock`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：进入精整的经进一步加工合金钢平板轧材中间品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量精整线入口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temper_finishing_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 防锈油（`anticorrosion_oil`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：成品合金钢带用防锈油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原态产品库存平衡记录消耗量；仅有意施涂时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temper_finishing_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 钢制捆带（`steel_strapping`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：钢制包装捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录随产品交付的质量，不计厂内重复使用捆带
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 精整与包装用电（`finishing_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经进一步加工合金钢成品（`finished_alloy_steel_product`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：未另列明的经进一步加工合金钢平板轧材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将计量净合格输出归一化为 1,000 kg，不含可拆卸运输包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feedstock_mass_balance`
- 来源：`worldsteel-finished-cold-rolled-coil-2026`

##### 废物流

##### 基本流

### 过程：场内冷加工废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 氢氧化钠中和剂（`sodium_hydroxide`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：氢氧化钠溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原态产品库存平衡记录并申报浓度；仅实际使用时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废水处理用电（`wastewater_treatment_electricity`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将分表电量或有记录的设备分配电量换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_energy`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

###### 冷加工废水处理进水（`wastewater_treatment_feed`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：合金钢精加工冷加工废水处理进水
- 流属性/单位：体积 / m3
- 数量规则：计量扣除内部循环后的净处理进水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 脱水金属氢氧化物污泥（`metal_hydroxide_sludge`）

当路线条件适用时，该原子交换跨越所申报的过程边界；其数量按下列要求取得。

- 选定流：冷加工废水产生的脱水金属氢氧化物污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量湿质量并申报干固体分数、金属含量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品生产线和共享公用工程 | 优先按批次、计量表、运行时间、质量通量、镀覆面积或处理体积分开建模；记录所有共享服务分配因子。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_scrap` | 在所代表场址内回用的废钢 | 记录废钢质量和去向，但不得将其计为外部废钢投入，也不得在前景清单中给予避免产品抵扣。 | `worldsteel-lci-methodology-2017` |
| `allocation_exported_residues` | 离开边界的废钢、氧化皮、再生酸或污泥 | 将每种物理输出独立记录且不在前景中给予避免负荷抵扣；任何下游系统扩展或回收方法应另行报告。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_mass_balance` | `feedstock_receiving_preparation`; `finishing_packaging` | 来料、中间品、产品质量 | 衡器和钢卷谱系记录 | 卷号；合金；状态；毛重；皮重；废料；合格质量；时间 | 将经校准衡器与谱系对账 | kg | 每卷和每批次 | 代表性 12 个月或完整较短批次 | 纳入生产线 | 汇总并按净合格输出归一化 | 校准和库存对账 |
| `cp_stage_energy` | 所有阶段 | 电力 | 分表和总表对账 | 表号；读数；运行时间；负荷；分配因子；供应商；电压 | 优先分表，否则采用有记录的设备分配 | kWh、MJ | 每月和每批次 | 同一生产期 | 纳入设备 | 换算 MJ 并按合格输出归一化 | 校准、账单、分配工作表 |
| `cp_stage_fuel_and_emissions` | `pickling_rinsing`; `annealing_heat_treatment`; `metallic_coating` | 天然气和直接 CO2 | 燃气表、账单、因子 | 体积；状态；热值；碳因子；氧化因子；归属 | 计量对账并以有据因子计算 CO2 | m3、MJ、kg | 每月和每批次 | 同一生产期 | 各燃烧单元 | 按阶段归属并归一化 | 校准、供应商声明、公式复核 |
| `cp_pickling_records` | `pickling_rinsing` | 钢、酸、水、废液 | 生产线、槽液、计量和废物记录 | 投入/产出；酸及浓度；库存；再生；水；废液 | 生产线与库存对账 | kg、m3、m2 | 批次和每月 | 同一生产期 | 酸洗及再生 | 仅记录净补充和净输出 | 校准、分析、联单 |
| `cp_cold_rolling_records` | `cold_reduction` | 钢、油、废钢 | 轧机、库存、废物记录 | 投入/产出；厚度；油库存；废钢；去向 | 谱系与库存对账 | kg | 批次和每月 | 同一生产期 | 轧制及辅助设备 | 净补充和净输出 | 校准和联单 |
| `cp_annealing_records` | `annealing_heat_treatment` | 钢和氮气 | 炉次和气体记录 | 钢卷质量；炉型；周期；温度；氮气；纯度；状态 | 炉次与谱系关联 | kg、m3 | 每炉或连续批次 | 同一生产期 | 纳入炉体 | 汇总路线记录 | 日志完整性和校准 |
| `cp_temper_finishing_records` | `temper_skin_pass`; `finishing_packaging` | 钢、油、损失 | 生产线、库存、检验记录 | 质量；油；切边；不合格；返工；表面状态 | 谱系和库存对账 | kg | 批次和每月 | 同一生产期 | 平整与精整 | 返工只计一次并归一化 | 校准和处置记录 |
| `cp_coating_records` | `metallic_coating` | 基材、锌、镀后产品 | 镀层线、金属、镀层试验 | 基材/产出；锌库存；面积；镀层质量 | 金属库存与实测镀层对账 | kg、m2 | 批次和每月 | 同一生产期 | 镀锌线 | 闭合锌和基材平衡 | 校准和镀层试验 |
| `cp_packaging_records` | `finishing_packaging` | 随产品交付的钢制捆带 | 包装物料清单和领用记录 | 材料；单件质量；件数；退回状态 | 称量并与发运对账 | kg、件 | 每配置和批次 | 同一生产期 | 随产品交付包装 | 件数换算质量 | 称量和物料清单 |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | 进水、氢氧化钠、污泥 | 流量、化学品、实验室、废物记录 | 进水；pH；浓度；库存；污泥干湿质量；金属；去向 | 对账流量、药剂和污泥 | m3、kg | 每日或每批及每月 | 同一生产期 | 场内处理 | 按流量和污染负荷分配 | 校准、实验室 QA/QC、联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | 所有行 | 归一化量 = 批次量 / 批次净合格质量 × 1,000 kg | 批次交换；合格质量 | 每参考流交换量 | |
| `calc_electricity_to_mj` | 电力 | MJ = 电表 kWh × 3.6 | kWh | MJ | |
| `calc_direct_fossil_co2` | 直接化石 CO2 | CO2 = 阶段燃料量 × 有据碳因子 × 氧化因子 | 燃料、状态、因子 | kg 化石 CO2 | |
| `calc_mass_balance_check` | 物料阶段 | 未解释差异 = 投入 − 实测产品及废物输出；调查差异而不作分配 | 投入、产出、库存变化 | 差异 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品和中间品 | 保留从来料合金和状态到成品尺寸、性能、表面、镀层及包装的谱系。 | 产品规范、质保书、路线卡 |
| `dq_temporal_alignment` | 所有记录 | 采用同一代表期，并解释停机、试验、异常批次和数据替代。 | 周期对账和异常日志 |
| `dq_meter_scale_control` | 实测交换 | 保存衡器、公用工程表计、流量计和实验室方法的校准或核查证据。 | 校准和 QA/QC 记录 |
| `dq_route_completeness` | 条件工序 | 说明每项纳入/排除理由，并防止耦合生产线重复计算。 | 路线决定和跨过程对账 |
| `dq_supplier_representativeness` | 外购投入 | 匹配牌号、状态、地域、技术和时期；披露代理。 | 供应商声明和数据集选择 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference_flow` | 产品数据集 | 核对 PCR id、CPC 语境、必需限定信息及恰好 1,000 kg 净合格参考产品。 | `unsd-cpc-3-0-structure-2025`; `worldsteel-finished-cold-rolled-coil-2026` |
| `validate_route_and_atomic_inventory` | 过程图和清单 | 核实每个纳入工序确实发生、每个缺失条件工序已有说明，且每行仅含一个原子交换。 | `eu-jrc-fmp-bref-2022` |
| `validate_mass_internal_transfers` | 物料平衡 | 对账来料、中间品、合格产品、废钢、锌、污泥和库存变化，并标记所有未解释差异。 | `eu-jrc-fmp-bref-2022` |
| `validate_energy_direct_co2` | 电力、天然气、CO2 | 对账表计和账单，核查换算及燃气状态，并确保直接化石 CO2 只计算一次。 | |
| `validate_recycling_allocation` | 废钢和外送输出 | 核实内部废钢不作为外部投入、外送输出不获前景抵扣，且下游回收方法另行申报。 | `worldsteel-lci-methodology-2017` |
| `validate_unresolved_evidence` | 候选 PCR 使用 | 将空 UUID 和缺少独立来源范围视为审查需求；不得采用代理 UUID 或虚构区间。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以已申报合金钢平板轧材为投入的进一步加工前景生产数据集 |
| downstream_use | 完成审查和证据缺口后作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 与合金、来料状态、路线、地域、时期和市场状态匹配的 LCA、碳足迹、EPD、供应链及改进研究 |
| excluded_use | 上游炼钢；排除的钢类别；零件制造；使用；寿命终结；未披露的通用代理 |
| required_metadata | PCR 和 CPC 语境；合金；供应商和来料状态；过程顺序；场址；时期；尺寸；表面/镀层；能源；水和酸系统；废钢；包装；分配和回收方法 |
| required_quality_disclosure | 覆盖度、计量质量、供应商代表性、路线排除、共享服务分配、质量平衡缺口、代理、未解决 UUID 和未解决范围 |
| update_trigger | 合金、来料状态、路线、炉型/镀层技术、能源、酸/水系统、规范、包装、场址或时期变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-03） | CPC 41239 身份 |
| `eu-jrc-fmp-bref-2022` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Ferrous Metals Processing Industry*，2022。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf（检索于 2026-09-03） | 边界、过程、交换、水和废物处理 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | 世界钢铁协会，*Life Cycle Inventory Methodology Report*，2017。https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索于 2026-09-03） | 过程链、分配、废钢和回收 |
| `worldsteel-finished-cold-rolled-coil-2026` | 数据集（`dataset`） | 世界钢铁协会，*Global Finished Cold Rolled Coil - Construction*，2026-04。https://worldsteel.org/wider-sustainability/life-cycle-thinking/lca-eco-profiles-2026-release/global-finished-cold-rolled-coil-construction/（检索于 2026-09-03） | 申报单位和代表性成品状态 |
