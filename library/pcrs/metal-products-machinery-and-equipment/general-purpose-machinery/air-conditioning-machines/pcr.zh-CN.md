---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 空调机

## 1. 范围与适用性

本规则规定完整电驱动蒸气压缩式室内空气制冷或制热空调机的出厂前景数据包。须声明具体型号、制冷/制热能力、室内外机配置、压缩机、换热器技术、制冷剂和工厂工序。美国能源部资料所述房间空调制造顺序是代表性路线，并非所有型号的固定物料清单。实际进行的厂内工序须纳入；外购替代部件须在数据包中作为具体的上游产品逐项建模。安装、使用、维护和报废不属于本出厂清单。[un-cpc-3-2025; eu-206-2012; us-doe-rac-1997-v2]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines |
| classification_refs | CPC 3.0: 43912，空调机 |
| covered_products | 出厂验收的完整电驱动蒸气压缩式室内空气制冷或制热空调机。 |
| excluded_products | 不具备所声明室内空气调节功能的独立制冷/冷冻设备及热泵；散装零件；单独的风扇；安装服务。 |
| representative_product | 已充注 R32、采用钢板机壳和铝翅片铜管换热器的出厂验收房间空调机。 |
| production_route | 适用时的机壳与换热器厂内制造；总装、充注与检漏；公用电力；包装。 |
| market_state | 运输或安装前、已验收的完整出厂机器。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于室内空气制冷或制热的完整空调机。 |
| How much | 声明配置的一台已验收完整机器。 |
| How well | 声明额定制冷/制热能力、制冷剂、电源和型号；性能是产品元数据，非本 PCR 固定数量。 |
| How long or cycle | 出厂验收时点；不假定运行寿命。 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 空调机 `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号与配置；额定制冷/制热能力；制冷剂身份及出厂充注量；压缩机及换热器技术；出厂验收状态；制造场址与期间 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electricity_unit` | plant_electricity | 净热值 | MJ | 电表 kWh 按 3.6 MJ/kWh 换算为 MJ；保留原始电表记录及期间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购物料与部件于收货时进入工厂；厂内制造从领用库存开始。 |
| starting_condition_role | 出厂前景；上游产品连接单独的供应商数据集。 |
| product_classification_scope | 完整空调机，CPC 3.0 43912；部件作为分别分类的投入。 |
| recursive_input_rule | 如投入完整空调机，须披露并仅连接一次上游数据集，避免递归重复计入其制造。 |
| upstream_dataset_requirement | 每种外购原子物料、部件、电力及包装须连接适用的上游产品数据集；厂内工序保持为前景。 |
| disclosure | 声明型号、工厂路线、外购与自产部件、充注状态、时间与地理覆盖以及排除阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有前景工序 | 计入适用的厂内制造、装配、充注、检漏、包装、应归属电力、废物及直接制冷剂排放，直至出厂验收。 | `us-doe-rac-1997-v2` |
| `boundary_exclusions` | 下游阶段 | 安装、使用、维护和报废在本出厂数据包之外另行报告；不得暗中计入使用阶段泄漏。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| cabinet_fabrication | 钢板机壳制造 | conditional | 工厂切割或成形冷轧钢板机壳时。 | 前景制造 | 每台验收机器 |
| heat_exchanger_fabrication | 换热器制造 | conditional | 工厂制造铝翅片铜管换热器时。 | 前景制造 | 每台验收机器 |
| final_assembly_test | 总装、充注与试验 | required | 所有覆盖的机器；R32 充注和排放行仅适用于 R32 型号。 | 前景装配与试验 | 每台验收机器 |
| plant_utilities | 厂内外购电力 | required | 记录归属于已声明前景工序的电力。 | 前景公用工程 | 每台验收机器 |
| packaging | 厂内包装与验收 | required | 瓦楞纸箱行仅在实际随产品提供时纳入。 | 前景成品整理 | 一台验收机器 |

### 过程：钢板机壳制造（`cabinet_fabrication`）

