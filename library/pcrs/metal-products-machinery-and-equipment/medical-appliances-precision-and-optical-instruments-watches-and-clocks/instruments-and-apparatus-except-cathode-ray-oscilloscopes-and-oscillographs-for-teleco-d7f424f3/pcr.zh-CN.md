---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-teleco-d7f424f3
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电信用仪器和器械（阴极射线示波器和录波器除外）

## 1. 范围与适用性

本 PCR 适用于专门设计用于测量、检验、分析或测试电信信号、信道、网络或传输性能的仪器和器械的制造商大门生产。代表性产品包括串音测试器、增益测量仪、失真度表、噪声计、电信网络分析仪及类似电信测试仪器。

本 PCR 不包括阴极射线示波器和阴极射线录波器；非电信专用的通用电量测量仪器；主要功能为通信而非测量或测试的电信传输或接收设备；独立销售的测试夹具；服务；以及单独销售的零部件。代表性路线包括外购电子组件与机械零件、最终机电装配、条件性焊接与清洗、固件配置、校准与功能测试以及最终包装。外购组件和材料的上游制造通过供应商数据集链接，不在前景中重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-teleco-d7f424f3 |
| classification_refs | CPC 3.0: 48244（精确分类语境） |
| covered_products | 专用于电信测量、检验、分析或测试功能的仪器和器械 |
| excluded_products | 阴极射线示波器和录波器；通用电量表计；主要功能为传输或接收的通信设备；服务；测试夹具；单独销售的零部件 |
| representative_product | 经工厂校准的电信网络或信号测试仪器 |
| production_route | 外购装配印制线路板、外壳和可选显示模组；最终装配及条件性焊接和清洗；固件配置；校准与功能测试；包装 |
| market_state | 制造商大门处全新、完整、已校准仪器；仪器净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台实现所声明电信测量或测试功能的完整仪器 |
| How much | 制造商大门处 1 kg 成品仪器净质量 |
| How well | 已按所声明信号、信道、网络或传输测试进行配置，并通过制造商校准和功能验收准则 |
| How long or cycle | 一个生产批次，归一化为 1 kg 成品净输出；使用阶段持续时间不属于本从摇篮到大门参考 |
| reference_flow_link | `finished_telecommunications_instrument` 中合格成品输出的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电信用仪器和器械（阴极射线示波器和录波器除外） `c867c593-71b0-499b-8f6f-3e606cfee4e9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所声明电信测试功能；被测参数及频率或数据率范围；准确度和校准状态；型号及硬件配置；随附显示器、电源、线缆和附件；产品净质量；包装配置；生产场址及期间；生产技术；制造商大门边界 |

必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少上述限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单归一化为 1 kg 合格成品仪器；参考产品质量不含运输包装。 |
| `component_mass_consistency` | 产品流和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用实测质量或有文件依据的供应商质量将组件、化学品和废物记录换算为 kg，并披露件数到质量的换算。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按 1 kWh = 3.6 MJ 将电表 kWh 换算为 MJ；保留原始表计单位、电网地域、电压和分配依据。 |
| `solvent_mass_balance` | 异丙醇清洗 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一期间核对异丙醇投入、回收溶剂、废溶剂、库存留存和量化空气排放，并说明余额及不确定性。 |

## 5. 系统边界

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景生产 | 纳入外购组件和零件接收、最终装配、条件性焊接和清洗、固件加载、校准、功能测试、返工与不合格品以及直至制造商大门的最终包装。 | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `boundary_purchased_components` | 上游供应 | 外购印制板、显示模组、外壳、化学品、包装及其他零件应链接产品状态、技术和地域相符的上游数据集；不得在最终装配中重复其制造。 |  |
| `boundary_conditional_routes` | 清洗和可选硬件 | 仅在实际安装时纳入 LCD 模组；仅在现场焊接或返工时纳入焊料和助焊剂；仅在进行溶剂清洗时纳入异丙醇投入、废溶剂和空气排放。 | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `boundary_exclusions` | 下游阶段 | 排除制造商大门后的分销、仪器使用、维护、使用期校准和寿命终止处理；若研究范围增加任何阶段，须披露。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购装配印制线路板、已加工外壳、可选显示模组、化学品和包装已运抵最终仪器制造场址 |
| starting_condition_role | 进入前景最终装配的供应商大门投入 |
| product_classification_scope | 所声明语义边界内的电信测量、检验、分析和测试仪器，不依赖任一单独分类映射 |
| recursive_input_rule | 若外购投入本身属于 CPC 48244 仪器，应作为单独上游产品投入记录并链接供应商数据集；不得与参考输出的制造合并。 |
| upstream_dataset_requirement | 使用产品状态、技术和地域相符的供应商或二手数据集，并记录代理使用和覆盖缺口。 |
| disclosure | 披露产品配置、随附附件、净质量、包装质量、装配与清洗路线、校准/测试依据、生产地域与期间，以及是否增加下游阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | 电子与机械最终装配 | required | 最终仪器制造始终纳入；各焊接、清洗和显示模组行按条件纳入。 | 将外购组件和零件转化为校准前完整仪器。 | 每 kg 转入校准的装配仪器 |
| `calibration_test` | 固件配置、校准与功能测试 | required | 始终纳入；仅在记录无法区分时合并配置、校准和验收测试。 | 确立所声明电信测试功能和验收状态。 | 每 kg 合格已校准仪器 |
| `final_packaging` | 最终包装 | required | 纳入随仪器投放市场的包装。 | 包装合格仪器并产生参考输出。 | 每 kg 成品仪器净质量 |

### 过程：电子与机械最终装配（`final_assembly`）

#### 输入

##### 产品流

###### 装配印制线路板（`populated_printed_wiring_board`）

外购装配印制线路板作为完整电子组件进入前景边界。根据接收或物料清单记录其质量。

- 选定流：装配印制线路板
- 流属性/单位：Mass / kg
- 数量规则：合格与不合格装配中安装的前景质量，扣除退回的供应商包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_mass`
- 来源：

