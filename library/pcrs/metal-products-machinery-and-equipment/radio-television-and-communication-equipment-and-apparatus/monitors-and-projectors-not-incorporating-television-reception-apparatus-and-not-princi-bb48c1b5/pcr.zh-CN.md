---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-not-incorporating-television-reception-apparatus-and-not-princi-bb48c1b5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 不含电视接收装置且非主要用于自动数据处理系统的显示器和投影仪

## 1. 范围与适用性

本 PCR 适用于不含电视广播调谐器/接收器、且并非主要设计为自动数据处理系统输出单元的成品独立运行商用显示器、工业显示器、数字标牌显示单元、视频墙显示单元和前投影系统。本 PCR 同时覆盖显示器路线和投影仪路线，但一个前景数据包必须且只能选择一条路线，不得将两条路线平均为一个参考产品。

显示器路线包括用于商用、工业、公共信息、控制室、广播制作或固定安装视听用途的成品 LCD、OLED、microLED、直视 LED 及类似电子显示设备，前提是其产品边界满足下述排除条件。投影仪路线包括使用 LCD/3LCD、DLP/DMD、LCoS、激光、激光混合、LED、灯泡或类似电子投影技术，用于商用、工业、固定安装视听或演示用途的成品前投影仪。

排除的产品包括：电视接收机或任何含地面、有线或卫星广播调谐器/接收器的产品；主要用于自动数据处理系统的显示器或投影仪；不能独立运行的集成状态显示器或控制面板；医用显示器；虚拟现实头戴设备；背投设备；另行分类的电影放映机；作为部件销售的裸显示面板、光机、光学模块、印刷电路板组件及其他零部件；单独销售的投影屏幕、镜头、支架、控制器和附件。

