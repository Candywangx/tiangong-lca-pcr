---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.office-type-sheet-fed-offset-printing-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 办公型单张纸胶印机

## 1. 范围与适用性

本 PCR 适用于采用胶印印刷部件、逐张送入纸张的完整办公型胶印机。该类别限于使用展开状态下一边不超过 22 cm、另一边不超过 36 cm 纸张的机器。边界涵盖制造、装配、验收测试和包装，直至工厂门口。

本 PCR 不包括卷筒纸胶印机、大幅面工业单张纸胶印机、柔版、凹版、凸版、丝网和数字印刷设备、复印机、多功能打印机、独立的印前或印后设备、单独销售的备件、出厂后的运输、使用、维护和报废。尺寸判据采用 HS 子目 8443.12；CPC 45150 及相邻类别的排除项界定分类边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.office-type-sheet-fed-offset-printing-machinery |
| classification_refs | CPC 3.0: 45150; HS 2007: 8443.12 |
| covered_products | 使用展开状态下一边不超过 22 cm、另一边不超过 36 cm 单张纸的完整办公型胶印机 |
| excluded_products | 卷筒纸胶印机；大幅面工业单张纸胶印机；非胶印和数字印刷设备；复印机和多功能打印机；印刷辅助设备；单独供应的零部件 |
| representative_product | 带机械印刷组件和电子控制装置的完整小幅面办公型单张纸胶印机 |
| production_route | 接收外购机械和电子组件；最终装配；加注润滑油；通电功能印刷测试；检验；包装 |
| market_state | 在制造商工厂门口交付的完整、经测试、可销售机器；包装质量与机器净质量分开清单化 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够对逐张送入的纸张进行胶印的完整办公型机器 |
| How much | 一台完整机器 |
| How well | 通过制造商有记录的验收测试，且设计使用展开状态下一边不超过 22 cm、另一边不超过 36 cm 的纸张 |
| How long or cycle | 在工厂门口交付一次；运行使用寿命不在本从摇篮到工厂门 PCR 的边界内 |
| reference_flow_link | 为提供一台合格完整机器所需的实际机器净质量（kg） |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台合格完整机器的实测净质量（kg） |
| 参考产品流 | 办公型单张纸胶印机 `b52484dd-3fcc-4fac-b7ea-d28c0019b431` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商和型号；最大展开纸张尺寸；颜色数或印刷单元数；进纸和收纸配置；额定电压和频率；测试状态；机器净质量；包装质量；制造场址和地域；技术年份 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_machine_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或以其他有记录的方式确定一台合格完整机器的净质量；参考产品质量不包括运输包装和测试耗材。 |
| `input_output_mass` | 材料、组件、耗材、包装和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越前景边界的质量；只有在记录了单件质量且与同一生产批次核对后，才能从件数或采购单位换算。 |
| `electricity_energy` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始读数，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；保留原始计量单位和换算记录。 |
| `packaging_separation` | 参考机器和包装投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告每个包装组件，不得将其质量计入参考机器净质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入外购组件和耗材的接收、最终装配、润滑油加注、功能印刷测试、检验和包装，直至可销售机器在制造工厂门口放行。 | `ghg-protocol-product-standard-2011` |
| `boundary_upstream_inputs` | 外购投入 | 将每项外购组件、耗材、电力供应和包装投入连接至与其所声明地域、技术和产品状态相匹配的上游数据集。 | `ghg-protocol-product-standard-2011` |
| `boundary_exclusions` | 下游及非生产活动 | 排除出厂后的运输、安装、使用、维护、使用期间耗材更换和报废；披露从摇篮到工厂门的局限，不得暗示全生命周期表现。 | `ghg-protocol-product-standard-2011` |
| `boundary_product_identity` | 产品适用性 | 仅接受展开纸张尺寸在 22 cm × 36 cm 限值内的办公型单张纸胶印机；排除大幅面、卷筒纸、非胶印、数字、复印、多功能或辅助设备。 | `un-cpc-3-0-exp-notes-2025`; `wco-hs-2007-844312` |
| `boundary_additional_exchanges` | 场址特定前景清单 | 任何其他实际交换只要跨越声明边界，均以独立的原子流行补充；不得合并材料、燃料、公用工程、废物或排放。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购机械组件、电子控制单元、耗材和包装材料已在最终制造场址接收 |
| starting_condition_role | 最终制造商从摇篮到工厂门前景边界的起始条件；上游负荷仍通过供应商数据集连接 |
| product_classification_scope | CPC 3.0 子类 45150 且满足 HS 8443.12 纸张尺寸判据的完整办公型单张纸胶印机 |
| recursive_input_rule | 若同一类别的完整机器作为投入消耗，应以可见产品投入及其独立上游数据集记录并说明用途；不得并入参考产出 |
| upstream_dataset_requirement | 有产品特定供应商数据时优先使用；否则采用代表性数据集，并披露地域、技术、年份和产品状态 |
| disclosure | 声明供应商与场内组件边界、机器配置、纸张尺寸适用性、测试配方、净质量、包装设计、时间覆盖、分配、排除项和未解决流身份 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| final_assembly_test_pack | 最终装配、功能测试和包装 | `required` |  | 完整机器的前景制造和放行 | 一台合格完整机器及其实测净质量 |