###### 铝制仪器外壳（`aluminium_instrument_enclosure`）

记录安装在仪器上的已加工铝制外壳质量；不得用未锻轧铝替代。

- 选定流：铝制仪器外壳
- 流属性/单位：Mass / kg
- 数量规则：合格与不合格装配中安装的前景质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_mass`
- 来源：

###### LCD 显示模组（`lcd_display_module`）

仅在所声明配置安装 LCD 显示模组时纳入。

- 选定流：液晶显示模组 `264605c6-41b8-4baa-82b0-e27e815063a0`
- 流属性/单位：Mass / kg
- 数量规则：前景安装模组质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_material_mass`
- 来源：

###### 含助焊剂的无铅焊料（`lead_free_solder_flux`）

仅在现场焊接或返工时纳入。记录领用量减去未开封退料量。

- 选定流：不含铅焊料，含助焊剂 `4fbe5177-aa26-4ea6-b034-b59ad19f587e`
- 流属性/单位：Mass / kg
- 数量规则：焊接与返工净领用材料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solder_material_balance`
- 来源：`oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### 异丙醇清洗溶剂（`isopropanol_input`）

仅在异丙醇用于焊后清洗或精密清洗时纳入。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存和转出量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_mass_balance`
- 来源：`oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### 装配外购电力（`electricity_assembly`）

记录最终装配、焊接、清洗、局部排风和返工应归属的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量，或按装配区电表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_by_process`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 校准前装配仪器（`assembled_instrument_output`）

该内部中间体将同一物理装配体转入校准，不代表市场产品。

- 选定流：校准前装配电信测试仪器
- 流属性/单位：Mass / kg
- 数量规则：转入校准的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_mass`
- 来源：

##### 废物流

###### 废弃装配印制线路板（`waste_populated_printed_wiring_board`）

