---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.harrows-scarifies-cultivators-weeders-and-hoes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 耙、松土机、中耕机、除草机和锄具

## 1. 范围与适用性

本规则适用于按验收销售配置制造一台新的完整耙、松土机、中耕机、除草机或锄具。声明实际材料和工艺后，手动式及牵引式产品均可适用。不包括拖拉机、犁、播种机、单独销售的零件、田间使用及寿命终结。生产者必须为下列代表性清单行之外的实际部件增加单独识别的原子 BOM 交换。生产数据集包括通过背景数据集关联的采购投入供应以及前景制造、表面处理、装配和发运准备。产品识别依据 `un-cpc-3-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.harrows-scarifies-cultivators-weeders-and-hoes |
| classification_refs | CPC 3.0 44112（`un-cpc-3-2025`） |
| covered_products | 用于整地或耕作的完整耙、松土机、中耕机、除草机和锄具 |
| excluded_products | 犁；播种机；拖拉机；单独销售的零件；剩余类别的其他土壤作业机械 |
| representative_product | 具有已声明作业部件及挂接装置的验收成品钢架中耕机 |
| production_route | 采购材料及零件；切割/成形；有条件的焊接和涂装；装配、检验及包装 |
| market_state | 工厂门口的新验收完整机具；发运包装单独报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台用于整地或耕作的完整机具。 |
| How much | 一台指定配置的验收成品机具。 |
| How well | 满足制造商声明的配置和验收规范。 |
| How long or cycle | 工厂门口制造；不假定田间寿命或作业周期。 |
| reference_flow_link | `finished_implement` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 耙、除草机、耕耘机、除草机和锄头 `b7ca7dbf-8da6-4c2f-b5fc-2751058a221b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机具子类；型号及配置；手动或牵引驱动；作业宽度；主要材料；验收净质量 M；场址和期间。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按实际 BOM 项识别的供应商交付状态的采购钢材和其他实物投入。 |
| starting_condition_role | 前景制造单元过程的起点。 |
| product_classification_scope | CPC 44112 所列完整土壤作业机具。 |
| recursive_input_rule | 同类完整机具仅在实际并入产品时作为单独投入记录；不在此前景单元过程中递归建模其制造。 |
| upstream_dataset_requirement | 每项采购原子投入关联状态和地域适宜的上游数据集；披露无法匹配者。 |
| disclosure | 声明场址、期间、工序、配置、采购组件、包装和排除的生命周期阶段。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 生产数据集 | 纳入制造、适用的表面处理、装配和发运准备至工厂门口；包装与产品净质量分开报告。 | |
| `boundary_variant` | 产品配置 | 仅当记录的路线使用有条件交换时纳入；为其他实际部件增加单独的原子 BOM 交换。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `implement_manufacturing` | 机具综合制造 | required | 每台验收成品机器 | 切割、成形、适用的焊接/涂装、装配和发运准备 | 每台验收成品机器 |

### 过程：机具综合制造（`implement_manufacturing`）

#### 输入

##### 产品流

###### 热轧非合金钢板（`steel_sheet`）

记录指定钢架路线领用的钢板；实际 BOM 应区分其他牌号和形态。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：依据领料及 BOM 记录采集每台验收成品机器的钢板领用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 纳入条件：仅当使用热轧非合金钢板时。

###### 交流电（`electricity_ac`）

记录制造期间可归属的外购交流电能。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集归属于每台验收成品机器的计量电能，以 MJ 表示。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

###### 药芯焊丝（`welding_wire`）

仅记录有凭据的药芯电弧焊路线消耗的焊丝。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：采集每台验收成品机器的领用焊丝减去可追溯的未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 纳入条件：仅当采用药芯电弧焊时。

###### 聚酯粉末涂料（`polyester_powder`）

仅在采用此涂装路线时记录采购的干燥聚酯粉末；准确的公开流 UUID 尚未解决。

- 选定流：聚酯粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：采集每台验收成品机器的粉末消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 纳入条件：仅当施加聚酯粉末涂层时。

###### 瓦楞纸发运箱（`corrugated_box`）