#### 输入

##### 产品流

###### 冷轧碳钢板（`steel_sheet`）

仅在场址使用冷轧碳钢板制造机壳时纳入；外购机壳须另建原子投入流。

- 选定流: 冷轧碳钢板
- 流属性/单位: 质量 / kg
- 数量规则: 记录现场机壳制造领用的板材质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_steel_sheet`
- 来源: `us-doe-rac-1997-v2`

#### 输出

##### 废物流

###### 废钢（`steel_scrap`）

仅在场址制造机壳时纳入；外送回收的废钢先按废物流输出，再连接下游处理。

- 选定流: 废钢 `b8179640-66c9-4734-80a4-bd2effc29b4b`
- 流属性/单位: 质量 / kg
- 数量规则: 称量交由废物处理的边角料及不合格钢材。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_steel_scrap`
- 来源: `us-doe-rac-1997-v2`

### 过程：换热器制造（`heat_exchanger_fabrication`）

#### 输入

##### 产品流

###### 铝板材（`aluminium_sheet`）

仅对厚度大于 0.2 mm 的铝板使用此流；更薄的铝箔须另行核定流身份。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 / kg
- 数量规则: 记录翅片成形领用的铝板质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_aluminium_sheet`
- 来源: `us-doe-rac-1997-v2`

###### 铜管材（`copper_tubing`）

仅在场址制造铜管换热器时纳入。

- 选定流: 铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位: 质量 / kg
- 数量规则: 记录换热器制造领用的铜管质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_copper_tubing`
- 来源: `us-doe-rac-1997-v2`

#### 输出

### 过程：总装、充注与试验（`final_assembly_test`）

#### 输入

##### 产品流

###### 全封闭制冷压缩机（`compressor`）

仅适用于外购全封闭制冷压缩机的型号；其他压缩机设计须另用相应流。

- 选定流: 全封闭制冷压缩机 `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- 流属性/单位: 质量 / kg
- 数量规则: 按型号物料清单及收货记录记录已安装压缩机质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_compressor`
- 来源: `us-doe-rac-1997-v2`

###### R32 制冷剂（二氟甲烷）（`r32_charge`）

仅在声明使用 R32 充注时纳入；不得以 R404A 或基本排放流替代外购制冷剂。

- 选定流: R32 制冷剂（二氟甲烷）
- 流属性/单位: 质量 / kg
- 数量规则: 记录充入已验收 R32 配置机器的 R32，并将试验损失另行记录。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_r32_charge`
- 来源: `us-doe-rac-1997-v2`

###### 轴流风扇电动机（`fan_motor`）

仅在物料清单列有独立外购轴流风扇电动机时记录其装机质量。

- 选定流：轴流风扇电动机
- 流属性/单位：质量 / kg
- 数量规则：依据该型号物料清单和收货记录采集已安装部件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fan_motor`
- 来源：`us-doe-rac-1997-v2`

###### 轴流风扇叶轮（`axial_fan_rotor`）

记录外购轴流风扇叶轮，不含另行记录的电动机；仅在该部件实际安装时纳入。

- 选定流：轴流风扇叶轮
- 流属性/单位：质量 / kg
- 数量规则：依据该型号物料清单和收货记录采集已安装部件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fan_rotor`
- 来源：`us-doe-rac-1997-v2`

###### 电子控制印制电路板组件（`control_board`）

记录已安装的外购电子控制板组件；控制设计不同须另核实对应流身份。

- 选定流：电子控制印制电路板组件
- 流属性/单位：质量 / kg
- 数量规则：依据该型号物料清单和收货记录采集已安装部件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_control_board`
- 来源：`us-doe-rac-1997-v2`

###### 模塑塑料前格栅（`plastic_front_grille`）

记录外购的模塑塑料前格栅，披露实际树脂；若格栅在场址内成形，则该外购投入不适用。

