---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-seamless
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 其他圆形截面无缝钢管

## 1. 范围与适用性

本 PCR 适用于生产厂门口边界的圆形截面无缝钢管，但不包括石油或天然气管线用无缝钢管，也不包括石油或天然气钻探用无缝套管、油管和钻杆。在申报钢种和工艺路线的前提下，范围涵盖非合金钢、合金钢和高铬钢。前景边界始于外购钢坯、大方坯或圆钢，涵盖加热、穿孔、延伸、终轧或定径、冷却及在线精整。产品规范要求时，纳入独立热处理和冷加工减径。

焊接管或开缝管、铸管、非圆形截面管或空心异型材、有色金属管、管件、涂层、镀锌、包装、出厂运输、使用和生命末期均不在范围内。收到的钢铁半成品、燃料、电力、水和轧制油的上游生产通过关联上游数据集表示，不在前景内重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-seamless |
| classification_refs | CPC 3.0：41283；语义上精确的候选关系，尚待映射接受 |
| covered_products | 其他圆形截面无缝钢管，包括热加工或冷加工状态的非合金钢、合金钢和高铬钢产品 |
| excluded_products | 石油或天然气管线用无缝钢管；石油或天然气钻探用无缝套管、油管和钻杆；焊接管或开缝管；非圆形截面无缝型材；铸管或有色金属管；管件 |
| representative_product | 无涂层、无包装、位于生产厂门口的圆形截面无缝钢管 |
| production_route | 钢坯、大方坯或圆钢加热、穿孔、延伸、终轧或定径、冷却，以及已申报的条件性热处理或冷加工减径 |
| market_state | 生产厂门口的成品无涂层、无包装钢管，并申报钢种、尺寸、热处理状态及热加工或冷加工状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产满足规定钢种、尺寸和交货状态的圆形截面无缝钢管 |
| How much | 1,000 kg 合格产品净质量 |
| How well | 满足已申报的钢种、外径、壁厚、长度、尺寸公差、热处理状态、表面状态和适用客户规范 |
| How long or cycle | 截止生产厂门口的一个生产批次或生产周期；不表示使用阶段寿命 |
| reference_flow_link | 完成全部已纳入热成形和已申报条件性精整后的合格产品净称量质量，不含包装质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 其他圆形截面无缝钢管；UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢种及合金系列；钢坯、大方坯或圆钢投入形态；外径；壁厚；产品长度；热加工或冷加工状态；穿孔和轧制技术；热处理状态；表面状态；炉用燃料；生产场址和地理范围；生产期间；分配处理；确认不含涂层和包装 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及过程间钢管转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的产品净质量，并扣除不合格件、松散氧化铁皮、工艺液体和包装。所有过程总量均归一化为 1,000 kg 合格参考产品。 |
| `electricity_energy_conversion` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留场址电表原始读数，按 1 kWh = 3.6 MJ 转换；不得将上游发电排放作为前景基本流加入。 |
| `fuel_quantity_basis` | 气态天然气和重质燃料油 | 天然气采用 Volume；重质燃料油采用 Mass | m3；kg | 按场址声明的参考条件记录天然气，按质量记录重质燃料油。两种燃料不得合并，仅对申报炉型实际适用的原子燃料行填报数量。 |
| `water_mass_basis` | 外供工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按质量记录跨越轧管厂边界的工艺用水。使用体积表时，保留实测体积、水温及场址密度换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购钢坯、大方坯或圆钢交付至无缝钢管厂门口，并申报钢种、投入形态、质量、温度状态和供应商数据集 |
| starting_condition_role | 进入前景钢管制造的上游钢铁半成品 |
| product_classification_scope | 除已排除的油气管线用钢管和钻探用钢管类别之外的圆形截面无缝钢管 |
| recursive_input_rule | 已纳入前景过程之间转移的钢管属于内部中间产品，不再关联同类别上游数据集；仅进入精整过程的外购同类别钢管须披露，并仅关联一次其上游生产数据集 |
| upstream_dataset_requirement | 按实际供应地理范围和技术，关联钢铁半成品、每种适用燃料、电力供应、工艺用水和每种轧制油的数据集 |
| disclosure | 申报已纳入的热成形、热处理和冷加工过程；炉用燃料；钢种；投入温度；产品状态；回收去向；排除的涂层、包装和运输；以及在报告场址外运行的任何过程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_hot_forming` | 所有数据集 | 从收到钢铁半成品到热加工钢管输出，纳入投入加热、穿孔、延伸或拉伸、终轧或定径、冷却、直接公用工程、产生的氧化铁皮和废钢，以及直接炉窑排放。 | `ec-jrc-fmp-bref-2022` |
| `boundary_conditional_finishing` | 热处理或冷加工产品 | 仅当为申报参考产品实际实施时才纳入独立热处理和冷加工减径；识别过程间钢管转移，避免将其重复计为外购投入。 | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_and_downstream` | 关联供应和排除阶段 | 上游投入生产使用关联数据集表示。涂层、镀锌、包装、出厂运输、使用和生命末期均排除，除非后续研究层透明地加入。 | `unsd-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_tube_forming` | 无缝钢管热成形 | required | 从钢坯、大方坯或圆钢生产时始终纳入 | 前景生产 | 1,000 kg 转移或销售的合格热加工钢管 |
| `separate_heat_treatment` | 独立热处理 | conditional | 热轧后需要正火、回火或其他独立热循环时纳入 | 前景调质 | 1,000 kg 转移或销售的合格热处理钢管 |
| `cold_tube_finishing` | 钢管冷加工精整 | conditional | 冷拔或冷轧减小直径、壁厚或形成申报表面状态时纳入 | 前景调质 | 1,000 kg 合格冷加工钢管 |

