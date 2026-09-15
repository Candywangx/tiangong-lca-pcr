---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.typewriters-and-word-processing-machines
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 打字机和文字处理机

## 1. 范围与适用性

本 PCR 覆盖独立式机械、电动和电子打字机及专用文字处理机的生产。不包括运行文字处理软件的通用计算机、独立打印机、软件、备件及维修服务。CPC 用于识别产品类别，不规定制造配方。[un-cpc-3-0-structure-2025]

前景起点为外购成品组件到达装配厂，终点为测试验收合格的设备出厂。组件制造通过上游数据集连接。厂内自制组件须增加有计量依据的单元过程和原子交换，不得隐藏在装配用电中。组件图是采集核对表，不是通用物料清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.typewriters-and-word-processing-machines |
| classification_refs | CPC 3.0:45110 |
| covered_products | 独立打字机；专用文字处理机 |
| excluded_products | 通用计算机；独立打印机；软件；单独销售的零件；维修服务 |
| representative_product | 一种声明型号的合格整机 |
| production_route | 外购组件装配、调校、测试和包装 |
| market_state | 新制完整机器出厂；净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具备声明打字或专用文字处理功能的整机 |
| How much | 以 1 kg 整机净质量为生产声明单位；记录每台整机质量 |
| How well | 通过型号特定的键盘响应及打印或文字处理功能验收 |
| How long or cycle | 一个生产批次；该部分清单不含全寿命服务，生命周期比较须另行定义 |
| reference_flow_link | reference_product：1 kg；乘以实测每台质量得到每台机器清单 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 打字机和文字处理机 `23a1e086-b873-4bcc-89a9-e300fab7eef6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；机械/电动/电子驱动；打印技术；文本存储及显示配置；每台质量；随附附件；验收条件；地域；生产期间；组件起始边界 |

数据集元数据须声明全部限定信息。按质量归一的工厂数据集不代表功能等效；比较须采用相同的文本产出、质量、工作周期、寿命和下游边界。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 合格整机 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用净质量。保留台数和型号特定实测每台质量，不得按通用质量推算台数。 |
| electricity_conversion | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 3.6 MJ/kWh 换算电量，不得对电力使用燃料热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品组件到达收料区，供应商操作不在实测前景内 |
| starting_condition_role | 前景装配起始边界，不表示材料无环境负荷 |
| product_classification_scope | 整机；零件是上游投入，不是参考产品 |
| recursive_input_rule | 同类整机投入时仅继承一次其上游负荷，计量后续操作；不得递归连接自身输出数据集 |
| upstream_dataset_requirement | 各外购组件连接供应商特定或有依据的代表性生产数据，并声明运输边界 |
| disclosure | 分别报告仅装配和含上游连接的结果；声明未纳入的下游阶段 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_scope | assembly | 纳入收料、装配、调校、测试、返工、包装和厂内废物外运。实际使用的测试纸、替换色带、润滑剂和包装衬垫等须逐项增加交换并采集。 |  |
| boundary_upstream | supply_chain | 外购总成保留完整上游负荷。已包含的电机、电路板或电缆不得作为独立投入重复计量。 |  |
| boundary_partial | downstream | 本记录是生产清单模块，不是完整产品足迹。完整生命周期研究须加入分销、使用、维护和报废阶段，并定义服务功能单位。 | ghg-protocol-product-standard-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| machine_assembly | 装配、验收和包装 | required | 全部声明型号 | 前景生产 | 1 kg 合格整机净质量 |

### 过程：装配、验收和包装（`machine_assembly`）

#### 输入

##### 产品流

###### 打字机键盘总成（`keyboard_assembly`）

外购完整键盘总成时纳入；已安装的键帽和传动件只计一次。

- 选定流：打字机键盘总成
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 打字机打印机构及字车总成（`printing_mechanism_assembly`）

纳入外购完整打印总成；声明压纸辊、字模、色带及字车的覆盖范围。

- 选定流：打字机打印机构及字车总成
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 打字机机壳（`machine_enclosure`）

纳入外购机壳；声明材料组成，排除单独记录的内部组件。

- 选定流：打字机机壳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 小型电动机（`small_electric_motor`）

仅在安装独立小型驱动电机时纳入；按分类核对额定功率和交直流类型。

- 选定流：小型电动机 `60ce5b4c-0a5b-4ee5-9f5a-ac3d2b69681c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 文字处理机装配控制电路板（`populated_control_board`）

仅在安装独立装配控制板时纳入；板上元器件质量包含在该总成中。

- 选定流：文字处理机装配控制电路板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 液晶显示模组（`lcd_display_module`）

仅在安装独立液晶模组时纳入；记录尺寸、背光及供货模组边界。

- 选定流：液晶显示模组 `264605c6-41b8-4baa-82b0-e27e815063a0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 办公机器电源组件（`power_supply_unit`）

仅在安装独立电源组件时纳入；声明电压、额定功率及是否包含电缆。

- 选定流：办公机器电源组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 电力（`assembly_electricity`）

计量收料、装配、调校、测试和包装用电，包括分配的厂区辅助用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 瓦楞纸箱（`corrugated_board_box`）

使用瓦楞运输纸箱时纳入；机器净产出质量不含纸箱质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

#### 输出

##### 产品流

###### 打字机和文字处理机（`reference_product`）

记录验收合格整机净质量；声明所含附件并排除运输包装。

- 选定流：打字机和文字处理机 `23a1e086-b873-4bcc-89a9-e300fab7eef6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集批次数量并除以合格整机净质量；归一后参考产出等于 1 kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

