---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.rangefinders-theodolites-and-tachymeters-tacheometers-and-levels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 测距仪、经纬仪、速测仪（全站仪）和水准仪

## 1. 范围与适用性

本 PCR 适用于用于距离、角度、坐标或高程测量的完整测距仪、经纬仪、电子速测仪/全站仪，以及光学水准仪、补偿式水准仪、数字水准仪或激光水准仪的工厂门生产。产品是装入销售包装并通过检验的完整仪器。单独销售的三脚架、标尺和棱镜，GNSS 接收机、摄影测量仪器、手持卷尺和卡尺以及测量服务不在范围内。默认边界不含使用阶段和寿命终结阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.rangefinders-theodolites-and-tachymeters-tacheometers-and-levels |
| classification_refs | CPC 3.0 `48212`，测距仪、经纬仪、速测仪（全站仪）和水准仪 |
| covered_products | 完整测距仪；经纬仪；速测仪/电子速测仪/全站仪；水准器水准仪、补偿式水准仪、数字水准仪和激光测量水准仪 |
| excluded_products | 单独销售的三脚架、标尺和棱镜；GNSS 接收机；摄影测量仪器；手持长度量具；测量服务 |
| representative_product | 一台完整全站仪，包括交付时安装的电池（如有）和瓦楞纸板销售包装箱 |
| production_route | 接收规定材料和部件；适用时制造外壳；光学/电子集成；装配；校准与功能测试；包装 |
| market_state | 在制造场址门口已验收、已校准、可销售的仪器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够执行所声明距离、角度、坐标或高程测量功能的完整测量仪器 |
| How much | 一台可销售仪器 |
| How well | 符合制造商声明的型号规格及适用的精度验证程序并通过验收 |
| How long or cycle | 工厂门处的一项生产输出；使用寿命作为元数据声明，不作为本从摇篮到工厂门 PCR 的归一化基准 |
| reference_flow_link | `finished_surveying_instrument` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 测距仪、经纬仪、速测仪/全站仪或水准仪 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 仪器类别；制造商与型号；测量功能；光学/数字/激光配置；声明的精度或不确定度；随附电池和附件；仪器净质量；包装配置；制造场址与地理范围；生产期；工厂门 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明所有必需限定信息。参考产品 UUID 尚未解决，不得以范围更宽的测量仪器流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 已验收的成品测量仪器 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 数据集恰好归一化至一台已验收可销售仪器；不合格或返工单元不计作参考输出。 |
| `material_mass_measurement` | 铝合金、光学元件、印制线路板和瓦楞纸箱投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的净质量；可重复使用的运输包装不随产品转移时应排除。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数，并按 1 kWh = 3.6 MJ 转换；不得把上游发电排放重复写成前景基本流。 |
| `battery_item_count` | 安装的锂离子电池 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计入随参考产品转移的电池，并披露额定容量、化学体系和电池组件配置。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入所列材料与部件的接收和发料、直接控制的外壳加工、光学/电子集成、装配、校准、功能测试和销售包装，直至制造场址门口。 | `un-cpc-3-0-structure-2025` |
| `boundary_upstream_inputs` | 外购投入 | 每项外购材料、部件、电池、电力和包装均链接至地理与技术代表性上游数据集；不得把上游排放重复列为前景交换。 |  |
| `boundary_quality_test` | 校准和功能测试 | 保留型号特定的校准、功能测试、精度测试和验收证据；识别所采用的测试程序，不得把局部精度检查表述为完整产品验收。 |  |
| `boundary_exclusions` | 默认研究边界 | 除非声明的研究范围明确纳入，否则排除资本设备、建筑、员工出行、产品使用、维护和寿命终结。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 规定的材料和部件已运抵仪器制造场址 |
| starting_condition_role | 前景制造投入条件 |
| product_classification_scope | CPC 3.0 `48212` 完整货物；单独供应的零部件和附件不属于本产品身份 |
| recursive_input_rule | 为集成或转售而接收的完整 CPC 48212 仪器应作为同类别产品投入并链接其上游数据集，不在本前景过程中递归拆分 |
| upstream_dataset_requirement | 每项外购投入优先使用供应商特定数据集，否则使用与材料/部件状态、地理和技术相匹配且有记录的代表性数据集 |
| disclosure | 声明自制或外购边界、型号与仪器类别、制造地理范围、生产期、随附电池/附件、包装配置、测试程序、分配和数据覆盖率 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| instrument_fabrication_assembly_test_packaging | 仪器制造、装配、测试和包装 | required |  | 前景生产 | 一台已验收可销售测量仪器 |

### 过程：仪器制造、装配、测试和包装（`instrument_fabrication_assembly_test_packaging`）

#### 输入

##### 产品流

###### 用于仪器结构件的铝合金（`aluminium_alloy_input`）

记录在声明前景边界内制造外壳、框架或结构件所消耗的铝合金。