- 选定流：模塑塑料前格栅
- 流属性/单位：质量 / kg
- 数量规则：依据该型号物料清单和收货记录采集已安装部件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plastic_grille`
- 来源：`us-doe-rac-1997-v2`

#### 输出

##### 基本流

###### R32 制冷剂向空气排放（`r32_to_air`）

仅在使用 R32 且有证据表明发生排放时纳入；天工此基本流无中文 baseName。

- 选定流: HFC-32 `4d9a8790-3ddd-11dd-9ca4-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据充注及检漏记录计算实际未回收、排放至未指定空气环境的 HFC-32 质量。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 从采集记录计算（`calculated_from_collection`）
- 采集协议: `cp_r32_emission`
- 来源：

### 过程：厂内外购电力（`plant_utilities`）

#### 输入

##### 产品流

###### 电力（`plant_electricity`）

计入声明场址边界内的制造、装配、充注、试验和包装用电。

- 选定流: 电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位: 净热值 / MJ
- 数量规则: 以 MJ 记录应归属的外购电量；电表 kWh 按 3.6 MJ/kWh 换算。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_electricity`
- 来源：

#### 输出

### 过程：厂内包装与验收（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_box`）

仅在出厂产品配有瓦楞纸箱时纳入；运输包装不计入 M。

