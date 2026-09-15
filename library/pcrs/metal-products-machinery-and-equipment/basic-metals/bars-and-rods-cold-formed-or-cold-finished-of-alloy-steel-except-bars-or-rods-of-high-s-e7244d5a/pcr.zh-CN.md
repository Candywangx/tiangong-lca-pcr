---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-or-cold-finished-of-alloy-steel-except-bars-or-rods-of-high-s-e7244d5a
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 合金钢冷成形或冷加工条、杆（高速钢或硅锰钢条、杆除外）

## 1. 范围与适用性

本 PCR 适用于销售状态为冷成形或冷加工的合金钢条、杆的门到门生产。前景边界始于冷加工场址接收热轧合金钢条、杆原料，止于合格产品离开该场址发运门。适用路线可采用冷拉、磨削或剥皮；拉后退火、化学酸洗、机械除鳞和防锈油涂覆仅在实际实施时纳入。

不包括高速钢条、杆、硅锰钢条、杆、钢丝、空心钻钢、仅经热加工的条、杆，以及在冷成形或冷加工状态之后进一步加工的条、杆。上游炼钢和热轧须链接上游数据集。发运门之后的下游制造、运输、使用和寿命终止阶段不在本前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-or-cold-finished-of-alloy-steel-except-bars-or-rods-of-high-s-e7244d5a |
| classification_refs | CPC 3.0: 41264 (exact) |
| covered_products | 以冷成形或冷加工状态投放市场的实心合金钢条、杆，包括采用冷拉、磨削或剥皮制得的光亮钢棒 |
| excluded_products | 高速钢或硅锰钢条、杆；钢丝；空心钻钢；仅经热加工的产品；在冷成形或冷加工之后进一步加工的产品 |
| representative_product | 尺寸合格的冷加工合金钢光亮棒 |
| production_route | 接收热轧合金钢条、杆；按需表面预处理；冷拉、磨削或剥皮；可选退火；最终矫直、切割、检验及可选防锈处理 |
| market_state | 生产场址门口的干燥可售条、杆，并声明合金牌号、截面、尺寸、公差、交货形态、热处理状态和表面状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产合格的冷成形或冷加工合金钢条、杆 |
| How much | 1,000 kg 参考产品净质量 |
| How well | 满足声明的合金牌号、截面、尺寸公差、力学性能状态和表面加工规范 |
| How long or cycle | 一个止于生产场址发运门的生产核算期；不表示使用寿命 |
| reference_flow_link | 扣除包装、垫料、切头切尾、氧化铁皮、切屑及其他非产品物料后，合格输出净质量固定为 1,000 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 冷成形或冷加工合金钢条、杆 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号与成分规范；排除高速钢；排除硅锰钢；冷加工路线；输入产品形态；输出截面与尺寸；尺寸公差；交货形态；热处理状态；表面状态及规定时的粗糙度；是否施用防锈油；生产场址与地理；核算期；电力供应商、地理、电压、技术及交付边界 |