记录不合格且离开前景进入回收或处理的装配印制线路板；披露去向和危险废物分类。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：离开装配过程的称量或联单废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_manifest`
- 来源：`us-epa-electronics-sector-1995`

###### 焊渣（`solder_dross`）

仅在熔融焊料操作或返工产生单独收集的焊渣时纳入。

- 选定流：焊渣
- 流属性/单位：Mass / kg
- 数量规则：转入回收或处理的焊渣称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_manifest`
- 来源：`oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

###### 废异丙醇清洗溶剂（`spent_isopropanol`）

仅在废异丙醇作为单独管理的废物离开前景时纳入。

- 选定流：废异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：送往回收或处理的废溶剂称量或联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_mass_balance`
- 来源：`oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995`

##### 基本流

###### 排入空气的异丙醇（`isopropanol_to_air`）

纳入清洗产生的未捕集异丙醇蒸发量。不得将已捕集溶剂同时计为空气排放和废溶剂。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址测量值，或扣除有文件依据的回收和废物转移后分配给空气的溶剂质量平衡余额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_mass_balance`
- 来源：`oecd-electronics-chemicals-2014`

### 过程：固件配置、校准与功能测试（`calibration_test`）

#### 输入

##### 产品流

###### 校准前装配仪器（`assembled_instrument_input`）

使用与最终装配输出相同的数据集特定内部流。

- 选定流：校准前装配电信测试仪器
- 流属性/单位：Mass / kg
- 数量规则：在制品核对后等于所链接的 `assembled_instrument_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已校准仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_transfer_mass`
- 来源：

###### 校准与测试外购电力（`electricity_calibration`）

记录应归属于该批次的测试台、固件加载、校准和环境调节电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量，或按测试区电表进行有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已校准仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_by_process`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前已校准仪器（`calibrated_instrument_output`）

记录转入包装的合格仪器净质量；不合格品留在返工中或计入适用废物流。