### 过程：无缝钢管热成形（`hot_tube_forming`）

#### 输入

##### 产品流

###### 钢坯或大方坯投入（`hf_steel_billet`）

按钢种区分的钢坯、大方坯或圆钢在复热和穿孔前跨越前景边界。

- 选定流：钢坯或大方坯；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：分配至该生产批次的实测收料净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 交流电（`hf_electricity`）

交流电用于分配至热成形的穿孔、轧制、定径、泵、风机、搬运和冷却设备。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_electricity`
- 来源：`ec-jrc-fmp-bref-2022`

###### 气态天然气（`hf_natural_gas`）

仅当天然气作为投入加热或在线复热燃料跨越边界时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在申报参考条件下计量的消耗体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_fuels`
- 来源：`ec-jrc-fmp-bref-2022`

###### 重质燃料油（`hf_heavy_fuel_oil`）

仅对燃油投入加热炉或复热炉记录重质燃料油，不得与天然气合并。

- 选定流：重质燃料油 `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- 流属性/单位：Mass / kg
- 数量规则：分配炉窑的储罐平衡或发票消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_fuels`
- 来源：`ec-jrc-fmp-bref-2022`

###### 外供工艺用水（`hf_process_water`）

用于除鳞、设备冷却或直接接触冷却的外供工艺用水作为跨越轧管厂边界的一个具体水产品记录；内部循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入分配给热成形水系统的外部补充水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 热轧油（`hf_hot_rolling_oil`）