构建前景数据包时，`必需限定信息` 中列出的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失任一必需限定信息即视为该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及基于质量的清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤，或可追溯的件数、长度、截面和密度记录确定质量；将所有清单行归一化至恰好 1,000 kg 合格净输出。 |
| `net_product_definition` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品质量不包括包装、垫料、切余料、氧化铁皮、切屑、留样和不合格品。 |
| `electricity_energy_conversion` | 电力清单行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按过程保留计量电量；按 1 kWh = 3.6 MJ 换算，且不得将电力与燃料或外购热合并。 |
| `natural_gas_volume_condition` | 退火天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明的参考温度和压力报告燃气体积，并记录仪表基准及由运行条件换算至参考条件的方法。 |
| `solution_mass_and_concentration` | 酸液、润滑剂、磨削液和防锈油 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告每种化学产品的供应配方质量，并保留浓度或配方记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在冷加工场址进厂门实际接收的热轧合金钢条、杆，并声明合金牌号、质量、尺寸、表面状态、供应商和上游数据集 |
| starting_condition_role | 作为下游冷加工投入的外购或调拨上游产品 |
| product_classification_scope | 最终参考产品符合 CPC 3.0 子类 41264 及其排除条件；中间流和废物流不因出现在过程中而取得该分类 |
| recursive_input_rule | 外部供应且已属于本类别的冷加工产品作为带上游数据集的投入记录，不递归重建；前景仅清单化附加的实质性加工 |
| upstream_dataset_requirement | 合金钢生产和热轧采用供应商特定或具有代表性的上游数据集，并匹配牌号、再生含量核算、形态、技术、地理和交付边界 |
| disclosure | 声明场址、地理、期间、合金牌号、输入形态、冷拉/磨削/剥皮路线、表面预处理、退火与炉用能源、收得率、钢残余物状态、电力交付限定信息以及全部排除项或估算 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | 前景转化 | 纳入接收与预处理、所声明的冷拉、磨削或剥皮路线、最终整理、检验以及直接必需的场内辅助作业。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_conditional_stages` | 路线特定作业 | 仅在相应作业发生时纳入酸洗、机械除鳞、退火、磨削液、拉拔润滑剂和防锈油；依据路线记录说明不适用性。 | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_feedstock` | 上游分隔 | 炼钢和热轧保持在本前景转化之外，并将接收原料链接至合格的上游数据集，不截断其负荷。 | `worldsteel-lci-methodology-2017` |
| `boundary_inventory_completeness` | 全部前景单元过程 | 记录每项能源投入，以及按质量、能量或环境相关性具有实质性的每项物料、废物和基本流交换；逐项识别并论证任何排除。 | `worldsteel-lci-methodology-2017` |
| `boundary_gate_exclusions` | 下游阶段 | 排除生产场址发运门之后的运输、客户制造、使用和寿命终止；任何更宽研究模块须单独披露。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | 原料接收与表面预处理 | `required` | 始终纳入接收和检验；机械除鳞或酸洗、漂洗仅在实际实施时纳入 | 建立合格输入状态并制备表面 | 表面预处理后合金钢条、杆的输出质量 |
| `cold_processing` | 冷成形或冷加工 | `required` | 纳入一种已声明的冷拉、磨削或剥皮路线及其实际辅助投入 | 形成所需尺寸、表面和力学状态 | 冷加工合金钢条、杆的输出质量 |
| `annealing` | 冷加工后退火 | `conditional` | 仅在冷加工后实施退火或去应力处理时纳入 | 调整延性和力学状态 | 退火后冷加工产品的输出质量 |
| `final_conditioning` | 最终整理、检验与发运 | `required` | 始终纳入最终合格作业；仅在实际涂覆时纳入防锈油 | 放行可售参考产品 | 1,000 kg 合格参考产品净输出 |

### 过程：原料接收与表面预处理（`surface_preparation`）

#### 输入

##### 产品流

###### 热轧合金钢原料 (`hot_rolled_alloy_steel_feedstock`)

记录接收的热轧合金钢条、杆质量，并将牌号、尺寸和状态与上游数据集核对。

- 选定流： 除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 归属于核算期的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 表面预处理用电 (`surface_prep_electricity`)

记录实际用于搬运、除鳞、酸洗、漂洗和泵送的交流电。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- 数量规则： 过程分表计量并换算为 MJ 的电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `worldsteel-lci-methodology-2017`

###### 盐酸酸洗液 (`hydrochloric_acid_input`)

仅在路线消耗盐酸时纳入盐酸溶液，并记录供应溶液的质量和浓度。

- 选定流： 盐酸溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 盐酸酸洗消耗的实测净补充液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 硫酸酸洗液 (`sulfuric_acid_input`)

仅在路线消耗硫酸时纳入硫酸溶液，并记录供应溶液的质量和浓度。

- 选定流： 硫酸溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 硫酸酸洗消耗的实测净补充液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 酸洗与漂洗用水 (`pickling_rinse_water`)

仅在实际用水时纳入工艺用水；计量跨越场址边界的新鲜补水，不计内部循环量。

- 选定流： 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测新鲜工艺补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 表面预处理后的合金钢条、杆 (`prepared_alloy_steel_bar_output`)

记录离开表面预处理过程的质量，并声明表面状态和路线。

- 选定流： 表面预处理后的合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 表面预处理后的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个表面预处理生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

###### 去除的氧化铁皮 (`steel_scale_waste`)