若机具配有此包装，其质量应与验收机具净质量分开记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：采集每台验收成品机器的纸箱质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom`
- 纳入条件：仅当使用瓦楞纸发运箱时。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品机具（`finished_implement`）

不含发运包装的完整验收机具。

- 选定流：耙、除草机、耕耘机、除草机和锄头 `b7ca7dbf-8da6-4c2f-b5fc-2751058a221b`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`

##### 废物流

###### 制造废钢边角料（`steel_scrap`）

记录切割和成形工序分拣出的工业后废钢。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：采集每台验收成品机器的分拣废钢质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 纳入条件：仅当钢材切割或成形产生边角料时。

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared` | 共享制造投入 | 优先分别计量或细分工序；否则采用有记录的物理驱动量将共享投入分配至验收配置，并披露驱动量和期间。 | `ghg-product-2011` |
| `allocation_scrap` | 废钢 | 废钢作为废物输出记录并披露去向；未单独声明方法时，不在此前景清单中抵扣原生钢。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `implement_manufacturing` | 参考产品 | 校准称重和验收记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收配置 | 声明的生产期间 | 制造场址 | 每台验收净质量 | 秤校准及验收记录 |
| `cp_bom` | `implement_manufacturing` | 采购材料和包装投入 | BOM 及领料记录 | 型号；配置；物料身份；领用质量；未用退料；验收台数 | 将采购材料和纸箱领用与实际配置及验收产量核对。 | kg | 每生产批 | 声明的生产期间 | 制造场址 | 净领料量 / 验收机器数 | 供应商规格和领料台账 |
| `cp_energy` | `implement_manufacturing` | 电力投入 | 电表及生产记录 | 电表读数；期间；分配的 MJ；验收台数 | 读取校准电表或供电记录；用 3.6 MJ/kWh 将 kWh 换算为 MJ，并以记录的驱动量核对共享用电。 | MJ | 每报告期间 | 声明的生产期间 | 制造场址 | 分配电量 / 验收机器数 | 电表或供电记录及分配工作表 |
| `cp_scrap` | `implement_manufacturing` | 废钢输出 | 分拣废钢称重 | 废钢质量；期间；验收台数；去向 | 称量分拣出的钢材边角料并与领料核对。 | kg | 每收集批 | 声明的生产期间 | 制造场址 | 可归属废钢 / 验收机器数 | 称重记录及废物转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | 所有行 | 将 BOM、计量和验收记录匹配至声明的配置和期间；识别排除的部件。 | BOM、生产和验收记录 |
| `dq_balance` | 材料及废钢行 | 核对主要钢材投入、验收产品净质量和分拣废钢；解释采购零件及其他输出。 | 签署的物料平衡表 |
| `dq_background` | 采购投入 | 记录上游数据集的状态、地域、技术和时间匹配性；披露缺失的匹配。 | 供应商和背景数据集元数据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | 参考产品 | 确认 M 为同一完整配置的实测验收净质量，且不含发运包装。 | `un-cpc-3-2025` |
| `validate_inventory` | 清单 | 确认已纳入行是原子交换、路线条件有记录、数量按每台计，其他实际 BOM 项各有单独交换。 | `ghg-product-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可作为二级或背景数据集审查的前景生产清单 |
| downstream_use | 产品流、过程和 lifecyclemodel 投影 |
| allowed_use | 建模子类、配置和制造路线相匹配的验收机具。 |
| excluded_use | 推断田间使用寿命、土壤作业性能或未记录的部件数量。 |
| required_metadata | 场址；期间；子类；型号；配置；验收净质量 M；作业宽度；材料；工序；分配驱动量。 |
| required_quality_disclosure | 计量、BOM 和称重来源；条件路线；上游数据集匹配；未解决 UUID 和范围证据。 |
| update_trigger | 配置、供应商、表面处理路线或制造技术变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，《CPC 3.0 结构》，2025 年 6 月 30 日；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品身份；2026-09-24 检索。 |
| `ghg-product-2011` | standard | GHG Protocol，《Product Life Cycle Accounting and Reporting Standard》，2011 年，第 9.2 节，第 62–63 页；https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 避免及实施分配。 |