- 选定流：包装前已校准电信测试仪器
- 流属性/单位：Mass / kg
- 数量规则：转入包装的合格实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已校准仪器输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_mass`
- 来源：

##### 废物流

##### 基本流

### 过程：最终包装（`final_packaging`）

#### 输入

##### 产品流

###### 包装前已校准仪器（`calibrated_instrument_input`）

使用与校准和测试合格输出相同的数据集特定内部流。

- 选定流：包装前已校准电信测试仪器
- 流属性/单位：Mass / kg
- 数量规则：在制品核对后等于所链接的 `calibrated_instrument_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品仪器净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_transfer_mass`
- 来源：

###### 瓦楞纸箱（`corrugated_board_box`）

记录随产品投放市场的瓦楞纸箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：前景包装规范或称量包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品仪器净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：

###### 纸质说明书内页（`paper_manual_insert`）

纳入随产品提供的印刷说明书内页。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass / kg
- 数量规则：前景包装规范或称量内页质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品仪器净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 电信用成品仪器（`finished_telecommunications_instrument`）

参考输出为制造商大门处合格仪器；包装质量单独列入清单且不计入参考净质量。

- 选定流：电信用仪器和器械（阴极射线示波器和录波器除外） `c867c593-71b0-499b-8f6f-3e606cfee4e9`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格成品仪器净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用装配与测试操作 | 记录允许时，应先按产品系列和过程区域细分或分表计量。 |  |
| `allocation_mass_or_time` | 剩余共用负荷 | 剩余物料搬运负荷按合格产品净质量分配；设备或测试台电力按实测运行时间或能量分配；披露所选动因及敏感性。 |  |
| `allocation_rework` | 返工与不合格品 | 将返工材料、能源和废物归于产生它们的生产批次；不得将不合格品抵作合格输出。 |  |
| `allocation_recovery` | 可回收焊料和电子废物 | 报告离开前景的物理废物及其去向。仅在下游模型中按已披露的建模约定应用回收收益；不得从前景清单中扣除未经核验的收益。 | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_mass` | `final_assembly` | 外购组件 | 接收与物料清单记录 | 零件号；安装数量；单件质量；不合格品；退料 | 核对受控物料清单、接收和生产记录，并核验代表性单件质量。 | kg | 每型号和批次 | 代表性连续生产期，可得时通常至少覆盖一个完整报告年度 | 范围内全部最终装配线 | 按零件汇总安装和不合格质量，再按装配输出归一化。 | 受控 BOM 版本；秤重或供应商质量；核对记录 |
| `cp_solder_material_balance` | `final_assembly` | 焊料投入与焊渣 | 物料领退和废物记录 | 期初库存；收货；领用；退料；期末库存；焊渣质量 | 核对报告期物料库存并与焊渣联单交叉检查。 | kg | 每月及报告期合计 | 与输出同一期间 | 范围内全部焊接和返工工位 | 焊料净用量 = 期初 + 收货 - 期末 - 转出；焊渣单独报告。 | 库存台账；校准秤；废物联单 |
| `cp_solvent_mass_balance` | `final_assembly` | 异丙醇投入、废物与空气排放 | 采购、库存、回收、废物和排放记录 | 期初库存；收货；期末库存；转移；回收溶剂；废溶剂；实测空气排放 | 在一致期间核对全部异丙醇路径，量化或说明余额不确定性。 | kg | 每月及报告期合计 | 与输出同一期间 | 范围内全部清洗工位、储存和治理设施 | 投入 = 回收 + 废溶剂 + 空气排放 + 库存变化 + 有文件依据的余额。 | 库存台账；废物联单；治理记录；测量或平衡计算 |
| `cp_electricity_by_process` | `final_assembly`; `calibration_test` | 电力 | 电表和设备运行记录 | 电表起止值；kWh；设备；运行时间；待机；批次输出 | 优先分表计量；否则按实测设备功率和运行时间分配区域电表。 | kWh 和 MJ | 每批次并按月核对 | 与输出同一期间 | 范围内装配和测试区域 | 将 kWh 换算为 MJ，并分别按装配和校准/测试输出归一化。 | 电表标识；校准状态；运行日志；分配工作表 |
| `cp_intermediate_transfer_mass` | `final_assembly`; `calibration_test`; `final_packaging` | 内部中间体 | 生产转移与在制品记录 | 数量；单件质量；转移状态；不合格品；期初/期末在制品 | 核对过程间转移，避免重复计算同一物理仪器。 | kg | 每批次 | 与输出同一期间 | 全部纳入过程 | 发送过程输出经在制品核对后等于接收过程输入。 | 转移记录；秤重或批准单件质量；在制品核对 |
| `cp_waste_manifest` | `final_assembly` | 电子和焊接废物 | 废物称量和运输记录 | 废物类型；毛重/皮重/净重；日期；去向；处理；危险代码 | 分别收集各废物类型并保留运输或处理记录。 | kg | 每次运输并汇总报告期 | 与输出同一期间 | 全部纳入装配和返工工位 | 按原子废物流和去向汇总净质量，不合并废物类型。 | 校准秤；联单；回收商凭证 |
| `cp_packaging_mass` | `final_packaging` | 包装投入 | 包装规范和领料记录 | 组件；材料；单件质量；领用量；退料；包装输出 | 核验各包装组件质量，并将领料与包装输出核对。 | kg | 每配置和批次 | 与输出同一期间 | 范围内全部包装线 | 分别汇总各包装组件并按成品仪器净质量归一化。 | 批准包装规范；秤重记录；领料核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部前景行 | 归一化量 = 报告期流量 / 报告期合格成品仪器净质量。 | 流量；合格成品仪器净质量 | 每 1 kg 参考流的量 |  |
| `calc_electricity_mj` | 电力行 | 电力（MJ）= 电表电力（kWh）× 3.6。 | kWh | MJ |  |
| `calc_solvent_balance` | 异丙醇路径 | 空气排放 = 核对后的异丙醇投入 - 回收溶剂 - 废溶剂 - 期末库存增加 - 其他有文件依据的转移；不得报告负值，并调查重大余额。 | 投入；回收；废物；库存变化；转移 | 排入空气的异丙醇及平衡余额 | `oecd-electronics-chemicals-2014` |
| `calc_internal_transfer` | 内部中间体 | 接收过程投入 = 发送过程输出，仅按有文件依据的在制品变动调整；任何损失必须归入具体废物或排放。 | 转移质量；期初/期末在制品 | 链接的中间体投入 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与组件身份 | 记录型号、版本、测试功能、硬件配置、随附附件和供应商零件号；区分可选显示模组与现场焊接/清洗路线。 | 受控产品配置和 BOM |
| `dq_completeness` | 质量、电力、化学品和废物 | 核对全部纳入生产线和批次；记录缺失表计、未量化余额和排除的小流量，不得用集合标签替代原子流。 | 质量/能量平衡和完整性声明 |
| `dq_temporal` | 前景活动数据 | 使用一致的代表性生产期并披露起止日期、停产、工程批次和异常返工。 | 报告期记录和生产日志 |
| `dq_geography_technology` | 链接的上游数据集 | 尽可能匹配供应商状态、地域和技术；识别每个代理及预期偏差方向。 | 供应商元数据和数据集选择记录 |
| `dq_measurement` | 电表和秤 | 保留仪器标识、单位、校准或核验状态、读数频率及件数到质量换算证据。 | 校准证书、电表日志或批准供应商质量 |