热轧或芯棒润滑系统消耗的热轧油按发出量扣除退回同一系统的未用油后记录。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：Mass / kg
- 数量规则：批次发出质量减去退回的未用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_oil`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热加工无缝钢管（`reference_product`）

称量后的圆形截面热加工无缝钢管作为过程输出，可直接销售或转移至已申报的热处理或冷加工精整。

- 选定流：其他圆形截面无缝钢管；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测合格净输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个热成形生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_material_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 回收氧化铁皮（`hf_mill_scale`）

从受热和轧制钢材表面物理脱落并由干式收集或水系统回收的氧化铁皮按质量记录。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：实测干基或收到状态质量，并申报水分和含油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

###### 工业后钢废料（`hf_steel_scrap`）

离开前景的切头、切屑、穿孔不合格品和不合格热成形管段作为废钢记录，并与氧化铁皮分开。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的称量废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 直接化石源二氧化碳（`hf_carbon_dioxide`）

热成形炉释放的化石源二氧化碳作为直接前景排放记录；本行不含上游发电排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址实测质量，或根据采集的燃料碳含量及氧化记录计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 直接氮氧化物（`hf_nitrogen_oxides`）

投入加热炉和复热炉烟囱的氮氧化物按场址监测排放区室记录；通用 PCR 使用未指定空气区室。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：由实测浓度和干烟气流量计算并分配至批次的监测或许可方法质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：独立热处理（`separate_heat_treatment`）

#### 输入

##### 产品流

###### 进入热处理的无缝钢管（`ht_seamless_tube_input`）

热加工无缝钢管进入单独计量的正火、回火或其他已申报热处理过程。

- 选定流：热处理前圆形截面无缝钢管；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测投入转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 交流电（`ht_electricity`）

分配至热处理炉辅助设备、风机、泵、搬运和控制系统的电力与热成形分开记录。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_electricity`
- 来源：`ec-jrc-fmp-bref-2022`

###### 气态天然气（`ht_natural_gas`）

仅当独立热处理炉使用天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在申报参考条件下计量的消耗体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_fuels`
- 来源：`ec-jrc-fmp-bref-2022`

###### 重质燃料油（`ht_heavy_fuel_oil`）

仅当独立热处理炉使用重质燃料油时记录，且不得与天然气合并。

- 选定流：重质燃料油 `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- 流属性/单位：Mass / kg
- 数量规则：分配炉窑的储罐平衡或发票消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_fuels`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热处理无缝钢管（`ht_finished_tube`）

独立热循环结束后的合格钢管在转移或销售前称量。

- 选定流：其他圆形截面无缝钢管；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测合格净输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个热处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 直接化石源二氧化碳（`ht_carbon_dioxide`）

独立热处理炉释放的化石源二氧化碳仅分配给该过程。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址实测质量，或根据采集的燃料碳含量及氧化记录计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 直接氮氧化物（`ht_nitrogen_oxides`）

独立热处理炉释放的氮氧化物依据适用烟囱记录进行分配。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：由实测浓度和干烟气流量计算的监测或许可方法质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格热处理钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

### 过程：钢管冷加工精整（`cold_tube_finishing`）

#### 输入

##### 产品流

###### 进入冷加工精整的无缝钢管（`cf_seamless_tube_input`）

热加工或热处理无缝钢管作为实测过程间投入进入冷拔或冷轧过程。

- 选定流：冷加工精整前圆形截面无缝钢管；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测投入转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格冷加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_mass`
- 来源：`ec-jrc-fmp-bref-2022`

###### 交流电（`cf_electricity`）

分配至冷拔或冷轧、搬运及辅助设备的电力单独分表计量。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力由 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格冷加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cold_electricity`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷轧油（`cf_cold_rolling_oil`）

进入冷加工减径系统的冷轧油按发出量扣除退回储存的未用油后记录。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass / kg
- 数量规则：批次发出质量减去退回的未用质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格冷加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cold_oil`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷加工无缝钢管（`cf_finished_tube`）

已申报减径和检验后的合格圆形截面冷加工无缝钢管按净质量称量。