默认前景边界从制造场址接收采购的材料、部件和子组件开始，包括该场址实施的路线特定子组件作业、最终装配、功能与功率状态测试、返工，以及成品在工厂大门处的包装。采购的面板、光机、电子板、电源、散热组件、外壳、电缆、附件和包装的上游生产由链接的上游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-not-incorporating-television-reception-apparatus-and-not-princi-bb48c1b5 |
| classification_refs | CPC 3.0: 47314 (exact) |
| covered_products | 可独立运行的商用和工业显示器；数字标牌和视频墙显示单元；不含电视接收装置的非 ADP 前投影系统 |
| excluded_products | 电视接收机及带调谐器的产品；CPC 47315 以 ADP 为主要用途的显示器/投影仪；集成控制/状态面板；医用和 VR 显示设备；背投设备及另行分类的电影放映机；裸部件和单独销售的屏幕/镜头/支架/控制器/附件 |
| representative_product | 工厂大门处按出货配置的一台成品、可销售显示单元或前投影仪 |
| production_route | 必须且只能选择 display_route 或 projector_route；声明技术和场址控制的子组件制造深度 |
| market_state | 经测试和包装、用于商用、工业、公共信息、控制室、广播制作、固定安装视听或演示用途的成品设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂大门处符合本 PCR 范围的成品显示器或前投影仪 |
| How much | 1 kg 成品设备净质量，不含三级运输包装和单独销售的附件 |
| How well | 按所声明出货配置、可销售且通过功能测试的设备，路线和技术限定信息完整 |
| How long or cycle | 从声明的前景报告期归一化得到的一个完整生产批次 |
| reference_flow_link | packaging 中的 packaged_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 显示器和投影仪，不包括电视接收装置，也不主要用于自动数据处理系统 `327360e4-f3be-43e9-81b1-e0cb3a51d782` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 路线：display_route 或 projector_route；显示或投影技术；型号/系列及预定非 ADP 用途；不存在电视广播调谐器/接收器；原生分辨率；显示器可视尺寸、对角线和屏幕面积，或投影仪额定光输出和最大投影图像尺寸；正常/出货配置；存在时测量开机、待机、网络待机、关机和 ECO 功率状态；面板或光机标识；电子板和电源构成；散热架构；外壳/机架材料；随附附件；产品净质量；制造地域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少路线、排除声明、视觉规格、功率状态画像或部件披露时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将场址总量归一化为 1 kg 成品设备净质量。包装单独记录，三级运输包装和单独销售的附件不得计入参考质量。 |
| `route_visual_specification` | 参考产品标识 | 路线特定视觉性能 | 显示器：mm、inch、cm2、pixels、cd/m2；投影仪：lm、pixels、inch 或 m | 对 display_route，记录技术、可视宽度/高度、对角线、屏幕面积、原生分辨率及正常/出货亮度。对 projector_route，按所引用的测试/规格方法记录投影技术和光源类型、额定光输出、原生分辨率及声明的最大投影图像尺寸。 |
| `power_state_measurement` | 功能测试和产品规格 | 有功功率和电量 | W；kWh | 分别记录正常/开机功率，以及每个可用的 ECO、待机、网络待机和关机状态。保留测试电压、频率、配置、图像/测试图案、亮度或光输出设置、预热/稳定规则、连接模块和测量方法；不得以铭牌最大功率替代实测功率。 |
| `component_mass_balance` | 面板/光机、电子组件、散热、外壳、附件和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按部件族汇总数量乘以实测或供应商声明的单件质量，并将成品净质量、移除的测试/返工部件、制造废物和包装作为独立平衡项进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收的采购路线特定材料、部件和子组件 |
| starting_condition_role | 上游部件生产结束、场址控制的子组件制造、最终装配、测试、返工和包装开始的边界门 |
| product_classification_scope | 仅限 CPC 3.0 47314 成品设备；不含电视接收装置且非主要用于 ADP 系统的路线特定显示器或投影仪输出 |
| recursive_input_rule | 作为投入采购的同类别显示器或投影仪仍作为可见产品投入，具有独立上游数据集和声明用途；不得在消费过程中递归重建其生产。 |
| upstream_dataset_requirement | 每个采购的面板、光机、PCB 组件、电源、散热组件、外壳、电缆/附件套件和包装材料均须链接地域和技术适当的上游数据集；披露代理数据的使用。 |
| disclosure | 声明路线、技术、场址控制的制造深度、各主要组件的采购或自制状态、产品及包装质量平衡、不合格/返工设备、实测功率状态、地域、报告期和所有排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | 所有前景数据包 | 必须且只能选择 display_route 和 projector_route 中的一条。共享产线可按计量批次记录细分，但显示器和投影仪参考输出不得平均为一个数据集。 | `eu-2019-2021-electronic-displays`; `iec-61947-1-2002`; `iec-62906-5-1-2021` |
| `boundary_product_exclusions` | 产品标识 | 拒绝含电视广播调谐器/接收器、主要作为 ADP 输出单元、属于非独立集成面板或属于其他明确排除类别的产品。仅有互联网单播或网络控制不构成电视接收装置。 | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `boundary_component_completeness` | 场址控制的制造与装配 | 作为独立部件族记录 display_route 的显示面板组件或 projector_route 的光机/光源组件，并记录电子板、电源、散热系统、外壳/机架、电缆/连接器、随附附件和包装。记录每个部件族的采购或场址自制状态。 | `ecma-370-2026`; `barco-ecoscore-objective-criteria` |
| `boundary_foreground_operations` | 制造场址门到门清单 | 纳入来料检验和场址控制时的路线特定子组件作业、最终装配、实施时的固件/配置加载、功能和功率状态测试、返工、包装、场址直接能源和水、制造废物、废水和直接排放。采购投入链接至上游数据集。 | `iec-63366-2025`; `iso-14040-2006` |
| `boundary_display_applicability` | display_route | 仅在显示器定义和测量要求的声明范围符合产品时适用。欧盟开机模式要求豁免部分专业和数字标牌显示器，且欧盟法规排除投影仪；不得将被豁免的限值或显示器方程迁移到 projector_route。 | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `boundary_projector_performance` | projector_route | 使用声明适用的投影仪规格或测量方法，记录固定分辨率投影技术、集成光源和投影光学系统、额定光输出、原生分辨率及投影图像尺寸。 | `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `subassembly_production` | 路线特定子组件生产 | conditional | 仅当报告场址实际控制面板、光机、PCBA、电源、散热或外壳作业时纳入 | 前景制造 | 转入最终装配的预制子组件 kg |
| `final_assembly` | 最终设备装配 | required | 始终 | 前景装配 | 送往测试的已装配设备 kg |
| `functional_testing` | 配置、功能和功率状态测试 | required | 始终 | 前景测试与返工 | 送往包装的合格已测试设备 kg |
| `packaging` | 最终包装和工厂大门放行 | required | 始终 | 前景包装与放行 | 工厂大门处 1 kg 成品参考产品净质量 |

### 过程：路线特定子组件生产（`subassembly_production`）

#### 输入

##### 产品流

###### 路线特定核心和电子部件投入（`subassembly_component_inputs`）

记录场址控制的面板/背光、光机/光源、PCB 组件、电源、散热系统、外壳或机架生产所消耗的材料和采购零件。显示器路线与投影仪路线部件须保存在不同批次记录中。

- 选定流：路线特定部件和材料投入
- 流属性/单位：Mass / kg
- 数量规则：汇总合格数量乘以实测或供应商声明的单件质量，扣除退回的未使用物品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入最终装配的预制子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`barco-ecoscore-objective-criteria`

###### 子组件生产用电（`subassembly_electricity`）

记录场址控制的路线特定子组件制造、焊接、连接、清洁、固化和检验的计量用电。

- 选定流：供应至制造场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：子组件产线计量电量减去单独计量的非过程负荷；无专用电表时仅可按第 7 节分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终装配的预制子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

###### 子组件制造废料和不合格品（`subassembly_scrap`）

按实测质量和去向记录不合格电路板、面板或光学零件、金属、塑料、焊接残余物、过滤器和受污染材料。

- 选定流：按处理路线划分的路线特定制造废料
- 流属性/单位：Mass / kg
- 数量规则：按废物代码和处理去向计量的外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终装配的预制子组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

### 过程：最终包装和工厂大门放行（`packaging`）

#### 输入

##### 产品流

###### 进入包装的已测试设备（`tested_equipment_input`）

记录进入出货包装的合格设备质量。

- 选定流：合格已测试显示器或投影仪设备
- 流属性/单位：Mass / kg
- 数量规则：与包装后参考产品输出核对的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 产品包装材料（`packaging_materials`）

按材料、再生含量和质量记录声明包装边界内的瓦楞纸板、模塑纤维或泡沫、塑料薄膜/袋、托盘、标签、说明书和其他包装。

- 选定流：按材料类型划分的产品包装材料
- 流属性/单位：Mass / kg
- 数量规则：根据包装 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`ecma-370-2026`; `barco-ecoscore-objective-criteria`

##### 废物流

###### 包装线废物（`packaging_waste`）

按实测质量和处理去向记录损坏纸箱、薄膜、缓冲材料、标签和其他包装损耗。

- 选定流：按材料和处理路线划分的包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量的外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

#### 输出

##### 产品流

###### 包装后成品（`packaged_product_output`）

定量参考为成品设备净质量；产品包装仍作为单独投入并独立披露。

- 选定流：显示器和投影仪，不包括电视接收装置，也不主要用于自动数据处理系统 `327360e4-f3be-43e9-81b1-e0cb3a51d782`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：核对产品质量并单独报告包装质量后，输出 1 kg 成品设备净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享产线和路线特定批次 | 优先直接计量和批次细分，使 display_route、projector_route、型号系列及场址控制子组件获得其实测投入、能源、废物和返工量而不进行分配。 | `iso-14040-2006`; `iec-63366-2025` |
| `allocation_rework` | 返工和复测 | 将替换部件、返工能源、不合格质量和复测归属于引发这些活动的合格生产批次；不得将返工返回视为共产品。 |  |
| `allocation_shared_utilities` | 不可分离的共享公用设施 | 直接计量和细分不可行时，使用可审计的因果驱动量，如机器时间、测试小时或产线小时。仅在不存在更好的物理关系时使用质量，并披露驱动量和敏感性。 |  |
| `allocation_scrap` | 可回收废料和废物 | 记录废物和废料总输出及其处理去向。收入或下游回收抵扣情景须与场址清单分开；不得以销售价值减少投入质量或前景负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | subassembly_production; final_assembly | 面板/光机、电子组件、电源、散热、外壳、电缆和附件 | 受控 BOM 加收货/领料记录 | route; model; part number; component family; description; technology; supplier; purchased_or_made; quantity issued; quantity returned; unit mass; mass source; material; recycled content | 将受版本控制的 BOM 与收货和产线领料记录关联；用校准秤或供应商声明核验单件质量 | item; kg | 每次 BOM 修订和生产批次 | 整个报告期 | 报告场址所有装配和子组件产线 | 按路线、型号和部件族汇总净领用数量乘以已核验单件质量 | 批准的 BOM 版本；供应商声明；秤校准；领料/退料记录 |
| `cp_process_energy` | subassembly_production; final_assembly; functional_testing | 电力 | 结算电表/分表和设备日志 | meter id; start/end reading; timestamp; voltage; process/line; operating hours; test cycle; allocation driver | 校准电表或公用事业级分表；与场址账单核对并扣除单独计量的排除负荷 | kWh | 连续或每批次/测试循环，按月汇总 | 优先连续 12 个月；声明更短的启动期 | 报告场址过程和测试区域 | 汇总计量 kWh 并按合格过程输出归一化；披露任何共享公用设施驱动量 | 电表校准；账单核对；覆盖日志 |
| `cp_waste_dispatch` | subassembly_production; final_assembly; functional_testing; packaging | 制造和包装废物 | 废物称重单和转移记录 | date; process; route; waste code; material/component; mass; destination; treatment; hazardous status | 校准场址秤或持证废物承包商称重单 | kg | 每次外运 | 整个报告期 | 报告场址所有前景过程 | 按过程、材料、废物代码和去向汇总；保留扣除任何收入前的总质量 | 称重单；转移联单；承包商收据 |
| `cp_output_mass` | subassembly_production; final_assembly; functional_testing; packaging | 转移和合格产品质量 | 生产和转移记录 | route; model; batch; serial count; gross unit mass; net unit mass; packaging mass; accepted/rejected status; transfer process | 与批次/序列号生产记录关联的校准秤 | kg; item | 每批次，或按型号质量核验并进行数量核对 | 整个报告期 | 报告场址所有前景过程 | 按路线/型号/过程汇总合格净质量；核对过程间转移和最终输出 | 秤校准；批次结案；序列号/数量核对 |
| `cp_rework_records` | functional_testing | 返工和复测 | 缺陷和返工日志 | serial/batch; route; failure mode; return process; replaced part and mass; labor event; retest duration; final disposition | 将测试系统结果关联到工单和部件领退记录 | item; kg; h | 每次失败测试和复测 | 整个报告期 | 报告场址测试和返工区域 | 将每个返工事件和替换部件归于其合格批次或最终废物处置 | 测试日志；工单；部件记录；处置批准 |
| `cp_product_specification` | functional_testing | 路线、视觉性能和排除项标识 | 批准的规格和符合性记录 | route; intended use; tuner/receiver present; display technology; width; height; diagonal; screen area; luminance; projector technology; light source; light output; native resolution; maximum image size; normal configuration; included modules | 从批准的型号规格提取，并对照路线适用的测试报告核验 | route; mm; inch; cm2; cd/m2; lm; pixels | 每个型号或规格版本 | 报告期内有效的规格 | 数据集纳入的每个型号 | 保留型号层级字段；路线标识或排除项字段不得采用质量加权汇总 | 签署的规格；符合性声明；测试报告 |
| `cp_power_state_test` | functional_testing | 正常/开机、ECO、待机、网络待机和关机功率 | 实验室或生产功率测试 | model; serial; route; state; W; voltage; frequency; test pattern; configuration; brightness/light output; warm-up; stabilization; connected modules; method; timestamp | 在声明的路线适用方法和出货/正常配置下使用校准功率分析仪 | W | 每个型号/规格版本，以及影响功率的变更后 | 报告期内有效的测试 | 数据集纳入的每个型号 | 保留型号/状态结果；仅在报告型号层级范围和配置后使用产量加权平均 | 分析仪校准；完整测试记录；规格批准 |
| `cp_packaging_bom` | packaging | 包装材料和随附附件 | 包装 BOM 和装箱记录 | model; packaging part; material; quantity; unit mass; recycled content; dimensions; included accessory; pallet inclusion | 将批准的包装 BOM 与包装领料记录关联，并核验代表性单件质量 | kg; item; mm | 每次包装修订和生产批次 | 整个报告期 | 报告场址包装线 | 按材料和型号汇总数量乘以已核验单件质量；包装与参考质量分开报告 | 批准的包装 BOM；秤校准；供应商声明；领料记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_component_mass` | 每个部件族 | 部件净质量 = sum((领用数量 - 退回的未使用数量) x 已核验单件质量) | cp_component_bom | 每 kg 参考产品的部件族质量 kg | `barco-ecoscore-objective-criteria` |
| `calculate_screen_area` | display_route | 可视屏幕面积 = 沿面板表面测量的最大可视图像宽度 x 最大可视图像高度 | cp_product_specification | 各型号屏幕面积，cm2 或 m2 | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `calculate_native_resolution` | 所有路线 | 原生总分辨率 = 原生水平像素 x 原生垂直像素；保留两个像素维度和总数 | cp_product_specification | 各型号 pixels 和 megapixels | `energy-star-displays-v8-2020`; `iso-iec-21118-2020` |
| `normalize_inventory` | 所有前景行 | 归一化量 = 报告期过程量 / 合格成品净质量 kg | cp_component_bom; cp_process_energy; cp_waste_dispatch; cp_output_mass; cp_rework_records; cp_packaging_bom | 每 1 kg 参考产品的清单量 | `iec-63366-2025` |
| `reconcile_product_mass` | 从最终装配至包装 | 合格产品质量 = 进入合格设备的部件质量 - 移除/不合格部件 + 合格替换部件；包装质量单独核对 | cp_component_bom; cp_output_mass; cp_rework_records; cp_packaging_bom | 按型号/批次的产品质量平衡差和包装质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | 每个型号 | 路线、预定用途、不存在调谐器/接收器、非 ADP 主要用途和分类范围必须获得明确批准；型号系列不得跨越路线或排除边界。 | 批准的规格；符合性声明；cp_product_specification |
| `dq_component_completeness` | BOM 和质量平衡 | BOM 映射须分别覆盖面板或光机、电子组件/电源、散热、外壳/机架、电缆/附件和包装；披露未分类 BOM 质量和质量平衡差。 | BOM 版本；供应商质量证据；校准秤；核对报告；cp_component_bom |
| `dq_energy_coverage` | 过程用电 | 披露电表覆盖、排除负荷和共享公用设施驱动量，并与场址总量核对；测试用电须包括失败测试和复测。 | 电表图；校准；场址账单；cp_process_energy；cp_rework_records |
| `dq_visual_power_test` | 型号规格和测试 | 视觉性能和功率状态记录须标识适用方法、型号、配置、测试条件和校准设备。没有适用性声明时，不得将显示器限值应用于投影仪或被豁免的显示器子类。 | 批准的测试报告；设备校准；cp_product_specification；cp_power_state_test |
| `dq_temporal_geographic` | 所有前景数据 | 优先采用至少连续 12 个月、代表正常生产的数据。声明更短的启动期或小批量覆盖、场址地域、供应商地域、技术年份和任何代理数据集。 | 报告期台账；产量；供应商和上游数据集元数据 |
| `dq_waste_destination` | 所有废物 | 每一废物行须标识材料/部件、危险状态、实测质量、去向和处理；可重复使用的退回品和返工不得报告为废物。 | 废物联单；承包商收据；返工处置；cp_waste_dispatch |
| `dq_source_traceability` | 外部约束字段 | 保留所用标准的准确版本、官方页面或技术文件，并记录适用性限制；网页来源须保留检索日期。 | 关联第 11 节来源 ID 的来源登记册 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_exclusions` | 参考产品 | 仅当声明且只声明一条路线，且证据确认不含电视广播调谐器/接收器、并非主要用于 ADP 系统且不属于其他排除产品标识时通过。 | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `validate_reference_flow` | 参考流 | 产品 UUID、Mass UUID、Units of mass UUID 和 kg 参考单位须与第 3 节一致，packaged_product_output 须等于 1 kg 成品设备净质量。 |  |
| `validate_required_qualifiers` | 型号元数据 | 任何必需路线、技术、尺寸/光输出、分辨率、功率状态、部件、地域或报告期限定信息缺失，或被未标注的系列平均值替代时，完整性校验失败。 | `energy-star-displays-v8-2020`; `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020` |
| `validate_component_routes` | 过程清单 | display_route 须含显示面板行，并将 projector_optical_engine 标记为不适用；projector_route 须含光机/光源行，并将 display_panel_assembly 标记为不适用。两条路线均须含电子组件/电源、散热和外壳/机架行。 | `ecma-370-2026`; `barco-ecoscore-objective-criteria` |
| `validate_power_states` | 功率测试 | 要求正常/开机及每个可用 ECO、待机、网络待机和关机结果，并含 W、电压、频率、配置和方法。不存在的物理状态须声明不适用，不得记录为零。 | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020`; `barco-ecoscore-objective-criteria` |
| `validate_mass_energy_waste_balance` | 前景过程 | 要求各过程门的合格转移质量相互核对，部件质量与产品净质量核对，包装保持独立，测试用电包括复测，且所有不合格材料均有最终产品返回或废物去向。 |  |
| `validate_source_applicability` | 所有外部规则 | 每条依赖来源的规则须标识版本和适用性。明确拒绝将欧盟电子显示器限值迁移至投影仪，也不得将 ADP 显示器产品数据迁移至本 PCR 参考产品。 | `eu-2019-2021-electronic-displays`; `iec-63366-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与所声明路线、技术、预定用途、地域、边界门和必需限定信息匹配的成品商用/工业显示器或非 ADP 前投影仪制造数据集 |
| excluded_use | 电视接收机；ADP 主要用途显示器/投影仪；显示器/投影仪混合平均；集成面板；裸部件；电影放映机；没有声明情景的使用阶段数据集 |
| required_metadata | 参考流 UUID 和质量基准；路线；技术；型号/系列；预定用途和排除声明；尺寸或光输出；原生分辨率；正常/出货配置；功率状态；面板/光机、电子组件、散热和外壳披露；净质量和包装质量；地域；报告期；分配和代理数据决定 |
| required_quality_disclosure | 前景覆盖和电表图；BOM 质量覆盖和质量平衡差；型号覆盖；测试方法和校准；不合格/返工处理；废物去向；供应商/上游代理数据质量；时间、地域和技术代表性；来源适用性限制 |
| update_trigger | 路线、显示/投影或光源技术、面板/光机、电源架构、散热、外壳材料、原生分辨率、尺寸/光输出、实测功率状态、场址、供应商组合、过程深度、分配驱动量、包装、法规范围发生变化，或数据超过声明的评审间隔 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | standard | IEC 63366:2025，电气电子产品和系统生命周期评价产品类别规则，https://webstore.iec.ch/en/publication/67691（检索于 2026-08-09） | 横向 EEPS LCA/PCR 框架、默认情景和报告语境 |
| `iso-14040-2006` | standard | ISO 14040:2006 及 Amendment 1:2020，环境管理—生命周期评价—原则与框架，https://www.iso.org/standard/37456.html（检索于 2026-08-09） | LCA 目标与范围、清单、报告和局限性语境 |
| `eu-2019-2021-electronic-displays` | official_guidance | Commission Regulation (EU) 2019/2021，电子显示器，CELEX 32019R2021，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019R2021（检索于 2026-08-09） | 显示器、电视/调谐器、数字标牌和投影仪定义；正常配置；显示器功率模式；材料效率；明确的投影仪和子类适用性限制 |
| `energy-star-displays-v8-2020` | official_guidance | U.S. EPA ENERGY STAR Program Requirements，Product Specification for Displays，Version 8.0，Rev. February 2020，https://www.energystar.gov/sites/default/files/Displays%20Version%208.0%20Program%20Requirements%20Rev.%20Feb-2020.pdf（检索于 2026-08-09） | 商用/标牌显示器标识、调谐器排除、屏幕面积、分辨率、亮度、配置及开机/睡眠/关机测试字段 |
| `iec-61947-1-2002` | standard | IEC 61947-1:2002，Electronic projection—Measurement and documentation of key performance criteria—Part 1: Fixed resolution projectors，https://webstore.iec.ch/en/publication/6147（检索于 2026-08-09） | 固定分辨率投影仪技术、集成光源/光学系统和关键性能记录 |
| `iec-62906-5-1-2021` | standard | IEC 62906-5-1:2021，Laser displays—Part 5-1: Measurement of optical performance for laser front projection，https://webstore.iec.ch/en/publication/33582（检索于 2026-08-09） | 激光/混合前投影测量及 DMD、LCoS 和 LCD 投影仪技术披露 |
| `iso-iec-21118-2020` | standard | ISO/IEC 21118:2020，Information technology—Office equipment—Information to be included in specification sheets for data projectors，https://www.iso.org/standard/74674.html（检索于 2026-08-09） | 前投影仪规格表字段和对背投设备的明确排除 |
| `ecma-370-2026` | standard | ECMA-370，The ECO Declaration，第 7 版，2026 年 6 月，https://ecma-international.org/publications-and-standards/standards/ecma-370/（检索于 2026-08-09） | ICT/CE 产品及子组件环境属性声明，包括外壳、PCB、电池、能源模式、包装和处理信息；不作为制造过程证据 |
| `barco-ecoscore-objective-criteria` | handbook | Barco，Ecoscore Objective Criteria questionnaire，https://assets.barco.com/m/685f7d65d1e69c9f/original/Ecoscore_ObjectiveCriteria.pdf（检索于 2026-08-09） | 第一方显示器/投影仪部件、PCB/电缆、塑料外壳、电池、包装、拆解、开机/ECO/待机/关机功率及投影仪测试条件披露字段 |

### 过程：最终设备装配（`final_assembly`）

#### 输入

##### 产品流

###### 显示面板组件（`display_panel_assembly`）

仅用于 display_route，记录面板/显示模块、背光或发光模块、保护玻璃和存在时的触控层。声明技术、供应商、零件号、采购或场址自制状态和质量。

- 选定流：显示面板组件
- 流属性/单位：Mass / kg
- 数量规则：根据合格 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已装配显示设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`eu-2019-2021-electronic-displays`; `barco-ecoscore-objective-criteria`

###### 投影仪光机和光源组件（`projector_optical_engine`）

仅用于 projector_route，记录光机、投影/放大光学系统、成像器件、光源、驱动器/镇流器及一体供应时的过滤器。声明 LCD/3LCD、DLP/DMD、LCoS 或其他技术，以及灯泡、LED、激光或混合光源。

- 选定流：投影仪光机和光源组件
- 流属性/单位：Mass / kg
- 数量规则：根据合格 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已装配投影设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`iec-61947-1-2002`; `iec-62906-5-1-2021`

###### 电子板和电源（`electronics_power_supply`）

将主板/控制板/接口板、电源板、外置或内置电源、线束、连接器、存储器和嵌入式控制模块作为可独立识别的 BOM 部件族记录。

- 选定流：电子板和电源组件
- 流属性/单位：Mass / kg
- 数量规则：根据合格 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### 散热系统（`cooling_system`）

记录声明型号中存在的散热片、热管、风扇、泵、空气过滤器和散热控制硬件。

- 选定流：散热系统部件
- 流属性/单位：Mass / kg
- 数量规则：根据合格 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`barco-ecoscore-objective-criteria`

###### 外壳、机架和机械五金（`housing_chassis`）

按材料和质量记录外壳及边框塑料、金属机架、随设备出货的支座或安装五金、紧固件、涂层和胶粘剂。

- 选定流：外壳、机架和机械五金
- 流属性/单位：Mass / kg
- 数量规则：根据合格 BOM 数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`eu-2019-2021-electronic-displays`; `ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### 随附电缆、遥控器和附件（`included_accessories`）