仅在机械除鳞或铁皮分离产生该废物时纳入合金钢氧化铁皮。

- 选定流： 合金钢氧化铁皮废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 送往声明处理路线的实测收集氧化铁皮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 废盐酸酸洗液 (`spent_hydrochloric_pickling_liquor`)

仅在含铁废盐酸以废物形式离开前景时纳入。

- 选定流： 含铁废盐酸酸洗液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理或再生的实测废液净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 废硫酸酸洗液 (`spent_sulfuric_pickling_liquor`)

仅在含铁废硫酸以废物形式离开前景时纳入。

- 选定流： 含铁废硫酸酸洗液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理或再生的实测废液净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 酸洗漂洗废水 (`pickling_rinse_wastewater`)

仅在酸性漂洗废水转往场内或外部处理时纳入。

- 选定流： 酸性酸洗漂洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 表面预处理后合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_surface_preparation_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 基本流
### 过程：冷成形或冷加工（`cold_processing`）

#### 输入

##### 产品流

###### 表面预处理后的合金钢条、杆 input (`prepared_alloy_steel_bar_input`)

将表面预处理的实测输出传递至声明的冷加工路线。

- 选定流： 表面预处理后的合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测中间产品输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个冷加工生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 冷加工用电 (`cold_processing_electricity`)

记录声明的冷拉、磨削或剥皮设备及其直接辅助设备的用电。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- 数量规则： 过程分表计量并换算为 MJ 的电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 冷加工合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_cold_processing_records`
- 来源： `worldsteel-lci-methodology-2017`

###### 拉拔润滑剂 (`drawing_lubricant_input`)

仅在路线采用冷拉时纳入一种已明确识别的拉拔润滑剂。

- 选定流： 钢材拉拔润滑剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测润滑剂净补充消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 冷拉合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 磨削液 (`grinding_fluid_input`)

仅在湿式磨削时纳入已识别的磨削液；净补充量不含循环液。

- 选定流： 钢材磨削液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测磨削液净补充消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 磨削合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 磨削磨料 (`grinding_abrasive_input`)

将磨削路线消耗的具体磨料产品与磨削液分开纳入。

- 选定流： 磨料 `685e7b7f-1555-4112-aa0b-3786e5508534`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测磨料更换消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 磨削合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷加工合金钢条、杆中间产品 (`cold_finished_alloy_steel_bar_output`)

记录可选退火和最终整理前的冷加工输出，并声明路线和状态。

- 选定流： 最终整理前的冷加工合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 冷加工后的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个冷加工生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

###### 废拉拔润滑剂 (`spent_drawing_lubricant`)

仅在含合金钢细屑的废拉拔润滑剂离开拉拔循环时纳入。

- 选定流： 废钢材拉拔润滑剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理的实测废润滑剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 冷拉合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 废磨削液 (`spent_grinding_fluid`)

仅在含合金钢细屑的废磨削液离开磨削循环时纳入。

- 选定流： 废钢材磨削液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理的实测废液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 磨削合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 合金钢切屑 (`steel_swarf_waste`)

将磨削或剥皮去除的合金钢切屑作为独立废物交换纳入。

- 选定流： 钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 送往声明处理路线的实测切屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 磨削或剥皮合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 合金钢切头切尾 (`steel_end_crop_waste`)

冷加工产生的切头切尾以废物状态离开时予以纳入。

- 选定流： 合金钢切头切尾废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 送往声明处理路线的实测切头切尾质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 冷加工合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `worldsteel-lci-methodology-2017`

###### 废磨削磨料 (`used_grinding_abrasive`)

仅在含合金钢颗粒的废磨料被移出处理时纳入。

- 选定流： 废磨料 `69bac8b0-e9df-4945-9c94-f65c63531203`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 转往处理的实测废磨料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 磨削合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_cold_processing_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 基本流
### 过程：冷加工后退火（`annealing`）

#### 输入

##### 产品流

###### 待退火冷加工条、杆 (`cold_finished_bar_for_annealing`)

仅在产品规范要求冷加工后热处理时纳入该中间产品。

- 选定流： 待退火冷加工合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测装炉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个退火生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_annealing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 退火炉用天然气 (`annealing_natural_gas`)

仅在实际消耗时纳入气态天然气；声明供应地理、炉子功能与技术以及参考体积条件。

- 选定流： 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；体积 `93a60a57-a3c8-12da-a746-0800200c9a66`; m3
- 数量规则： 声明参考条件下的天然气计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 退火后冷加工合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_annealing_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 退火用电 (`annealing_electricity`)

记录供给炉控、风机、搬运和电加热区域的电量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- 数量规则： 过程分表计量并换算为 MJ 的电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 退火后冷加工合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_annealing_records`
- 来源： `worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火后的冷加工合金钢条、杆 (`annealed_alloy_steel_bar_output`)

记录输出质量，并声明热处理状态和合格状态。

- 选定流： 退火后的冷加工合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 退火后的实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个退火生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_annealing_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 退火产生的化石源二氧化碳 (`fossil_co2_air`)

纳入场内天然气燃烧直接排放的化石源二氧化碳；此处不计上游燃气供应排放。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 依据烟囱直接监测，或根据采集的燃气量、碳含量和氧化数据进行碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 退火后冷加工合金钢条、杆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_annealing_records`
- 来源： `worldsteel-lci-methodology-2017`