- 选定流：铝合金 `d2335464-e0fd-574c-b56f-83fdf8c65b0c`
- 流属性/单位：Mass / kg
- 数量规则：计量发料质量减去经核实退回的可用库存，并按已验收仪器输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_issue`
- 来源：

###### 装入仪器的光学元件（`optical_components_input`）

记录转入仪器的光学元件毛坯或成品光学元件质量，并声明供应状态。

- 选定流：光学元件毛坯 `1b76ef84-1faf-4be8-9f8a-0dbc2b56a030`
- 流属性/单位：Mass / kg
- 数量规则：装入已验收仪器的实测或供应商声明净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_issue`
- 来源：

###### 装入仪器的印制线路板（`printed_wire_board_input`）

记录跨越前景边界的每块印制线路板质量，并按参考型号汇总。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：供应商声明或实测的线路板净质量乘以已验收仪器的安装数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_component_issue`
- 来源：

###### 随仪器转移的锂离子电池（`lithium_ion_battery_input`）

仅在型号交付时配有可充电锂离子电池时纳入；不带该电池的型号在所生产数据集中把本行记为不适用。

- 选定流：锂离子电池 `5554faa4-1ae2-459a-959a-b2180ab3cedc`
- 流属性/单位：Number of items / Item(s)
- 数量规则：清点安装在已验收仪器内或随其包装的电池
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_issue`
- 来源：

###### 前景制造使用的外购电力（`electricity_input`）

记录声明前景边界内加工、装配、环境控制、充电、校准、测试和包装所使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于本过程的电表 kWh 乘以 3.6，并按已验收仪器输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：

###### 随仪器转移的瓦楞纸销售包装箱（`corrugated_board_box_input`）