##### 废物流

###### 废钢（`steel_scrap`）

装配产生的分选报废钢制零件作为废钢运出时纳入；记录合金及去向。

- 选定流：废钢 `980a386b-f76b-4348-bb6b-3aa992538ba1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废塑料类（`waste_plastic`）

纳入一种分选的非危险废塑料流；声明聚合物和污染情况，不得混入电子废物或废金属。

- 选定流：废塑料类 `9be4d01d-a957-445a-9ce6-70b0418cd0f6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废弃装配印制线路板（`waste_populated_pwb`）

装配电路板报废时纳入；声明危险废物分类、组成及处理去向。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集该交换实际批次数量并除以合格整机净质量。不发生该交换时须记录不适用依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格整机净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared_processes | 可行时通过细分避免分配，否则采用有依据的物理关系；无法建立物理因果关系时须论证经济或其他关系，并一致披露方法。 | ghg-protocol-product-standard-2011 |
| allocation_site | assembly_overhead | 共用电力使用实测产线能耗或经验证的运行时间份额。返工负荷计入合格产出分母，不得把不合格废品当作可销售整机分摊负荷。 |  |
| allocation_scrap | waste | 分别记录废物质量及处理。不得从实测装配交换中扣减假定回收收益；下游回收模型须单独披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | machine_assembly | 组件、包装及参考质量 | 物料清单和批次验收 | 型号、组件代码、领退料 kg、库存变动、合格台数、每台净 kg、所含子组件 | 称量代表性型号组件，将领料、库存和合格产量核对 | kg | 每批 | 声明的代表性生产期间 | 声明装配场址 | 净领料 kg 除以合格净产出 kg；产出 kg 为台数乘以实测每台 kg | 校准、物料清单版本及测试验收记录 |
| cp_energy | machine_assembly | 装配用电 | 分表及厂区账单 | 电表编号、始末 kWh、产线工时、厂区总量、分配份额、产出 kg | 计量产线；辅助负荷份额与厂区总量核对 | MJ | 每批或核对后的报告期 | 与生产期间一致 | 同一场址 | 净 kWh 乘以 3.6 后除以合格产出 kg | 电表校准、账单及分配依据 |
| cp_waste | machine_assembly | 分选废品 | 称量单及转移单 | 废物流编号、材料、危险属性、kg、日期、去向、库存变动、产出 kg | 分别称量各废物流；核对外运量和库存变化 | kg | 每次外运及批次核对 | 同一生产期间 | 同一场址 | 产生废物 kg 除以合格产出 kg | 称量记录、转移单及去向证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有交换 | q = Q / M；M = 合格台数 × 实测每台净 kg；保留库存变动核对 | Q; M | 每 kg 合格整机数量 |  |
| electricity_mj | 电力 | MJ = kWh × 3.6 | kWh | MJ |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| complete_bom | 材料覆盖 | 将完整型号物料清单与进料、净产出、废品及库存变化核对；调查无法解释的差额。数据集完成前须增加实际缺失的原子交换。 | cp_material 和 cp_waste 核对 |
| primary_records | 全部清单行 | 保留场址原始记录、校准、不确定性和代表性信息；缺失数据不等于零。 | 采集协议及供应商证据 |
| configuration | 型号差异 | 采集时区分机械、电动和电子配置；仅在披露份额时使用产量加权汇总。 | 型号记录及产量份额 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_flow | 要求全部参考限定信息、正的合格产出质量和实测台数质量换算。 |  |
| validate_coverage | inventory | 核对物料清单闭合和每项纳入条件；不得因缺失 UUID 一律填零，不得合并公用工程，不得重复计入总成及子组件负荷。 |  |
| validate_units | amounts | 核对 kg 和 MJ 归一、协议连接、报告期间及废物方向；reference_product 必须等于 1 kg。 |  |
| validate_boundary | dataset_claims | 不得仅凭本部分模块进行全生命周期比较；须披露上游缺口及下游情景。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset; process; lifecyclemodel |
| allowed_use | 具有声明上游连接及配置的装配生产模块 |
| excluded_use | 独立的全寿命比较足迹；自动替代通用计算机 |
| required_metadata | 型号、驱动、净质量、附件、场址、日期、上游覆盖、协议记录和分配 |
| required_quality_disclosure | 缺失交换及 UUID、不确定性、代表性、排除项及未解决证据 |
| update_trigger | 物料清单、技术、供应商、场址、电力组合或验收测试变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | 联合国统计司，CPC 3.0 结构，2025年6月30日; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; 检索日期 2026-09-08 | 整机身份及与零件的区分；independence_key: un-cpc-version-3-0-structure-2025 |
| ghg-protocol-product-standard-2011 | standard | WRI 与 WBCSD，《产品生命周期核算与报告标准》（2011），第7、9章; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; 检索日期 2026-09-08 | 部分与完整清单披露；仅引用分配层级。本 PCR 不声称完全符合该标准。independence_key: ghg-protocol-product-standard-2011 |