### 过程：最终整理、检验与发运（`final_conditioning`）

#### 输入

##### 产品流

###### 最终整理前的冷加工产品 (`final_conditioning_input`)

记录进入最终整理的中间产品，并声明退火或未退火状态。

- 选定流： 最终整理前的冷加工合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 实测中间产品输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每个最终整理生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_final_conditioning_records`
- 来源： `ec-jrc-fmp-bref-2022`

###### 最终整理用电 (`final_conditioning_electricity`)

记录用于矫直、切割、检验和发运准备的电量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`; MJ
- 数量规则： 过程分表计量并换算为 MJ 的电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_final_conditioning_records`
- 来源： `worldsteel-lci-methodology-2017`

###### 防锈油 (`rust_preventive_oil_input`)

仅在有意施用于可售产品时纳入已识别的防锈油。

- 选定流： 钢材防锈油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 施用于合格产品的实测防锈油净补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_final_conditioning_records`
- 来源： `ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品 (`reference_product_output`)

这是声明的参考产品；其准确 Tiangong 产品流 UUID 尚未解决。

- 选定流： 冷成形或冷加工合金钢条、杆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 按参考流归一化得到恰好 1,000 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准： 每个声明参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源： `worldsteel-lci-methodology-2017`; `unsd-cpc-3-0-2025`

###### 回收合金钢废料共产品 (`recovered_alloy_steel_scrap`)

仅在规范、所有权转移、市场接受和非废物状态均有记录时，才将分选废料作为产品输出。

- 选定流： 回收合金钢废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 以产品或共产品状态放行的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_final_conditioning_records`
- 来源： `worldsteel-lci-methodology-2017`

##### 废物流

###### 具有废物状态的合金钢切余料 (`steel_offcut_waste`)

仅在最终切余料以废物形式离开时纳入；不得与回收废料重复计量。