仅记录随声明产品包装出货的电缆、遥控器、电池、可拆卸支座/支架和附件；单独销售的附件不属于参考产品。

- 选定流：随附电缆和附件套件
- 流属性/单位：Mass / kg
- 数量规则：根据出货附件数量和实测或供应商声明的单件质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### 最终装配用电（`assembly_electricity`）

记录机械连接、布线、装配阶段实施的固件加载、物料搬运和装配线公用设施的计量用电。

- 选定流：供应至制造场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：声明报告期内计量的最终装配用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

###### 装配废料和不合格部件（`assembly_scrap`）

按实测质量和去向记录损坏部件、切割下来的电缆、紧固件、胶粘剂、保护膜和其他装配废物；可重复使用的退回部件仍作为产品流。

- 选定流：按材料和处理路线划分的装配废物
- 流属性/单位：Mass / kg
- 数量规则：按废物代码和处理去向计量的外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已装配设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

#### 输出

##### 产品流

###### 送往测试的已装配设备（`assembled_equipment`）

按路线和型号系列分别记录转入功能测试的已装配净质量。

- 选定流：已装配显示器或投影仪设备
- 流属性/单位：Mass / kg
- 数量规则：实测的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 废物流

##### 基本流

### 过程：配置、功能和功率状态测试（`functional_testing`）