### 过程：最终装配、功能测试和包装（`final_assembly_test_pack`）

#### 输入

##### 产品流

###### 印刷机械组件（`mechanical_subassembly`）

记录一个进入最终装配、含机架、送纸机构、滚筒、胶辊和传动件的外购机械组件。若这些零件分别采购，应以独立原子零件流替换本卡。

- 选定流：办公型单张纸胶印机机械组件
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器中装入的实测质量，扣除可重复使用的运输工装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_mass_records`
- 来源：

###### 电子控制单元（`electronic_control_unit`）

记录装入机器的完整电子控制单元；额定电压、控制功能和供应商作为产品限定信息保留。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器中装入的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_mass_records`
- 来源：

###### 外购电力（`electricity`）

记录最终装配、测试、检验和包装所用电能，包括在覆盖生产期间可归属的空闲和启动用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：每台合格机器可归属的分表电量或按物理驱动因子分配的场址电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 机械润滑油（`lubricating_oil`）

记录加注到机器中或装配与验收测试期间消耗的新润滑油；声明牌号以及残余油是否保留在出厂机器中。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器的领用质量减去退回的未污染质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumable_issue_return`
- 来源：

###### 验收测试用平版油墨（`planographic_printing_ink`）

记录验收测试领用的平版油墨。颜色和配方为前景限定信息；只有实际使用另一种配方时才新增独立流。

- 选定流：平版油墨 `2a6023d7-6d4d-4ac3-9d87-3d940f408e25`
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器的领用质量减去未污染退回质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_consumable_issue_return`
- 来源：

###### 无涂层无木测试纸（`uncoated_woodfree_paper`）

记录验收测试期间送入的干态无涂层无木纸张；声明纸张尺寸、定量、供应商和再生含量。

- 选定流：无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器验收测试期间送入纸张的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_paper_records`
- 来源：

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录装入可销售运输包装的瓦楞纸箱。若未使用纸箱，应以包装设计证据记录为零，不得用另一类包装替代本流。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器运输包装中装入的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台已包装的合格机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_records`
- 来源：

###### 实木运输托盘（`solid_wood_pallet`）

当放行的机器使用该包装组件运输时，记录一个实木托盘；声明尺寸、处理方式、重复使用状态以及木材树种或组别。

- 选定流：实木运输托盘
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器运输包装中装入的实测质量；只有包装记录证明未使用托盘时才为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台已包装的合格机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_records`
- 来源：

###### 聚乙烯拉伸膜（`polyethylene_stretch_film`）

记录缠绕在机器包装外的聚乙烯拉伸膜；声明聚合物牌号、再生含量、厚度和供应商。

- 选定流：聚乙烯拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：一台合格机器运输包装中装入的实测质量；只有包装记录证明未使用薄膜时才为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台已包装的合格机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格完整机器（`reference_product`）

记录在工厂门口放行的经测试可销售机器。流数量为机器净质量；包装保留在独立投入行中。

- 选定流：办公型单张纸胶印机 `b52484dd-3fcc-4fac-b7ea-d28c0019b431`
- 流属性/单位：Mass / kg
- 数量规则：一台合格完整机器的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product_mass`
- 来源：