- 选定流： 合金钢切余料废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`; kg
- 数量规则： 送往声明废物处理路线的实测切余料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_final_conditioning_records`
- 来源： `worldsteel-lci-methodology-2017`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 独立计量作业 | 有过程特定记录时，通过细分表面预处理、冷加工、退火和最终整理来避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recirculation` | 内部钢料返回与循环液 | 前景内再用物料作为内部循环处理；仅报告跨边界净交换，并保留总量记录供质量平衡审查。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_status` | 合金钢残余物 | 按记录的状态和去向，将每项残余物唯一分类为内部返回料、回收废料共产品或废物；禁止重复质量或自动计入避免负荷。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_campaign` | 不可分割的多产品批次 | 无法细分时，按物理相似钢产品的合格实测质量分配共享负荷；披露产品集合、分配因子、排除的不合格质量及敏感性。 | `worldsteel-lci-methodology-2017` |
| `allocation_system_expansion` | 单独建模的回收废料收益 | 仅在被替代生产、废料质量、回收收得率、地理和功能等价性均有记录时，才在本前景之外应用替代；单独报告未计信用的废料并披露敏感性。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_preparation_records` | `surface_preparation` | 原料、能源、化学品、水、预处理输出和废物 | 秤、发票、批次单、补充记录、仪表和转移单 | 日期；批次；牌号；输入/输出质量；kWh；酸种；溶液质量/浓度；水；废物质量/去向 | 按批次或仪表区间采集并与订单核对 | kg；kWh；仪表记录的 m3 | 每批或仪表区间，按月汇总 | 有代表性的连续 12 个月 | 过程设备和直接辅助设备 | 汇总可归属记录，将电力换算为 MJ，扣除内部循环并归一化 | 校准；证书；测试；批次核对；转移单 |
| `cp_cold_processing_records` | `cold_processing` | 中间产品、电力、辅助投入、输出和废物 | 秤、订单、路线日志、仪表、领用记录和废物记录 | 日期；批次；路线；尺寸；质量；kWh；润滑剂/磨削液/磨料质量；废物去向 | 冷拉、磨削或剥皮分别采集 | kg；kWh | 每批或仪表区间，按月汇总 | 有代表性的连续 12 个月 | 冷加工线及直接辅助设备 | 按路线核对，将电力换算为 MJ，并按输出归一化 | 校准；路线日志；领用记录；转移单；检验 |
| `cp_annealing_records` | `annealing` | 装炉料、燃气、电力、输出和化石源 CO2 | 秤、炉次日志、仪表、燃料分析和烟囱或碳记录 | 日期；批次；炉子；质量；温度周期；燃气及条件；燃气碳；kWh；化石源 CO2 | 每个退火批次采集；未运行时保留不适用证据 | kg；m3；kWh；kg CO2 | 每批或仪表区间，按月汇总 | 有代表性的连续 12 个月 | 炉子及直接控制、风机和搬运 | 换算电力、归一化燃气、依据采集碳数据或监测计算 CO2，并归一化 | 校准；炉次日志；燃料证书；计算表或烟囱报告 |
| `cp_final_conditioning_records` | `final_conditioning` | 中间产品、电力、防锈油、产品、废物和废料 | 秤、订单、仪表、领用记录、检验和转移记录 | 日期；批次；输入质量；kWh；防锈油；合格输出；废物；废料；状态；去向 | 按批次采集并核对每项钢料去向 | kg；kWh | 每批或仪表区间，按月汇总 | 有代表性的连续 12 个月 | 最终作业和发运准备 | 换算电力，区分状态且不重复计量，归一化至 1,000 kg | 校准；放行；领用记录；状态证据；质量平衡签署 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 核算期交换量 × 1,000 kg / 合格参考产品净质量 | 交换量；产品净质量 | 每 1,000 kg 产品的交换量 | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | 电力清单行 | 电力 MJ = 计量 kWh × 3.6 MJ/kWh，按过程分别计算 | 过程 kWh | 电力 MJ |  |
| `calc_material_balance` | 各过程及总前景 | 钢投入 = 产品 + 共产品 + 废物 + 内部转移 + 实测库存变化；调查残差 | 输入/输出/库存质量 | 质量平衡残差 | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | 燃气退火 | 使用烟囱直接监测，或依据采集的燃气量、参考条件换算、碳含量和氧化率计算 | 燃气；条件；碳；氧化率或烟囱结果 | kg 化石源 CO2 | `worldsteel-lci-methodology-2017` |
| `calc_multi_product_allocation` | 不可分割批次 | 已分配交换量 = 共享交换量 × 参考产品合格质量 / 批次全部产品合格总质量 | 共享交换量；合格质量 | 已分配交换量 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品与原料 | 保留牌号、成分/代号、尺寸、公差、路线、热处理状态、表面状态和排除证据。 | 供应商证书和成品放行检验 |
| `dq_primary_foreground` | 全部前景行 | 使用场址一手记录，并逐项识别估算、分配、缺失区间和代理。 | 仪表、秤、批次、发票、库存、实验室和转移记录 |
| `dq_temporal_coverage` | 全部前景行 | 使用有代表性的连续 12 个月数据；超过五年的数据须论证并比较技术。 | 覆盖表和技术变更审查 |
| `dq_route_separation` | 冷加工与退火 | 冷拉、磨削、剥皮和退火记录保持分离；无产量加权份额时不得平均路线。 | 带路线编码的生产与仪表记录 |
| `dq_completeness` | 全部过程 | 核对钢质量和能源；逐项列出排除的物料或排放交换并论证相关性。 | 已签署平衡表和排除清单 |
| `dq_uuid_status` | 选定流 | 将每个 UUID 空缺行解析至准确公开 Tiangong 流，或保留明确未解决条目；不得替代为代理流。 | 直读审计或 manifest 未解决条目 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别 | 若缺少牌号、形态、冷加工路线、市场状态或排除信息，或产品属于排除类别，则判定失败。 | `unsd-cpc-3-0-2025`; `ec-jrc-fmp-bref-2022` |
| `validate_reference_flow` | 参考产品 | 除非归一化后合格净输出恰为 1,000 kg 且已扣除非产品质量，否则判定失败。 | `worldsteel-lci-methodology-2017` |
| `validate_route_conditions` | 条件作业 | 若条件交换为正值但无对应路线，或实际运行步骤缺少其原子投入与输出，则判定失败。 | `ec-jrc-fmp-bref-2022` |
| `validate_energy` | 电力与燃气 | 若电力与燃料合并、交付限定信息缺失、换算不一致，或燃气条件与炉子功能未声明，则判定失败。 | `worldsteel-lci-methodology-2017` |
| `validate_mass_balance` | 过程与前景 | 若钢投入、输出、内部转移及库存变化在记录的测量不确定度内无法核对，则判定失败或要求更正。 | `worldsteel-lci-methodology-2017` |
| `validate_residue_status` | 钢残余物 | 若残余物质量重复计量，或回收废料的产品状态缺少规范和转移证据，则判定失败。 | `worldsteel-lci-methodology-2017` |
| `validate_data_quality` | 数据集生产 | 若未披露期间、场址覆盖、路线分离、校准、缺失数据处理、分配和排除项，则判定失败。 | `worldsteel-lci-methodology-2017` |
| `validate_uuid_accounting` | 清单身份 | 每个清单行须包含经直读验证的公开 Tiangong UUID 或匹配的 manifest 未解决条目；禁止代理 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查并解决 UUID 后，可发布为 `secondary_dataset` 或 `background_dataset` 的门到门前景数据集 |
| downstream_use | 链接合格的上游合金钢和能源数据集；经边界检查后用于摇篮到门产品系统、过程数据集或 lifecyclemodel 投影 |
| allowed_use | 对声明的牌号、状态、路线、场址/地理、技术和期间进行建模；仅在统一边界与分配后用于对标 |
| excluded_use | 排除的钢类别或未披露的平均路线；缺少研究特定功能单位和审查的公开比较声明 |
| required_metadata | PCR id；CPC 参考；牌号；规范；输入形态；输出尺寸/公差；交货形态；冷加工路线；表面预处理；退火/炉子；表面状态；场址/地理；期间；电力限定信息；上游数据集；分配和废料状态 |
| required_quality_disclosure | 一手数据比例；12 个月覆盖；校准；质量平衡残差；路线份额；缺失数据与估算；UUID 缺口；范围证据缺口；排除项；分配敏感性；上游数据年龄与代表性 |
| update_trigger | 范围、路线、退火技术/燃料、电力、场址边界、废料状态、分配、上游原料、路线组合发生变化，或记录超过五年 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 正式指导（`official_guidance`） | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | CPC 41264 的准确身份及其相对于 41265、41271 和 41272 的排除边界 |
| `ec-jrc-fmp-bref-2022` | 正式指导（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022, https://doi.org/10.2760/196475 (retrieved 2026-09-03) | 冷拉、磨削、剥皮、整理及可能退火的边界与过程分解 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | World Steel Association, Life Cycle Inventory Methodology Report for Steel Products, ISBN 978-2-930069-89-0, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | 质量声明单位、门到门完整性、一手数据质量、归一化、质量平衡与分配 |
| `china-mof-tariff-2026` | 正式指导（`official_guidance`） | Ministry of Finance of the People's Republic of China, 国别清单及税目税率表（2026年）, tariff line 72285000, https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-03) | 用于核验中文标题的专业术语“其他合金钢冷成形或冷加工条、杆” |