#### 输入

##### 产品流

###### 待测试的已装配设备（`equipment_under_test`）

记录进入测试的已装配设备，并保留型号、路线、配置和序列号或批次标识。

- 选定流：已装配显示器或投影仪设备
- 流属性/单位：Mass / kg
- 数量规则：进入测试设备的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已测试设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 配置和测试用电（`testing_electricity`）

记录预热、图像测试、固件/配置、老化测试、功率状态测量和返工后重复测试消耗的计量电量。

- 选定流：供应至制造场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：声明报告期内测试区域的计量电量，包括失败测试和复测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已测试设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`energy-star-displays-v8-2020`; `barco-ecoscore-objective-criteria`

##### 废物流

###### 测试不合格部件和不可修复设备（`test_reject_waste`）

仅记录测试和返工后最终声明为废物的部件或设备。退回装配或已修复的设备仍作为可见产品流，不得作为废物。

- 选定流：按部件和处理路线划分的测试不合格废物
- 流属性/单位：Mass / kg
- 数量规则：最终处置决定后的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已测试设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

#### 输出

##### 产品流

###### 合格已测试设备（`tested_equipment`）

记录通过路线特定视觉性能、电气安全、功能和声明功率状态检查的合格设备。

- 选定流：合格已测试显示器或投影仪设备
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`energy-star-displays-v8-2020`; `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020`

###### 返工返回（`rework_return`）

记录退回装配的设备或子组件的质量和原因，以及替换部件与复测循环。

- 选定流：退回返工的设备
- 流属性/单位：Mass / kg
- 数量规则：退回所标识上游前景过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已测试设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rework_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预制路线特定子组件（`prepared_subassemblies`）

记录转入最终装配的合格面板/光机、电子板、电源、散热和外壳子组件的实测质量。

- 选定流：预制路线特定子组件
- 流属性/单位：Mass / kg
- 数量规则：按子组件族实测的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 废物流

##### 基本流