## 9. 校验规则

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 成品输出 | 确认恰好输出 1 kg 合格 CPC 48244 仪器净质量，不含运输包装，并披露全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_product_exclusions` | 产品身份 | 若主要产品为阴极射线示波器/录波器、通用电量表、电信服务、传输/接收设备、测试夹具或单独销售零件，则拒绝数据集。 | `un-cpc-3-0-structure-2025` |
| `validate_transfer_balance` | 内部中间体 | 确认发送过程输出与接收过程投入经有文件依据的在制品核对后一致。 |  |
| `validate_solvent_balance` | 条件性异丙醇路线 | 进行清洗时，要求投入、回收、废溶剂和空气排放采用同一期间，并说明任何重大平衡余额。 | `oecd-electronics-chemicals-2014` |
| `validate_waste_atomicity` | 废物输出 | 确认装配印制线路板废物、焊渣和废溶剂分别报告并披露处理去向，且不存在集合标签废物流。 | `oecd-electronics-chemicals-2014`; `us-epa-electronics-sector-1995` |
| `validate_range_provenance` | 定量 QA 范围 | 除非至少两个相互独立且经原文核验的来源具有兼容边界、功能单位和产品状态，否则不得应用外部范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明电信测量或测试仪器配置的前景制造商大门生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当产品功能、配置、地域、技术和包装兼容时，用于从摇篮到大门产品足迹、供应链建模和生命周期模型 |
| excluded_use | 未增加相应过程时，不得直接代表阴极射线示波器/录波器、通用电量表、电信服务、使用期性能、维护或寿命终止 |
| required_metadata | PCR id；CPC 语境；产品型号与版本；测试功能及被测参数；频率或数据率范围；准确度与校准状态；随附附件；净质量和包装质量；装配/清洗路线；场址；地域；技术；报告期；分配；上游数据集选择 |
| required_quality_disclosure | 前景覆盖；电表和秤状态；BOM 核对；内部转移平衡；适用时的溶剂平衡；不合格品和返工；废物去向；代理；排除；不确定性及未解决 UUID/范围证据 |
| update_trigger | 产品配置、供应商 BOM、外壳/显示/电源架构、焊接或清洗技术、制造场址、校准/测试序列、包装、分配方法或代表性生产期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48244 正式身份及明确排除的阴极射线产品类别 |
| `oecd-electronics-chemicals-2014` | 官方指南（`official_guidance`） | OECD，Chemicals Used in the Electronics Industry，排放情景文件系列第 25 号，https://www.oecd.org/content/dam/oecd/en/publications/reports/2014/09/chemicals-used-in-the-electronics-industry_g1g48552/9789264221062-en.pdf（DOI：10.1787/9789264221062-en） | 印制板焊接、助焊剂、可选焊后清洗、溶剂释放路径、焊料废物和废清洗液拆分 |
| `us-epa-electronics-sector-1995` | 官方指南（`official_guidance`） | 美国 EPA，Profile of the Electronics and Computer Industry，行业手册项目，1995 年 9 月，https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/elecmpsn-2.pdf | 电子装配、焊接、电气/机械测试、包装、废板、焊渣和废溶剂 |