- 选定流：其他圆形截面无缝钢管；UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：实测合格净输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冷加工精整批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_mass`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 工业后钢废料（`cf_steel_scrap`）

冷加工精整产生并离开过程的切头、切屑和不合格管段作为工业后钢废料记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：分配至冷加工精整批次的称量废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格冷加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废润滑油（`cf_used_lubricating_oil`）

从冷轧油系统退出并转移至处理或回收的油品按废物转移质量记录。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：从冷加工精整油路移出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格冷加工钢管输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 分别计量的生产线 | 优先按三个 process_id 细分，并采用直接的电表、称量、烟囱和废物记录；不得分配已经单独计量的过程负荷。 |  |
| `allocation_mass_shared` | 不可避免的共用公用工程和废物 | 仅对不可避免的共用总量按同一计量期间的合格产品净质量分配，除非有记录的因果工程参数能更好地表示消耗。披露参数、分母和受影响行。 |  |
| `allocation_recovered_material` | 氧化铁皮、废钢和废油 | 记录产生的全部废物质量和去向。不得从前景清单中扣除回收信用或避免产品；任何下游替代均属于选定系统模型，须另行披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hot_material_mass` | `hot_tube_forming` | 钢坯投入和热加工钢管输出 | 衡器和生产记录 | batch_id; grade; input_form; input_mass_kg; output_mass_kg; reject_mass_kg | 经校准的收料和产品衡器，并与批次记录核对 | kg | 每批 | 报告期内全部批次 | 热轧管线 | 汇总分配质量并按合格输出归一化 | 衡器校准；批次核对；不合格品日志 |
| `cp_hot_electricity` | `hot_tube_forming` | 交流电 | 分表 | meter_start_kWh; meter_end_kWh; downtime_kWh; batch_output_kg | 读取专用电表或有记录的工程分表 | kWh | 每班和每批 | 完整报告期 | 热成形设备 | 净 kWh 乘以 3.6 后除以合格输出 | 电表校准；分配日志 |
| `cp_hot_fuels` | `hot_tube_forming` | 天然气或重质燃料油 | 流量计、储罐或发票 | fuel_identity; meter_or_mass_start; meter_or_mass_end; reference_conditions; assigned_output_kg | 专用燃气表或储罐质量平衡 | m3 或 kg | 每班和每次交付 | 完整报告期 | 热成形炉 | 每种燃料分别汇总并按合格输出归一化 | 仪表校准；储罐核对；发票 |
| `cp_hot_water` | `hot_tube_forming` | 外供工艺用水 | 补充水表 | meter_start; meter_end; unit; temperature; density_if_converted; assigned_output_kg | 仅计量外部补充水，排除内部循环水 | m3 或 kg | 每班 | 完整报告期 | 分配至热成形的水系统 | 必要时换算为 kg 并按合格输出归一化 | 水表校准；水路图；换算记录 |
| `cp_hot_oil` | `hot_tube_forming` | 热轧油 | 仓储发放和退回记录 | issued_mass_kg; returned_unused_mass_kg; recovered_internal_mass_kg; batch_output_kg | 核对发放和退回库存 | kg | 每批 | 完整报告期 | 热成形润滑系统 | 发出量减去退回未用量；内部回收不重复计数 | 仓储台账；退回单 |
| `cp_hot_wastes` | `hot_tube_forming` | 氧化铁皮和废钢 | 衡器和废物转移记录 | waste_identity; gross_mass_kg; tare_mass_kg; moisture; oil_content; destination; batch_id | 对每项分流废物称重 | kg | 每容器或每批 | 完整报告期 | 热成形线 | 每项废物分别取净重并按输出归一化 | 经校准衡器；转移联单；成分样品 |
| `cp_hot_emissions` | `hot_tube_forming` | 直接炉窑排放 | 烟气监测和燃料记录 | stack_id; pollutant; concentration; dry_gas_flow; operating_hours; fuel_carbon; fuel_mass_or_volume; oxidation_basis | 场址监测或有记录的质量平衡计算 | kg | 每监测间隔和每批 | 覆盖报告期的代表性运行期间 | 仅热成形炉 | 计算污染物质量，按运行记录分配并按输出归一化 | 监测仪校准；实验室报告；计算表 |
| `cp_heat_mass` | `separate_heat_treatment` | 钢管投入和输出 | 衡器和批次记录 | batch_id; grade; input_mass_kg; output_mass_kg; reject_mass_kg | 经校准的过程衡器 | kg | 每个热处理批次 | 全部纳入批次 | 独立热处理线 | 核对投入、输出和不合格品，按合格输出归一化 | 衡器校准；批次记录 |
| `cp_heat_electricity` | `separate_heat_treatment` | 交流电 | 分表 | meter_start_kWh; meter_end_kWh; batch_output_kg | 专用电表 | kWh | 每批 | 全部纳入批次 | 热处理线 | 净 kWh 乘以 3.6 后按输出归一化 | 电表校准；批次分配 |
| `cp_heat_fuels` | `separate_heat_treatment` | 天然气或重质燃料油 | 流量计、储罐或发票 | fuel_identity; meter_or_mass_start; meter_or_mass_end; reference_conditions; batch_output_kg | 专用燃气表或储罐质量平衡 | m3 或 kg | 每批 | 全部纳入批次 | 热处理炉 | 每种燃料分别汇总并按输出归一化 | 仪表校准；发票；储罐核对 |
| `cp_heat_emissions` | `separate_heat_treatment` | 直接炉窑排放 | 烟气监测和燃料记录 | stack_id; pollutant; concentration; dry_gas_flow; operating_hours; fuel_carbon; oxidation_basis | 场址监测或有记录的质量平衡计算 | kg | 每监测间隔和每批 | 代表性运行期间 | 仅热处理炉 | 计算污染物质量并按热处理输出归一化 | 监测仪校准；实验室报告；计算表 |
| `cp_cold_mass` | `cold_tube_finishing` | 钢管投入和输出 | 衡器和生产记录 | batch_id; grade; input_mass_kg; output_mass_kg; reject_mass_kg | 经校准的过程衡器 | kg | 每批 | 全部纳入批次 | 冷加工精整线 | 核对投入、输出和不合格品，按合格输出归一化 | 衡器校准；生产日志 |
| `cp_cold_electricity` | `cold_tube_finishing` | 交流电 | 分表 | meter_start_kWh; meter_end_kWh; batch_output_kg | 专用或有记录的工程分表 | kWh | 每班和每批 | 全部纳入批次 | 冷加工精整线 | 净 kWh 乘以 3.6 后按输出归一化 | 电表校准；分配日志 |
| `cp_cold_oil` | `cold_tube_finishing` | 冷轧油 | 仓储发放和退回记录 | issued_mass_kg; returned_unused_mass_kg; recovered_internal_mass_kg; batch_output_kg | 核对发放和退回库存 | kg | 每批 | 全部纳入批次 | 冷加工精整油系统 | 发出量减去退回未用量；内部回收不重复计数 | 仓储台账；退回单 |
| `cp_cold_wastes` | `cold_tube_finishing` | 废钢和废润滑油 | 衡器和废物转移记录 | waste_identity; gross_mass_kg; tare_mass_kg; contamination; destination; batch_id | 对每项分流废物称重 | kg | 每容器或每批 | 全部纳入批次 | 冷加工精整线 | 每项废物分别取净重并按输出归一化 | 经校准衡器；废物转移联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | 所有电力行 | 电力 MJ = 净计量 kWh × 3.6 | 电表起止读数；排除的停机电量；输出质量 | 每过程输出基准的 MJ |  |
| `calc_oil_consumed` | 热轧油和冷轧油投入 | 耗油质量 = 发出油量 - 退回未用油量；同一过程中循环使用的油不得作为新投入 | 仓储发放；未用退回；批次输出 | 每过程输出基准的 kg 油 |  |
| `calc_furnace_pollutant_mass` | 直接炉窑 CO2 和氮氧化物 | 使用场址批准的燃料碳平衡，或浓度 × 干烟气流量 × 运行时间方法；记录单位、含氧修正、湿度基准和过程分配 | 燃料和烟气记录 | 每过程输出基准的 kg 污染物 | `ec-jrc-fmp-bref-2022` |
| `calc_process_mass_balance` | 每个过程 | 核对钢管或钢坯投入质量、合格钢管输出、分流废钢、适用时的氧化铁皮以及有记录的库存变化；调查无法解释的差额，不得强制闭合 | 材料称量记录；废物记录；库存变化 | 有记录的质量平衡闭合 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和钢铁投入 | 每个产品系列保留材质证明、投入形态、外径、壁厚、长度、精整状态、热处理状态和分类依据。 | 材质证明；产品规范；批次流转卡 |
| `dq_measurement` | 所有前景数量 | 使用经校准的仪表或衡器，保留原始读数和换算，并说明缺失记录的检出限和替代方法。 | 校准证书；原始日志；计算表 |
| `dq_temporal` | 报告期 | 覆盖包含全部申报路线和钢种的代表性连续期间；披露停产、开车、试生产和异常运行的处理。 | 生产日历；路线覆盖检查 |
| `dq_completeness` | 过程清单 | 核对每个过程的质量平衡，并检查每项适用燃料、电力、水、轧制油、废物和直接炉窑排放行均已填写或明确不适用。 | 质量平衡审查；适用性清单 |
| `dq_upstream_links` | 外购投入 | 上游数据集应匹配钢种和半成品状态、电力地理范围、燃料供应、水供应及轧制油身份；披露代理。 | 供应商记录；数据集关联登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 参考输出必须为 1,000 kg 合格的无涂层、无包装圆形截面无缝钢管净质量，并完整填写所有必需限定信息。 | `unsd-cpc-3-0-structure-2025` |
| `validate_process_applicability` | 过程图 | 必须纳入热成形。热处理和冷加工精整须与申报交货状态一致，排除过程不得含前景数量。 | `ec-jrc-fmp-bref-2022` |
| `validate_atomic_energy` | 炉用燃料和电力投入 | 天然气、重质燃料油和交流电必须保持为独立行；仅对申报过程实际使用的燃料填写数量。 | `ec-jrc-fmp-bref-2022` |
| `validate_mass_balance` | 每个过程 | 计入合格输出、废钢、适用时的氧化铁皮和库存变化后，投入和输出质量记录须核对闭合；无法解释的差额须审查。 |  |
| `validate_direct_emissions` | 化石源二氧化碳和氮氧化物 | 直接炉窑排放须与场址燃料和烟气记录核对，且不得包含上游发电或燃料供应排放。 | `ec-jrc-fmp-bref-2022` |
| `validate_uuid_gaps` | UUID 未解决的产品流 | 不得用被排除的同级类别、钢种特定代理或有色金属流替代尚未解决的参考产品、钢坯或过程间钢管 UUID。 | `unsd-cpc-3-0-structure-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报圆形截面无缝钢管生产的门到门 secondary_dataset 或 background_dataset |
| downstream_use | 用于构建 process 和 lifecyclemodel 的关联生产投入；其中上游钢铁半成品和公用工程数据集另行加入 |
| allowed_use | 与申报钢种、尺寸、热加工或冷加工状态、热处理路线、炉用燃料、场址地理范围、时期及无涂层无包装厂门口边界匹配的研究 |
| excluded_use | 油气无缝管线管；钻探用套管、油管或钻杆；焊接、铸造、非圆形、涂层、包装或有色金属管；未关联上游数据集的摇篮到大门用途 |
| required_metadata | PCR id 和版本；产品及钢种规范；尺寸；交货状态；过程适用性；炉用燃料；投入状态；地理范围；技术；时期；分配；上游数据集关联；未解决 UUID 披露 |
| required_quality_disclosure | 仪表和衡器覆盖；质量平衡闭合；烟气方法；燃料参考条件；水量换算；缺失数据处理；路线和钢种覆盖；代理使用；回收去向 |
| update_trigger | 钢种系列、投入形态或温度、穿孔或轧制技术、热处理或冷加工路线、炉用燃料、场址、报告期、分配方法，或任何重要投入、废物、排放或精确 UUID 证据发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-04 | 官方产品身份、钢铁上位层级，以及与管线管、钻探管、焊接管和非圆形截面无缝型材的区分 |
| `ec-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Ferrous Metals Processing Industry》，EUR 31321 EN，JRC131649，2022，DOI 10.2760/196475，https://publications.jrc.ec.europa.eu/repository/handle/JRC131649，检索日期 2026-09-04 | 轧管过程分解；钢坯或大方坯投入；天然气或燃油炉；条件性独立热处理和冷加工；水、油、废物和直接炉窑排放采集候选 |