##### 废物流

###### 功能测试废纸（`waste_paper`）

记录作为废物离开测试过程的废弃纸张。声明污染状况和接收处理路线。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的废弃测试纸张的实测无游离水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：

###### 功能测试废油墨（`waste_ink`）

记录作为废物离开过程、无法使用的测试残余油墨。声明组成、危险特性分类和接收处理路线。

- 选定流：废油墨 `28055998-65ea-4b15-b3cf-7b049ffc6553`
- 流属性/单位：Mass / kg
- 数量规则：离开过程的废油墨实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台合格完整机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用装配、测试、检验或包装作业 | 首先通过过程细分、分表计量、批次记录和产品特定物料清单避免分配。 | `ghg-protocol-product-standard-2011` |
| `allocation_physical_driver` | 剩余共用前景负荷 | 无法细分时，采用有记录的物理因果驱动因子，例如机器特定装配工时、通电测试时间或包装线时间；对相似投入和产出采用相同方法并披露选择。 | `ghg-protocol-product-standard-2011` |
| `allocation_no_waste_credit` | 废纸、废油墨和退回材料 | 分别报告废物数量和处理数据集；除非另行声明的研究方法要求，否则不得扣减避免负荷或回收信用，并应透明报告结果。 | `ghg-protocol-product-standard-2011` |
| `allocation_rework` | 返工或不合格机器 | 将额外材料、能源、测试耗材和废物归于造成这些负荷的生产批次；仅在经核对的合格机器之间分摊批次总量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_input_mass_records` | final_assembly_test_pack | 机械组件和电子控制单元 | 收货、物料清单和领用记录 | 供应商物料编号；批次编号；领用件数；实测单件质量；退回量；合格机器数量 | 将收货和生产领用记录与产品物料清单核对；用经校准秤验证代表性单件质量 | kg | 每个生产批次 | 至少一个代表性生产年或声明的较短生产期 | 声明数据集场址范围内的全部最终制造线 | 汇总净领用质量，仅除以同一核对批次的合格机器数 | 供应商规格；物料清单；秤校准；批次核对 |
| `cp_electricity_records` | final_assembly_test_pack | 外购电力 | 电表和生产时间记录 | 电表起数；电表止数；kWh；产线状态；机器型号；合格数量；停机时间 | 优先分表计量；否则按有记录的物理驱动因子分配场址电量，仅扣除单独计量的边界外负荷 | kWh 和 MJ | 每个生产班次或批次 | 至少一个代表性生产年或声明的较短生产期 | 边界内装配、测试、检验和包装负荷 | 将净 kWh 换算为 MJ，并将核对后的电量除以合格机器数 | 电表编号；校准或公用事业核查；时间戳覆盖；分配记录 |
| `cp_consumable_issue_return` | final_assembly_test_pack | 润滑油和平版油墨 | 库房领用、退回和残余记录 | 物料编号；配方或牌号；领用质量；清洁退回质量；废物质量；批次编号；机器数量 | 对同一生产批次进行称量或采用可追溯的库存领退记录 | kg | 每个生产批次 | 至少一个代表性生产年或声明的较短生产期 | 全部边界内装配和测试工位 | 净消耗等于领用质量减未污染退回质量；核对产品留存和废物去向 | 经校准秤或库存系统；材料规格；领退核对 |
| `cp_test_paper_records` | final_assembly_test_pack | 无涂层无木测试纸 | 测试纸领用和计数记录 | 纸张编号；长度；宽度；定量；张数；领用质量；退回质量；废物质量；机器编号 | 称量纸张，或根据已验证尺寸、定量和张数计算质量；与废物和留存样张核对 | kg | 每次验收测试 | 数据集代表的全部测试 | 全部边界内功能测试工位 | 汇总每台合格机器的送纸量并核对产出 | 纸张规格；秤校准或定量证书；测试日志；质量核对 |
| `cp_packaging_mass_records` | final_assembly_test_pack | 瓦楞纸箱、实木托盘和聚乙烯拉伸膜 | 包装清单、领用和实测质量记录 | 组件编号；材料；件数；单件质量；重复使用状态；包装设计修订版；机器编号 | 按批准的包装清单分别记录各包装组件，并用经校准秤验证单件质量 | kg | 每次包装设计修订及每个生产批次 | 声明生产期内使用的包装设计 | 范围内全部包装工位 | 汇总每台已包装合格机器的各原子包装组件装入质量 | 包装规格；供应商记录；秤校准；设计修订版 |
| `cp_waste_mass_records` | final_assembly_test_pack | 废纸和废油墨 | 废物容器和转移记录 | 废物编号；毛质量；皮重；净质量；污染；危险代码；去向；批次编号 | 分别称量每种废物流，并将共用容器核对至覆盖生产批次 | kg | 每次废物转移，按批次或月核对 | 与所代表生产相同的期间 | 范围内全部装配、测试和包装区域 | 按原子废物流汇总净质量，并用声明的物理驱动因子除以合格机器数 | 秤校准；转移联单；处理接收；核对记录 |
| `cp_reference_product_mass` | final_assembly_test_pack | 合格完整机器 | 最终检验和净质量记录 | 序列号；型号；配置；净质量；包装质量；验收状态；放行日期 | 在安装运输包装前称量完整机器，或采用经审计的配置质量平衡 | kg | 每种配置及物料清单变更时 | 声明期间生产的配置 | 范围内全部最终放行工位 | 使用每种代表性合格配置的实测或经审计净质量 | 秤校准；签字检验记录；物料清单修订版；包装排除核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | electricity | electricity_MJ = net_metered_kWh × 3.6 | 可归于覆盖批次的净计量 kWh | 每台合格完整机器的 MJ |  |
| `calc_consumable_net` | lubricating_oil; planographic_printing_ink | net_consumed_mass = issued_mass - uncontaminated_returned_mass | 领用质量；未污染退回质量；合格机器数量 | 每台合格完整机器消耗的 kg |  |
| `calc_test_paper_mass` | uncoated_woodfree_paper | 无法直接称量时，paper_mass_kg = sheet_count × length_m × width_m × grammage_g_per_m2 / 1000 | 张数；长度；宽度；定量 | 每台合格完整机器送纸的 kg |  |
| `calc_waste_net_mass` | waste_paper; waste_ink | net_waste_mass = gross_container_mass - tare_mass | 毛质量；皮重；流身份；合格机器数量 | 每台合格完整机器的废物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留型号、配置、序列号或批次身份、最大展开纸张尺寸和验收状态；证明产品满足办公型单张纸胶印边界。 | 产品规格；验收记录；CPC 和 HS 边界核查 |
| `dq_temporal` | 所有前景行 | 使用一个代表性生产年的记录，或披露实际较短期间及原因；使分子和合格机器分母的期间一致。 | 带日期的电表、领用记录、生产日志和废物转移记录 |
| `dq_completeness` | 所有前景行 | 核对物料清单、耗材、电力、测试纸、包装、废物和合格产出；将任何遗漏的实际交换补充为独立原子行。 | 经签署的核对表及残差说明 |
| `dq_geography_technology` | 上游数据集 | 在重要时匹配生产地域、供应商路线、材料牌号、电力结构和技术年份；披露代理及改进计划。 | 供应商记录和上游数据集元数据 |
| `dq_measurement` | 质量和电力记录 | 使用经校准仪器或可追溯发票，并保留单位换算、皮重修正和分配计算。 | 校准证书、发票、电表编号和计算工作簿 |
| `dq_significant_processes` | 数据集质量披露 | 报告重要投入和过程的数据来源、质量局限和计划改进。 | 按 GHG Protocol Product Standard 开展的数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity` | 产品适用性 | 确认胶印技术、逐张送纸、办公型市场描述和展开纸张 22 cm × 36 cm 限值；任何判据缺失或矛盾时判定失败。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-exp-notes-2025`; `wco-hs-2007-844312` |
| `validate_reference_flow` | 参考流 | 确认一台合格完整机器、其实际净质量（kg）、准确参考产品 UUID 和每项必需限定信息；确认包装质量未计入机器净质量。 |  |
| `validate_inventory_atomicity` | 过程清单 | 确认每一记录行都是一个物理产品、废物或能源交换，并含方向、类型、属性、单位、数量规则、基准、证据和协议；拒绝集合或选择器行。 |  |
| `validate_uuid_identity` | Tiangong 关联行 | 确认每个存储 UUID 仍为公开 state-code 100，且 baseName、中文 baseName、流类型、分类、属性、单位组、产品状态和前景限定信息匹配；未解决行保持 UUID 为空。 |  |
| `validate_electricity_coverage` | electricity | 确认电表时间戳覆盖装配、测试、检验和包装，且任何共用负荷分配采用声明的物理驱动因子。 | `ghg-protocol-product-standard-2011` |
| `validate_test_mass_balance` | 测试纸和油墨 | 将纸张和油墨投入与废物、出厂机器或测试样张中留存的材料以及任何单独识别的产出核对；对材料残差新增原子产出或基本流行，不得隐藏差额。 |  |
| `validate_period_alignment` | 前景数据集 | 确认所有分子和合格机器分母覆盖相同场址范围和期间，并按声明分配规则处理不合格或返工机器。 |  |
| `validate_range_status` | 重要清单流 | 确认因未建立双来源经验范围而使用前景测量；在审查两项相互独立且边界兼容的原始来源前，保持每项范围证据需求未解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定的从摇篮到工厂门前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 在产品身份、工厂门边界、地域、技术、期间和分配兼容时，用于产品足迹建模、供应商和设计改进以及下游生命周期模型 |
| excluded_use | 全生命周期表现声明；与大幅面或非胶印设备比较；未单独建模时的运行能耗或耗材、安装、维护和报废 |
| required_metadata | 制造商；型号和配置；最大展开纸张尺寸；颜色数或印刷单元数；额定电压和频率；场址和地域；生产期间；机器净质量；包装设计和质量；测试配方；数据来源；分配；未解决身份 |
| required_quality_disclosure | 初级数据占比；电表和秤覆盖；供应商数据代表性；时间、地域和技术局限；代理；排除项；质量平衡残差；范围证据缺口 |
| update_trigger | 物料清单或包装重新设计；生产场址、电力供应、测试配方、分配或供应商路线变化；重要过程变化；UUID 或范围证据解决；获得更具代表性的前景数据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-08 | CPC 45150 身份和层级 |
| `un-cpc-3-0-exp-notes-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版解释性说明，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索日期 2026-09-08 | 产品类别排除项及与其他印刷机械的区分 |
| `wco-hs-2007-844312` | `standard` | 世界海关组织，HS 2007 品目表，子目 8443.12，https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-older-edition/2007/hs2007_net_eng1.pdf，检索日期 2026-09-08 | 办公型单张纸胶印身份及展开纸张 22 cm × 36 cm 判据 |
| `china-mofcom-844312` | `official_guidance` | 中华人民共和国商务部，税则号列 84431200，https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=12750，检索日期 2026-09-08 | 专业中文术语及 22 cm × 36 cm 判据确认 |
| `ghg-protocol-product-standard-2011` | `standard` | 世界资源研究所和世界可持续发展工商理事会，Product Life Cycle Accounting and Reporting Standard，2011，https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf，检索日期 2026-09-08 | 分析单位、参考流、从摇篮到工厂门披露、过程图、初级数据质量、分配层级和报告局限 |