- 选定流: 瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 / kg
- 数量规则: 记录已验收机器所用瓦楞纸箱质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_box`
- 来源: `us-doe-rac-1997-v2`

#### 输出

##### 产品流

###### 空调机（`finished_machine`）

声明配置的一台已验收完整机器；M 排除运输包装，包含出厂已充注制冷剂。

- 选定流: 空调机 `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0`
- 流属性/单位: 质量 / kg
- 数量规则: M 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每台验收成品机器
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_mass`
- 来源: `un-cpc-3-2025`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_energy` | 共用厂内电力 | 优先使用型号独立分表；共用电力按同一期间记录的机器工时分配，并披露分母及不确定性。 |  |
| `allocation_steel_scrap` | 废钢 | 废钢按独立废物流记录；出厂前景清单内不计入替代原生钢材的抵扣，下游回收另行披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_sheet | cabinet_fabrication | steel_sheet | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 steel_sheet / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_steel_scrap | cabinet_fabrication | steel_scrap | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 steel_scrap / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_aluminium_sheet | heat_exchanger_fabrication | aluminium_sheet | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 aluminium_sheet / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_copper_tubing | heat_exchanger_fabrication | copper_tubing | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 copper_tubing / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_compressor | final_assembly_test | compressor | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 compressor / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_fan_motor | final_assembly_test | fan_motor | 部件收货与物料清单 | 型号；配置；已安装部件质量；验收数量 | 核对部件收货、物料清单与装配领用记录。 | kg | 每生产批次 | 生产期间 | 制造场址 | 已安装 fan_motor 质量 / 验收机器数量 | 收货单、物料清单及装配记录 |
| cp_fan_rotor | final_assembly_test | axial_fan_rotor | 部件收货与物料清单 | 型号；配置；已安装部件质量；验收数量 | 核对部件收货、物料清单与装配领用记录。 | kg | 每生产批次 | 生产期间 | 制造场址 | 已安装 axial_fan_rotor 质量 / 验收机器数量 | 收货单、物料清单及装配记录 |
| cp_control_board | final_assembly_test | control_board | 部件收货与物料清单 | 型号；配置；已安装部件质量；验收数量 | 核对部件收货、物料清单与装配领用记录。 | kg | 每生产批次 | 生产期间 | 制造场址 | 已安装 control_board 质量 / 验收机器数量 | 收货单、物料清单及装配记录 |
| cp_plastic_grille | final_assembly_test | plastic_front_grille | 部件收货与物料清单 | 型号；配置；已安装部件质量；验收数量 | 核对部件收货、物料清单与装配领用记录。 | kg | 每生产批次 | 生产期间 | 制造场址 | 已安装 plastic_front_grille 质量 / 验收机器数量 | 收货单、物料清单及装配记录 |
| cp_r32_charge | final_assembly_test | r32_charge | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 r32_charge / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_electricity | plant_utilities | plant_electricity | 电表及生产台账 | 电表读数；期间；机器工时 | 读取校准电表或台账，将 kWh 换算为 MJ，并按记录机器工时分配。 | MJ | 每生产批次 | 生产期间 | 制造场址 | 应归属 plant_electricity / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_r32_emission | final_assembly_test | r32_to_air | 制冷剂质量平衡台账 | R32 试验与充注领用；已验收机器留存量；回收量；退库量；外送废物量；验收数量 | 核对同一期间充注、检漏、回收与库存记录，计算未回收的空气排放。 | kg | 每生产批次 | 生产期间 | 制造场址 | 排放 R32 质量 / 验收机器数量 | 充注、回收、库存与废物联单 |
| cp_box | packaging | corrugated_box | 物料或废物台账 | 型号；配置；批次；领用质量；退回质量；验收数量 | 核对批次及型号的领用、退库、回收与发运记录；无直接质量时称量。 | kg | 每生产批次 | 生产期间 | 制造场址 | 应归属 corrugated_box / 验收机器数量 | 电表、物料清单、库存与回收核对 |
| cp_mass | packaging | finished_machine | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 生产期间 | 制造场址 | 每台验收净质量 | 校准与验收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `r32_mass_balance` | r32_to_air | R32 排放量 = 充注及试验领用量 - 已验收机器留存量 - 回收量 - 退库量 - 外送废物量。 | R32 领用；留存充注；回收；退库；废物外送 | 排向空气的 HFC-32，kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | 采用同一声明型号、配置与生产期间；核实验收机器数量以及外购或自产路线。 | 物料清单、验收及工序记录 |
| `dq_refrigerant` | r32_charge; r32_to_air | 核对 R32 采购、出厂充注、回收、废物及库存；无法测量的损失须披露，不得强制记零。 | 充注及回收日志 |
| `dq_mass` | finished_machine | 保留同一验收配置的校准净质量称量，排除运输包装。 | cp_mass 记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine | 确认一台成品输出等于实测 M kg，且与参考 UUID、型号和验收记录一致。 |  |
| `validate_balance` | 物料和制冷剂 | 核对物料与 R32 领用、退库平衡；废物与逸散排放分别记录，并解释差额。 |  |
| `validate_identity` | 所有含 UUID 的清单行 | 仅使用已核实公开 state-100 且产品状态、属性、单位及分类相符的流；未解决行保留空 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整空调机出厂生产的前景数据包 |
| downstream_use | 经审查后可作 secondary_dataset；background_dataset |
| allowed_use | 对声明的机器配置和工厂路线建模，并连接相容的上游数据集。 |
| excluded_use | 不得从本生产清单推断使用阶段能效或制冷剂泄漏。 |
| required_metadata | 型号；配置；能力；制冷剂及充注量；工厂路线；场址与期间；实测 M；验收数量 |
| required_quality_disclosure | 覆盖范围、分配、质量平衡差额、未解决流身份及缺失的经验范围 |
| update_trigger | 型号、制冷剂、物料清单、制造路线、场址或电表边界变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 结构（2025-06-30），https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43912 身份及相邻类别区分；原始 CSV 第 2205 行已核实 |
| `eu-206-2012` | standard | 欧盟委员会条例 206/2012，第 2 条第 1 款；英国 legislation.gov.uk 所存 2017 年合并文本的归档副本：https://upload.wikimedia.org/wikipedia/commons/a/a0/EUR_2012-206.pdf | 代表性电驱动蒸气压缩空调定义；该法规适用范围比本 PCR 窄 |
| `us-doe-rac-1997-v2` | official_guidance | 美国能源部／劳伦斯伯克利国家实验室，房间空调能效标准技术支持文件，第 2 卷（1997 年 9 月），第 1-2 页，https://www1.eere.energy.gov/buildings/appliance_standards/pdfs/tsdracv2.pdf | 代表性房间空调制造顺序及材料；不提供通用数量范围 |