仅记录随参考产品转移的瓦楞纸箱；可重复使用的进厂周转箱不计入本行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测或供应商声明的纸箱净质量乘以随已验收仪器转移的纸箱数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 台已验收可销售测量仪器
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_issue`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的包装测量仪器（`finished_surveying_instrument`）

仅在完整仪器通过型号特定的校准、功能测试和验收后记录；尚未解决的 Tiangong 产品流 UUID 保持为空。

- 选定流：测距仪、经纬仪、速测仪/全站仪或水准仪
- 流属性/单位：Number of items / Item(s)
- 数量规则：清点已验收的包装仪器
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出与 1 Item(s) 参考数量核对一致
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_instrument_acceptance`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_models` | 多种仪器型号或产品族 | 优先使用 BOM、发料、电表及已验收输出记录，按型号、批次或产线细分。 |  |
| `allocation_shared_operations` | 共用电力和共同作业 | 无法细分时，采用机器时间、测试时间或占用生产时间等有记录的因果驱动因素分配共用负荷；披露驱动因素，并与按件数分配进行敏感性检查。 |  |
| `allocation_rework_scrap` | 返工、不合格品和可回收废料 | 把返工负荷分配给引起返工的已验收输出；任何输出的可回收材料均作为单独废物或共产品交换记录，披露截断或替代约定，不得从投入数量中净扣除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_issue` | instrument_fabrication_assembly_test_packaging | 铝合金、光学元件、印制线路板和电池投入 | BOM、供应商规格、收货和发料记录 | 型号；零件 id；流身份；供应状态；数量；质量类投入的净质量；退回量；已验收输出数 | 用校准称量或供应商净质量数据以及发料/退料记录核对已批准 BOM | kg 或 Item(s) | 每物料批次或生产批次 | 有代表性的连续 12 个月或完整的较短生产期 | 声明的制造场址和型号 | 按原子流汇总净发料量并除以已验收输出数 | 已批准 BOM 版本；供应商规格；秤校准；发料和退料记录 |
| `cp_electricity_metering` | instrument_fabrication_assembly_test_packaging | 外购电力 | 电表和生产时间记录 | 电表 id；期初与期末读数；kWh；过程份额；分配驱动因素；已验收输出数 | 优先使用专用分表，否则用有记录的因果分配核对工厂总表 | kWh | 每月和每次生产期 | 有代表性的连续 12 个月或完整的较短生产期 | 制造场址声明的前景过程 | 汇总归属 kWh，乘以 3.6 MJ/kWh 后除以已验收输出数 | 电表校准或电费账单核对；分配工作表 |
| `cp_packaging_issue` | instrument_fabrication_assembly_test_packaging | 瓦楞纸销售包装箱 | 包装 BOM 和发料记录 | 纸箱规格；发料数量；每箱净质量；退回量；已验收输出数 | 用供应商质量声明或校准称量及发料记录核对包装 BOM | kg | 每包装批次或生产批次 | 有代表性的连续 12 个月或完整的较短生产期 | 声明的包装作业 | 纸箱净发料质量除以已验收输出数 | 包装规格；秤校准；发料记录 |
| `cp_finished_instrument_acceptance` | instrument_fabrication_assembly_test_packaging | 已验收的包装测量仪器 | 校准、功能测试和放行记录 | 序列号；型号；仪器类别；测试程序；结果；验收或不合格状态；验收日期；包装配置 | 清点通过所声明型号验收程序且序列号唯一的单元 | Item(s) | 每台 | 有代表性的连续 12 个月或完整的较短生产期 | 声明的装配和测试作业 | 仅计入已验收单元，并与库存、销售放行和返工记录核对 | 签署或电子测试记录；校准状态；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_net_material_per_item` | 质量类材料和部件投入 | （发料质量 - 经核实退回质量）/ 已验收成品仪器数 | `cp_material_component_issue`; `cp_finished_instrument_acceptance` | 每 Item(s) 参考流的 kg 投入 |  |
| `calculate_battery_items_per_item` | 锂离子电池投入 | 随已验收仪器转移的电池数 / 已验收成品仪器数 | `cp_material_component_issue`; `cp_finished_instrument_acceptance` | 每 Item(s) 参考流的电池 Item(s) |  |
| `calculate_electricity_per_item` | 外购电力 | 归属电表 kWh × 3.6 / 已验收成品仪器数 | `cp_electricity_metering`; `cp_finished_instrument_acceptance` | 每 Item(s) 参考流的 MJ 电力 |  |
| `calculate_box_mass_per_item` | 瓦楞纸箱投入 | 纸箱净发料质量 / 已验收成品仪器数 | `cp_packaging_issue`; `cp_finished_instrument_acceptance` | 每 Item(s) 参考流的 kg 纸箱 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别仪器类别、制造商、型号、测量功能、随附电池/附件、包装和序列号总体；没有披露细分或分配时不得混合型号。 | BOM 版本、型号规格和放行记录 |
| `dq_temporal_coverage` | 前景清单 | 采用有代表性的连续 12 个月；仅在披露日期、季节性和代表性时，才可使用较短但完整的生产期。 | 带日期的电表、发料、生产和验收记录 |
| `dq_mass_energy_traceability` | 材料、部件、包装和电力行 | 保留校准测量、供应商规格或账单证据，并把发料、退料和分配记录与声明场址边界核对。 | 校准证书、供应商声明、账单和核对工作表 |
| `dq_test_traceability` | 成品仪器输出 | 对每个计数输出保留声明的测试程序、校准状态、结果和验收状态；区分局部精度检查与完整验收测试。 | 带序列号的测试与放行记录；受控的测试程序标识和版本 |
| `dq_completeness` | 所有前景交换 | 即使不属于本 PCR 预设行，也应报告对声明研究有重要性的其他型号特定原子材料、部件、耗材、废物或直接排放交换。 | BOM 与清单核对及记录完整性审查 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流和成品输出 | 恰好一台已验收可销售仪器作为归一化参考输出；不合格、返工或不完整单元不得计入。 |  |
| `validate_uuid_identity` | 带 UUID 的交换 | 依据声明的流名称、流类型、属性和单位组核验每个 UUID；确认精确 CPC 48212 仪器流之前，参考产品 UUID 保持为空。 |  |
| `validate_bom_completeness` | 前景清单 | 将所列及额外原子投入与已批准型号 BOM、包装 BOM、发料/退料记录和已验收输出总体核对；披露遗漏交换和截断理由。 |  |
| `validate_electricity` | 外购电力 | 将归属电力与电表或账单总量核对，保留分配驱动因素并核验 3.6 MJ/kWh 转换。 |  |
| `validate_test_evidence` | 成品测量仪器 | 确认存在所声明型号特定验收证据、识别所采用的测试程序，并覆盖产品规格所声明的仪器功能。 |  |
| `validate_range_status` | 重要流 | 清单记录未解决范围证据需求时，不得用外部默认范围代替缺失的前景数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与所声明类别、型号、技术、随附附件、包装、地理和生产期匹配的完整 CPC 48212 测量仪器从摇篮到工厂门数据集 |
| excluded_use | 未明确扩展边界时的单独供应附件、其他测量仪器、使用阶段服务、维护或寿命终结 |
| required_metadata | PCR id；仪器类别；制造商与型号；测量功能；精度或不确定度声明；测试程序；随附电池/附件；净质量；包装；地理；场址；生产期；自制或外购边界；分配；参考产品 UUID 状态 |
| required_quality_disclosure | 记录覆盖率；测量和供应商数据基础；电表分配；型号混合；额外交换；截断；未解决 UUID 和范围证据；偏离必需协议的情况 |
| update_trigger | 产品身份、技术、BOM、电池或包装配置、制造场址、分配、测试程序、来源证据或 Tiangong 流身份发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 正式 CPC 3.0 分类身份与类别边界 |
| `samr-total-station` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=JiO74cSBHwA%3D&mode=p | 已核验中文术语“全站仪” |
| `samr-electronic-theodolite` | standard | https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D82B27D3A7E05397BE0A0AB82A | 已核验中文术语“电子经纬仪”和国家标准目录背景 |
