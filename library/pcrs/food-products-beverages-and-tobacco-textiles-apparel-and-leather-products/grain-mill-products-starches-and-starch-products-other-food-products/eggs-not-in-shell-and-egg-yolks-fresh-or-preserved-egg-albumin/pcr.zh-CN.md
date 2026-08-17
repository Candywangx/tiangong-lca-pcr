---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.eggs-not-in-shell-and-egg-yolks-fresh-or-preserved-egg-albumin
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷藏巴氏杀菌液态全蛋

## 1. 范围与适用性

本 PCR 指导一种刻意收窄的产品形态之前景数据包构建：无配方、冷藏、巴氏杀菌液态全鸡蛋，蛋黄与蛋白保持天然全蛋比例，以食品级散装容器灌装，在加工厂冷库门交付。

本 PCR 覆盖带壳蛋接收、可选蛋壳清洗、破蛋、检验、过滤、全蛋混合或均质、热巴氏杀菌、快速冷却、散装灌装、冷藏、原位清洗（CIP）以及前景废物和废水处理。参考产品不冷冻、不干燥、不熟制、不加糖、不加盐、不做常温稳定化、不分离也不复配。

单独蛋黄、单独蛋白、富蛋黄混合物、蛋白混合物、冷冻蛋液、蛋粉、熟蛋、化学保藏产品、高压处理及热超声路线均排除。数据集不得把任何上述路线与所选液态全蛋路线平均。使用实质不同产品形态或杀菌路线的设施必须另建明确的产品特定数据集并接受适用性审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.eggs-not-in-shell-and-egg-yolks-fresh-or-preserved-egg-albumin` |
| classification_refs | CPC 3.0 `23993`, `Eggs, not in shell, and egg yolks, fresh or preserved; egg albumin` |
| covered_products | 无配方、冷藏、巴氏杀菌液态全鸡蛋，蛋黄与蛋白保持天然全蛋比例 |
| excluded_products | 单独蛋黄；单独蛋白；富蛋黄或富蛋白混合物；加盐、加糖、稳定化、发酵、熟制、冷冻、干燥或常温稳定产品；非热杀菌路线 |
| representative_product | 冷藏巴氏杀菌液态全鸡蛋，不添加盐、糖、防腐剂、水、额外蛋黄或蛋白 |
| production_route | 带壳蛋接收与破蛋；检验与过滤；全蛋混合或均质；经验证热巴氏杀菌；快速冷却；散装灌装；冷藏 |
| market_state | 液态、已巴氏杀菌、散装灌装、门点温度不高于 4 °C、加工厂冷库门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 冷藏巴氏杀菌液态全鸡蛋 |
| How much | 1 kg 净产品 |
| How well | 无配方；天然全蛋蛋黄—蛋白比例；经验证热巴氏杀菌；无可见蛋壳或异物；门点产品温度不高于 4 °C |
| How long or cycle | 一个生产批次直至冷库门；冷藏持续时间以小时声明 |
| reference_flow_link | 下表参考数量与产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Eggs, not in shell, and egg yolks, fresh or preserved, egg albumin `8ee52550-935f-4209-b758-c2d060bba326` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=chicken; product_form=liquid_whole_egg; formulation=unformulated; lethality_route=thermal_pasteurization; preservation_state=refrigerated_not_frozen; gate=processor_cold_store; product_temperature_c; storage_duration_h; packaging_route=ldpe_lined_reusable_stainless_steel_bulk_tote; thermal_supply_route; refrigeration_refrigerant=R717_ammonia |

全部必需限定信息必须在数据集元数据或等效机器可读字段中声明。天工流身份覆盖更宽的 CPC 子类；上述限定信息把数据集收窄为本 PCR 管辖的单一产品形态。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按液态全蛋净质量归一化，不含散装周转容器和内衬。 |
| `whole_egg_identity` | 原料、过滤后、巴氏杀菌后及最终蛋液 | 质量及配方记录 | kg | 蛋黄与蛋白保持天然全蛋比例；不得合并单独蛋黄或蛋白生产记录。 |
| `pasteurization_schedule` | 热巴氏杀菌 | 温度与最短停留时间 | °C and min | 记录经验证的时间—温度程序和分流证据。对固形物低于 24% 的无配方全蛋，60 °C、3.5 min 是官方基线；替代程序须有书面验证和管辖机关认可。 |
| `cold_chain_temperature` | 巴氏杀菌后冷却与储存 | 温度与持续时间 | °C and h | 记录连续或批次关联温度历史；门点产品须不高于 4 °C。 |
| `electricity_measurement` | 每张电力卡 | Energy | kWh | 按单元操作使用分表电量；共享电表只能按有据的运行时间与额定负荷或经验证质量吞吐规则分配。 |
| `thermal_energy_measurement` | 外购蒸汽、热水或现场天然气路线 | 能量或载能体数量 | MJ, kg steam, m3 hot water, or kg fuel | 保留载能体原始数量、适用时的温度/压力、燃料低位热值及换算公式。 |
| `water_measurement` | 蛋壳清洗、冷却、CIP 与废水 | Volume | m3 | 分开进水、循环水、回收水和排水；不得把总循环量记为净取水。 |
| `refrigerant_measurement` | R717 氨系统 | Mass | kg | 使用充注、采购、补加、回收和处置记录；按制冷剂质量平衡计算损失。 |
| `packaging_measurement` | LDPE 内衬与可重复使用不锈钢周转容器 | 质量与件次 | kg and item-use | 分别记录每批内衬质量及周转容器身份、皮重、容量、周转次数和重复使用分配。 |
| `pollutant_measurement` | 水体和空气基本流 | Mass | kg | 每种命名物质分别由实测浓度与排水量，或有据的载能体特定因子计算。 |

## 5. 系统边界

前景边界始于合格带壳蛋及公用工程/材料投入跨越加工厂门，终于所声明散装周转容器中的冷藏巴氏杀菌液态全蛋在加工厂冷库门交付。上游带壳蛋生产、发电、外购蒸汽生产、天然气供应、供水、化学品制造及包装制造作为上游数据集连接，不在本前景数据包中重建。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景过程图 | 纳入接收/破蛋、过滤/混合、热巴氏杀菌/快速冷却、散装灌装/冷藏及 CIP/废水处理。 | `codex-cxc-15-1976`, `usda-fsis-egg-products`, `beitia-et-al-2024` |
| `boundary_raw_treated_separation` | 设施及清单范围 | 原料带壳蛋和未处理蛋液操作须在物理与记录上同巴氏杀菌后产品、包装和成品冷库分开。 | `codex-cxc-15-1976`, `cfia-egg-preventive-controls` |
| `boundary_product_form_gate` | 全部数据集 | 只纳入无配方、热巴氏杀菌、冷藏液态全蛋；拒绝同蛋黄、蛋白、冷冻、干燥、熟制、稳定化或非热路线的任何平均。 | `usda-fsis-egg-products`, `cfia-egg-preventive-controls` |
| `boundary_thermal_supply_gate` | 巴氏杀菌与 CIP 供热 | 每个报告期选择外购蒸汽或现场天然气供热。两者均使用时须按批次分别计量；不得替换为加权通用热载体。 | `jrc-fdm-bref-2019` |
| `boundary_refrigeration_gate` | 冷却与冷藏 | 代表路线为 R717 氨系统。其他制冷剂不在本路线内，使用前须新增命名明确的原子投入和排放卡。 | `ipcc-2019-refrigeration` |
| `boundary_packaging_gate` | 散装灌装 | 使用所声明的 LDPE 内衬可重复使用不锈钢散装周转容器路线；消费纸盒、HDPE 桶、盒中袋、罐车和无菌常温包装不纳入本数据集。 | `beitia-et-al-2024` |
| `boundary_wastewater_gate` | 废水输出 | 选择一条废水废物流送场外处理，或现场处理后分别计量直接入水基本流。同一废水质量不得两者并报。 | `us-epa-egg-processing-waste-1971` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | accepted_shell_egg_batch_at_processor_gate |
| starting_condition_role | upstream_product_input_and_foreground_batch_identity |
| product_classification_scope | current CPC 3.0 subclass `23993`, narrowed to unformulated refrigerated thermally pasteurized liquid whole chicken egg |
| recursive_input_rule | purchased untreated liquid whole egg in the same CPC subclass must be recorded as an upstream input dataset with treatment_status=untreated and must not be represented as the finished reference product |
| upstream_dataset_requirement | supplier-specific shell-egg dataset or disclosed proxy with species, production system, geography, date, accepted mass, reject mass, and allocation status |
| disclosure | disclose shell-egg source, whole-egg formulation, pasteurization schedule, cooling record, thermal supply route, R717 charge and loss, packaging route, cold-store duration, coproduct fate, wastewater route, and every provisional estimate |

## 6. 过程清单结构

清单协议：`atomic_flows:v1`。每张卡只代表一个命名流。禁止 energy、materials、chemicals、fuels、refrigerants、packaging、wastes 或 emissions 等集合占位。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| shell_egg_receipt_and_breaking | 带壳蛋接收与破蛋 | required | `always` | foreground_raw_material_conversion | accepted_shell_egg_mass |
| filtration_and_whole_egg_blending | 过滤与全蛋混合 | required | `always` | foreground_conditioning | filtered_liquid_whole_egg_mass |
| thermal_pasteurization_and_rapid_cooling | 热巴氏杀菌与快速冷却 | required | `always` | foreground_lethality_and_cooling | pasteurized_cooled_liquid_whole_egg_mass |
| bulk_filling_and_refrigerated_storage | 散装灌装与冷藏 | required | `always` | foreground_packaging_and_gate_release | reference_product_mass |
| cip_and_wastewater_management | CIP 与废水管理 | required | `always` | foreground_sanitation_and_residual_management | reference_product_mass |

### 过程：带壳蛋接收与破蛋（`shell_egg_receipt_and_breaking`）

#### 输入

##### 产品流

###### 合格带壳蛋（`accepted_shell_eggs`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `shell_eggs`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 带壳蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_accepted_mass_at_receipt`
- Amount rule: 按供应商批次计量、扣除接收拒收后的合格带壳蛋质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_scale_certificate; supplier_delivery_record; receiving_batch_reconciliation`
- Sources: `codex-cxc-15-1976`, `beitia-et-al-2024`
- Range: Published pilot shell-egg input benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.13
  - Upper: 1.13
  - Unit: kg/kg reference product
  - Basis: shell eggs entering processing per kg pasteurized packed liquid whole egg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 接收与破蛋用电（`receipt_breaking_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 电力
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_receipt_breaking_electricity`
- Amount rule: 计量输送、检验、清洗机、干燥机、破蛋机、泵及控制系统用电
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; equipment_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional unit-operation electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screening range pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 饮用级蛋壳清洗水（`shell_wash_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `potable_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 饮用水
- Flow property / unit: Volume / m3
- Measurement basis: `net_shell_wash_water_withdrawal`
- Amount rule: 仅当前景设施进行蛋壳清洗时计量用水
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `water_meter_calibration; potable_water_certificate; batch_wash_log`
- Sources: `codex-cxc-15-1976`, `beitia-et-al-2024`
- Range: Published pilot shell-washing water benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 0.03
  - Unit: m3/kg reference product
  - Basis: water used for egg loading, washing, and drying per kg product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 蛋壳清洗热水（`shell_wash_hot_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `hot_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 热水
- Flow property / unit: Volume and temperature / m3 and °C
- Measurement basis: `net_hot_water_volume_and_inlet_outlet_temperature`
- Amount rule: 蛋壳清洗使用独立供应热水回路时计量热水服务
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `flowmeter_calibration; temperature_sensor_calibration; wash_cycle_log`
- Sources: `codex-cxc-15-1976`

###### 次氯酸钠蛋壳清洗消毒剂（`shell_wash_sodium_hypochlorite`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `sodium_hypochlorite`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 次氯酸钠溶液
- Flow property / unit: Mass / kg solution and kg active chlorine
- Measurement basis: `solution_mass_and_active_chlorine_fraction`
- Amount rule: 仅蛋壳清洗使用次氯酸钠时计量投料
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; sanitation_batch_record`
- Sources: `codex-cxc-15-1976`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未处理液态全蛋（`untreated_liquid_whole_egg`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `untreated_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: 未处理液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_after_breaking_and_inspection`
- Amount rule: 计量转入过滤工序的液态全蛋质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; transfer_batch_record; shell_to_liquid_mass_balance`
- Sources: `usda-fsis-egg-products`, `codex-cxc-15-1976`

###### 回收蛋壳共产品（`recovered_eggshell_coproduct`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `eggshell_coproduct`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: 回收蛋壳材料
- Flow property / unit: Mass / kg wet or dry basis declared
- Measurement basis: `separately_weighed_saleable_eggshell_mass`
- Amount rule: 仅蛋壳材料符合书面产品规范并移交有益利用时计量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per shell-egg breaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; product_specification; consignee_transfer_record`
- Sources: `us-epa-egg-processing-waste-1971`

##### 废物流

###### 废蛋壳（`eggshell_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `eggshell_waste`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 废蛋壳
- Flow property / unit: Mass / kg wet or dry basis declared
- Measurement basis: `weighed_eggshell_waste_by_fate`
- Amount rule: 仅蛋壳被废弃时计量；同一质量与回收蛋壳共产品互斥
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; waste_manifest; mass_balance`
- Sources: `us-epa-egg-processing-waste-1971`, `beitia-et-al-2024`
- Range: Provisional eggshell and membrane mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.08
  - Upper: 0.25
  - Unit: kg/kg reference product
  - Basis: broad shell and membrane mass screen after breaking
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 拒收带壳蛋（`rejected_shell_eggs`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `rejected_shell_eggs`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 拒收带壳蛋
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_reject_mass_by_reason_and_fate`
- Amount rule: 计量破损、渗漏、脏污、腐败或其他不适用、在破蛋前剔除的蛋
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `reject_log; calibrated_scale_record; disposal_or_recovery_manifest`
- Sources: `codex-cxc-15-1976`

###### 蛋壳清洗废水（`shell_wash_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `shell_wash_wastewater`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 蛋壳清洗废水
- Flow property / unit: Volume / m3
- Measurement basis: `measured_wastewater_volume_to_declared_treatment_route`
- Amount rule: 分开排放时单独计量，不同 CIP 废水合并
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `discharge_flowmeter_calibration; composite_sample_chain_of_custody; treatment_transfer_record`
- Sources: `us-epa-egg-processing-waste-1971`

##### 基本流

### 过程：过滤与全蛋混合（`filtration_and_whole_egg_blending`）

#### 输入

##### 产品流

###### 未处理液态全蛋投入（`untreated_liquid_whole_egg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `untreated_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 未处理液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_transfer_mass_into_filtration`
- Amount rule: 计量匹配破蛋批次的转入质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per filtration batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `tank_load_cell_record; batch_linkage; transfer_reconciliation`
- Sources: `usda-fsis-egg-products`

###### 过滤与混合用电（`filtration_blending_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 电力
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_filtration_blending_electricity`
- Amount rule: 计量过滤器、泵、搅拌器及适用时均质机用电
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; equipment_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional unit-operation electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screening range pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 过滤混合液态全蛋（`filtered_blended_liquid_whole_egg`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `filtered_blended_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: 过滤混合液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_after_filtration_and_blending`
- Amount rule: 计量无添加配料、放行至巴氏杀菌的批次质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; filtration_release_record; formulation_zero_addition_check`
- Sources: `usda-fsis-egg-products`, `cfia-egg-preventive-controls`

##### 废物流

###### 系带与过滤残渣（`chalazae_and_filter_residue`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `chalazae_and_filter_residue`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 系带与过滤残渣
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_wet_residue_mass_by_fate`
- Amount rule: 计量检验与过滤移除的残渣
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; residue_container_log; waste_manifest`
- Sources: `beitia-et-al-2024`

##### 基本流

### 过程：热巴氏杀菌与快速冷却（`thermal_pasteurization_and_rapid_cooling`）

#### 输入

##### 产品流

###### 过滤液态全蛋投入（`filtered_liquid_whole_egg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `filtered_blended_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 过滤混合液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_into_pasteurizer`
- Amount rule: 计量匹配批次的杀菌机进料质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per pasteurization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `tank_load_cell_record; batch_linkage; pasteurizer_feed_totalizer`
- Sources: `cfia-egg-preventive-controls`

###### 巴氏杀菌与冷却用电（`pasteurization_cooling_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 电力
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_pasteurizer_pump_heat_exchanger_and_chiller_electricity`
- Amount rule: 计量产品泵、控制、换热、制冷及 R717 压缩机用电并分配至匹配批次
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; compressor_and_pasteurizer_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Conventional thermal-route total processing energy benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.36
  - Unit: kWh/kg reference product
  - Basis: upper comparison screen against a published 100 kg/h gate-to-gate thermal scenario; do not use as a default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 巴氏杀菌外购蒸汽（`pasteurization_purchased_steam`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `steam`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 外购蒸汽
- Flow property / unit: Mass and enthalpy / kg and MJ
- Measurement basis: `metered_steam_mass_pressure_and_condensate_return`
- Amount rule: 仅 thermal_supply_route=purchased_steam 时计量；同一热负荷与天然气供热互斥
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `steam_meter_calibration; pressure_temperature_log; supplier_invoice; condensate_record`
- Sources: `jrc-fdm-bref-2019`

###### 现场巴氏杀菌供热天然气（`pasteurization_natural_gas`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `natural_gas`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 天然气
- Flow property / unit: Fuel mass or volume and net energy / kg or m3 and MJ
- Measurement basis: `metered_fuel_quantity_and_lower_heating_value`
- Amount rule: 仅 thermal_supply_route=onsite_natural_gas 时计量；同一热负荷与外购蒸汽互斥
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `custody_transfer_meter; fuel_invoice; lower_heating_value_certificate; boiler_runtime_log`
- Sources: `ipcc-2006-stationary-combustion`

###### 换热冷却水（`pasteurization_cooling_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `cooling_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 冷却水
- Flow property / unit: Volume / m3
- Measurement basis: `net_makeup_water_not_gross_recirculation`
- Amount rule: 计量闭式或直流水冷却回路净补水
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `makeup_water_meter_calibration; cooling_loop_log; blowdown_record`
- Sources: `beitia-et-al-2024`
- Range: Published pilot cooling-water benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.01
  - Unit: m3/kg reference product
  - Basis: cooling water per kg product in the published thermal scenario
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### R717 氨制冷剂补加（`r717_ammonia_makeup`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `R717_ammonia`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: R717 氨制冷剂
- Flow property / unit: Mass / kg
- Measurement basis: `refrigerant_purchase_and_charge_mass_balance`
- Amount rule: 计算报告期内分配至冷却和冷藏的 R717 补加量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: `refrigerant_purchase_invoice; service_log; cylinder_scale_calibration; opening_closing_charge_reconciliation`
- Sources: `ipcc-2019-refrigeration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 巴氏杀菌并快速冷却的液态全蛋（`pasteurized_cooled_liquid_whole_egg`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `pasteurized_cooled_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: 巴氏杀菌并快速冷却的液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_released_after_validated_time_temperature_and_cooling`
- Amount rule: 仅巴氏杀菌和冷却记录合格后计量放行批次质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pasteurization_and_cold_chain_records`
- Quality evidence: `continuous_temperature_chart; legal_hold_time_test; flow_diversion_test; release_authorization; calibrated_outlet_mass_totalizer`
- Sources: `codex-cxc-15-1976`, `cfia-egg-preventive-controls`

##### 废物流

###### 杀菌机启动与分流废蛋液（`pasteurizer_diverted_product_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `diverted_liquid_whole_egg_waste`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 分流液态全蛋废物
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_or_totalized_diverted_product_mass_by_fate`
- Amount rule: 计量启动、停机、低温或未放行产品并按返工或废弃分开
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `flow_diversion_log; mass_totalizer; rework_or_waste_manifest`
- Sources: `cfia-egg-preventive-controls`

##### 基本流

###### 天然气燃烧化石二氧化碳（`natural_gas_fossil_carbon_dioxide_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `carbon_dioxide_fossil`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 化石二氧化碳排入空气
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_co2_factor`
- Amount rule: 仅现场天然气燃烧时计算；选择外购蒸汽时不得添加
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; lower_heating_value_certificate; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### 天然气燃烧甲烷（`natural_gas_methane_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `methane`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 甲烷排入空气
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_ch4_factor`
- Amount rule: 由天然气能量和有据锅炉因子单独计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; boiler_technology_record; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### 天然气燃烧氧化亚氮（`natural_gas_nitrous_oxide_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `nitrous_oxide`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 氧化亚氮排入空气
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_n2o_factor`
- Amount rule: 由天然气能量和有据锅炉因子单独计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; boiler_technology_record; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### R717 氨泄漏至空气（`r717_ammonia_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `R717_ammonia`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 氨排入空气
- Flow property / unit: Mass / kg
- Measurement basis: `refrigerant_mass_balance_loss`
- Amount rule: 由充注、采购、回收、转移和期末库存计算 R717 损失，重大事故另记
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: `service_log; cylinder_scale_record; leak_detection_record; annual_charge_reconciliation`
- Sources: `ipcc-2019-refrigeration`

### 过程：散装灌装与冷藏（`bulk_filling_and_refrigerated_storage`）

#### 输入

##### 产品流

###### 巴氏杀菌冷却液态全蛋投入（`pasteurized_cooled_liquid_whole_egg_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `pasteurized_cooled_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 巴氏杀菌冷却液态全蛋
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_into_filling`
- Amount rule: 计量匹配批次转入灌装的质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per filling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; batch_linkage; transfer_reconciliation`
- Sources: `codex-cxc-15-1976`

###### 灌装与冷藏用电（`filling_cold_storage_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 电力
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_filling_and_cold_store_electricity`
- Amount rule: 计量灌装机、泵、控制、冷库风机及声明储存时段内分配的 R717 压缩用电
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; cold_store_submeter; storage_duration_and_occupancy_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional cold-store electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screen dependent on storage duration and cold-store utilization
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE 散装周转容器内衬（`ldpe_bulk_tote_liner`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `low_density_polyethylene_liner`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 低密度聚乙烯内衬
- Flow property / unit: Mass / kg
- Measurement basis: `issued_liner_count_times_verified_tare_mass`
- Amount rule: 由内衬领用数及供应商或实测皮重计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `supplier_specification; packaging_issue_log; sampled_tare_mass_record`
- Sources: `beitia-et-al-2024`
- Range: Published pilot LDPE packaging benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.02
  - Unit: kg/kg reference product
  - Basis: LDPE packaging mass per kg packed pasteurized liquid whole egg
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 可重复使用不锈钢散装周转容器服务（`reusable_stainless_steel_bulk_tote`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `reusable_stainless_steel_bulk_tote_service`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 可重复使用食品级不锈钢散装周转容器服务
- Flow property / unit: Item use / item-use
- Measurement basis: `tote_use_allocated_by_verified_lifetime_trips`
- Amount rule: 每个灌装周转容器记一次使用，以有据寿命周转次数分配制造负荷；不得每次计入完整容器质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `asset_register; tote_capacity_and_tare_record; trip_counter; retirement_record`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏巴氏杀菌液态全蛋参考产品（`reference_product`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `refrigerated_pasteurized_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Eggs, not in shell, and egg yolks, fresh or preserved, egg albumin `8ee52550-935f-4209-b758-c2d060bba326`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Measurement basis: `net_filled_product_mass_excluding_liner_and_tote`
- Amount rule: 灌装质量核对与冷链放行后的固定参考数量
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_filler_or_scale; net_content_record; pasteurization_release; cold_store_temperature_record`
- Amount: 1 kg

##### 废物流

###### 灌装与储存蛋液损失（`filling_storage_product_loss`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `liquid_whole_egg_product_loss`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 液态全蛋产品损失
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_or_mass_balance_loss_by_fate`
- Amount rule: 按去向计量溢洒、设备滞留、灌装不合格和冷库过期产品
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `spill_log; reject_record; inventory_reconciliation; waste_manifest`
- Sources: `us-epa-egg-processing-waste-1971`
- Range: Historical loss QA screen before waste-conservation controls
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg liquid egg output
  - Basis: historical maximum liquid-egg loss to sewer; not a default or allowed loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-egg-processing-waste-1971`

###### LDPE 内衬边角料（`ldpe_liner_scrap`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `low_density_polyethylene_scrap`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 低密度聚乙烯包装边角料
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_unused_damaged_or_discarded_liner_mass`
- Amount rule: 按回收、再利用或处置去向计量 LDPE 边角料
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `packaging_inventory_reconciliation; waste_scale_record; recycler_or_disposal_manifest`
- Sources: `beitia-et-al-2024`

##### 基本流

### 过程：CIP 与废水管理（`cip_and_wastewater_management`）

#### 输入

##### 产品流

###### 饮用级 CIP 与终漂水（`cip_potable_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `potable_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 饮用水
- Flow property / unit: Volume / m3
- Measurement basis: `net_cip_and_final_rinse_water_withdrawal`
- Amount rule: 按 CIP 回路和清洗周期计量用水
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_cycle_records`
- Quality evidence: `water_meter_calibration; potable_water_certificate; cip_recipe_log`
- Sources: `cfia-egg-preventive-controls`, `beitia-et-al-2024`
- Range: Published pilot CIP water benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.01
  - Unit: m3/kg reference product
  - Basis: CIP water per kg product in the published pilot model
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### CIP 用电（`cip_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 电力
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_cip_pump_and_heating_electricity`
- Amount rule: 计量 CIP 泵、加药、回收及适用时电加热用电
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; cip_submeter; cycle_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional CIP electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screen pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### CIP 热水（`cip_hot_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `hot_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 热水
- Flow property / unit: Volume and temperature / m3 and °C
- Measurement basis: `net_hot_water_volume_and_inlet_outlet_temperature`
- Amount rule: 按清洗周期计量热水服务
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `flowmeter_calibration; temperature_sensor_calibration; cip_cycle_log`
- Sources: `cfia-egg-preventive-controls`

###### 氢氧化钠 CIP 清洗剂（`cip_sodium_hydroxide`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `sodium_hydroxide`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 氢氧化钠溶液
- Flow property / unit: Mass / kg solution and kg active NaOH
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: 按 CIP 周期计量投加与回流并记录活性浓度
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; cip_recipe_log`
- Sources: `beitia-et-al-2024`
- Range: Published pilot-model sodium hydroxide benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.03
  - Upper: 0.03
  - Unit: kg/kg reference product
  - Basis: sodium hydroxide input in the published pilot CIP model
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 硝酸 CIP 清洗剂（`cip_nitric_acid`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `nitric_acid`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 硝酸溶液
- Flow property / unit: Mass / kg solution and kg active HNO3
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: 按酸洗 CIP 周期计量投加与回流并记录活性浓度
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; cip_recipe_log`
- Sources: `beitia-et-al-2024`
- Range: Published pilot-model nitric acid benchmark
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.01
  - Unit: kg/kg reference product
  - Basis: nitric acid input in the published pilot CIP model
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `beitia-et-al-2024`

###### 过氧乙酸终末消毒剂（`cip_peracetic_acid`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `peracetic_acid`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: 过氧乙酸溶液
- Flow property / unit: Mass / kg solution and kg active peracetic acid
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: 仅终末消毒使用过氧乙酸时计量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; sanitation_release_record`
- Sources: `cfia-egg-preventive-controls`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 合并 CIP 与过程废水（`combined_process_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `egg_processing_wastewater`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 蛋品加工废水
- Flow property / unit: Volume / m3
- Measurement basis: `measured_wastewater_volume_to_declared_treatment_route`
- Amount rule: 计量送场外处理或现场处理进水的总量，明确路线与产品损失
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `discharge_flowmeter_calibration; composite_sample_chain_of_custody; treatment_invoice_or_operator_log`
- Sources: `us-epa-egg-processing-waste-1971`, `beitia-et-al-2024`
- Range: Historical wastewater-volume QA screen before in-plant conservation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.0075
  - Unit: m3/kg liquid egg output
  - Basis: historical wastewater volume before waste-conservation modifications; not a default or allowed discharge
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-egg-processing-waste-1971`

###### 废水处理污泥（`wastewater_treatment_sludge`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `wastewater_treatment_sludge`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: 废水处理污泥
- Flow property / unit: Mass / kg wet and dry solids basis
- Measurement basis: `weighed_sludge_mass_and_dry_solids_fraction`
- Amount rule: 仅现场处理产生污泥时计量，并记录去向和含水率
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; dry_solids_test; waste_manifest`
- Sources: `us-epa-egg-processing-waste-1971`

##### 基本流

以下直接入水卡仅在现场处理后直接排放时有条件启用。废水作为废物流移交场外时不得使用。

###### 五日生化需氧量入水（`bod5_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `biochemical_oxygen_demand_5_day`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 生化需氧量（5-day）入水
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_bod5_concentration_times_direct_discharge_volume`
- Amount rule: 由认可实验室处理后混合样与直接排水量计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### 化学需氧量入水（`cod_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `chemical_oxygen_demand`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 化学需氧量入水
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_cod_concentration_times_direct_discharge_volume`
- Amount rule: 由认可实验室处理后混合样与直接排水量计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### 总氮入水（`total_nitrogen_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `total_nitrogen`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 总氮入水
- Flow property / unit: Mass / kg N
- Measurement basis: `post_treatment_total_n_concentration_times_direct_discharge_volume`
- Amount rule: 由认可实验室处理后混合样与直接排水量计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### 总磷入水（`total_phosphorus_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `total_phosphorus`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 总磷入水
- Flow property / unit: Mass / kg P
- Measurement basis: `post_treatment_total_p_concentration_times_direct_discharge_volume`
- Amount rule: 由认可实验室处理后混合样与直接排水量计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### 总悬浮固体入水（`total_suspended_solids_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: `total_suspended_solids`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: 总悬浮固体入水
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_tss_concentration_times_direct_discharge_volume`
- Amount rule: 由认可实验室处理后混合样与直接排水量计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_batch` | 所有单元操作 | 分配前，按实测批次、生产线、运行时间和质量吞吐量拆分公用工程、清洗循环、损失与包装。 | `jrc-fdm-bref-2019` |
| `allocation_no_product_form_average` | 产品输出 | 不得把全蛋/蛋黄/蛋白/冷冻/干燥联合生产批次分配为本参考产品；各批次与数据集必须分开。 | `cfia-egg-preventive-controls` |
| `allocation_eggshell_route` | 蛋壳输出 | 除非单独称量的输出符合产品规格且有记录完备的接收方，否则按废物处理。作为共产品时，使用同期净收入进行经济分配，并披露质量分配敏感性。 | `us-epa-egg-processing-waste-1971` |
| `allocation_rework` | 分流或不合格液态蛋 | 可追溯且合格的返工料回到原始批次；否则作为接收批次的单独实测投入并披露转移。废物不得记作返工料。 | `cfia-egg-preventive-controls` |
| `allocation_reusable_tote` | 不锈钢周转容器服务 | 按核实的寿命周转次数或件次分配容器制造与报废；清洗公用工程分配给实际清洗循环。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

本表机器字段值与语言无关，双语版本必须原样保留。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_product_mass_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | raw_intermediate_and_final_product_mass | `batch_mass_record` | `batch_id; supplier_lot; product_state; gross_mass; tare_mass; net_mass; timestamp; scale_id; disposition` | `calibrated_scale_tank_load_cell_or_mass_totalizer` | `kg` | `each_batch_and_transfer` | `complete_reporting_period` | `foreground_facility_and_declared_gate` | `reconcile_each_transfer_then_normalize_to_reference_product_mass` | `calibration_certificate; signed_batch_record; mass_balance` |
| `cp_electricity_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage; cip_and_wastewater_management | unit_operation_electricity | `meter_and_runtime_record` | `meter_id; opening_kwh; closing_kwh; timestamp; process_id; runtime_h; rated_kw; allocation_basis; production_mass_kg` | `revenue_meter_submeter_or_validated_runtime_allocation` | `kWh` | `continuous_or_each_batch` | `complete_reporting_period` | `foreground_facility` | `submeter_first_else_runtime_times_rated_load_then_normalize` | `utility_invoice; meter_calibration; runtime_log; allocation_worksheet` |
| `cp_water_and_wastewater_records` | shell_egg_receipt_and_breaking; thermal_pasteurization_and_rapid_cooling; cip_and_wastewater_management | water_intake_recirculation_wastewater_and_direct_discharge | `meter_and_composite_sample_record` | `meter_id; intake_m3; recirculated_m3; makeup_m3; discharge_m3; route; sample_id; bod5_mg_l; cod_mg_l; total_n_mg_l; total_p_mg_l; tss_mg_l; timestamp` | `calibrated_flowmeter_and_accredited_composite_sampling` | `m3; mg/L` | `daily_and_each_sampling_event` | `complete_reporting_period` | `foreground_facility_and_discharge_point` | `reconcile_net_withdrawal_and_discharge_then_calculate_each_pollutant_mass` | `meter_calibration; chain_of_custody; accredited_lab_report; permit_record` |
| `cp_thermal_utility_records` | shell_egg_receipt_and_breaking; thermal_pasteurization_and_rapid_cooling; cip_and_wastewater_management | steam_and_hot_water | `utility_meter_record` | `route; meter_id; carrier_quantity; unit; pressure; inlet_temperature_c; outlet_temperature_c; condensate_return; timestamp; process_id; production_mass_kg` | `steam_meter_flowmeter_and_temperature_pressure_log` | `kg; m3; MJ; °C` | `continuous_or_each_batch` | `complete_reporting_period` | `foreground_facility` | `calculate_net_thermal_energy_then_normalize_without_route_averaging` | `meter_calibration; sensor_calibration; supplier_invoice; cycle_log` |
| `cp_fuel_and_combustion_records` | thermal_pasteurization_and_rapid_cooling | natural_gas_and_combustion_emissions | `fuel_meter_and_factor_record` | `fuel_type; quantity; unit; lower_heating_value_mj_unit; boiler_id; technology; timestamp; process_id; co2_factor; ch4_factor; n2o_factor; factor_source` | `custody_transfer_meter_and_documented_factor_calculation` | `kg; m3; MJ; kg_emission` | `continuous_or_each_reporting_period` | `complete_reporting_period` | `foreground_boiler` | `fuel_energy_times_substance_specific_factor_then_normalize` | `fuel_invoice; meter_calibration; heating_value_certificate; boiler_record; factor_citation; calculation_sheet` |
| `cp_refrigerant_records` | thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | r717_charge_makeup_recovery_and_loss | `refrigerant_mass_balance_record` | `refrigerant=R717_ammonia; equipment_id; opening_charge_kg; purchases_kg; additions_kg; recovered_kg; transferred_kg; closing_charge_kg; incident_loss_kg; service_date` | `service_log_cylinder_scale_and_annual_mass_balance` | `kg` | `each_service_event_and_annual_reconciliation` | `complete_reporting_period` | `foreground_refrigeration_system` | `loss=opening_charge+purchases+additions-recovered-transferred-closing_charge` | `purchase_invoice; service_log; scale_calibration; leak_detection_record; reconciliation` |
| `cp_cleaning_chemical_records` | shell_egg_receipt_and_breaking; cip_and_wastewater_management | sodium_hypochlorite_sodium_hydroxide_nitric_acid_and_peracetic_acid | `chemical_issue_and_concentration_record` | `chemical_name; solution_mass_kg; active_fraction; batch_id; dosing_pump_id; cycle_id; return_mass_kg; timestamp; process_id` | `inventory_issue_dosing_meter_and_concentration_test` | `kg_solution; kg_active` | `each_cleaning_cycle` | `complete_reporting_period` | `foreground_sanitation_system` | `calculate_active_mass_by_named_chemical_then_normalize_separately` | `supplier_coa; dosing_calibration; concentration_test; cip_recipe_log` |
| `cp_cip_cycle_records` | cip_and_wastewater_management | cip_water_energy_chemicals_and_wastewater | `cip_cycle_record` | `cycle_id; equipment_id; recipe_id; water_m3; electricity_kwh; thermal_utility_quantity; chemical_name; chemical_mass_kg; wastewater_m3; start_time; end_time; allocated_product_mass_kg` | `validated_cip_controller_meter_issue_log_and_cycle_reconciliation` | `m3; kWh; kg; h` | `each_cip_cycle` | `complete_reporting_period` | `foreground_cip_system` | `reconcile_each_cycle_and_allocate_once_to_linked_production_lots` | `controller_export; meter_calibration; chemical_issue_log; operator_signoff; cycle_mass_balance` |
| `cp_packaging_records` | bulk_filling_and_refrigerated_storage | ldpe_liner_and_reusable_stainless_steel_tote | `packaging_issue_and_asset_record` | `batch_id; liner_count; liner_tare_kg; tote_id; tote_capacity_kg; tote_tare_kg; lifetime_trip_count; current_trip; damaged_scrap_kg; disposition` | `warehouse_issue_log_sampled_tare_and_asset_register` | `kg; item-use` | `each_filling_batch` | `complete_reporting_period` | `filling_area_and_tote_pool` | `liner_mass=count_times_tare; tote_service=one_use_divided_by_verified_lifetime_trips` | `supplier_specification; tare_measurement; issue_log; asset_register; retirement_record` |
| `cp_residue_and_waste_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage; cip_and_wastewater_management | eggshell_reject_residue_product_loss_packaging_scrap_and_sludge | `waste_and_recovery_record` | `batch_id; material_name; wet_mass_kg; dry_mass_kg; moisture_fraction; reason; product_or_waste_status; destination; manifest_id; timestamp` | `segregated_container_weighing_and_manifest_reconciliation` | `kg` | `each_event_or_batch` | `complete_reporting_period` | `foreground_facility_and_first_receiver` | `sum_each_named_material_by_status_and_fate_then_normalize` | `scale_calibration; product_specification_if_coproduct; transfer_record; waste_manifest; mass_balance` |
| `cp_pasteurization_and_cold_chain_records` | thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | time_temperature_flow_diversion_cooling_and_storage | `critical_control_and_release_record` | `batch_id; formulation; total_solids_percent; inlet_temperature_c; legal_temperature_c; holding_time_min; flow_rate; diversion_events; outlet_temperature_c; cooling_end_time; cold_store_temperature_c; storage_duration_h; release_status` | `validated_continuous_recorder_flow_test_and_batch_release_review` | `°C; min; kg/h; h` | `continuous_and_each_batch_release` | `complete_batch_and_storage_to_gate` | `pasteurizer_cooler_and_cold_store` | `accept_only_forward_flow_and_released_mass_meeting_validated_schedule_and_temperature_gate` | `recorder_calibration; holding_time_test; diversion_test; chart_review; release_signature; cold_store_log` |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | 所有清单行 | `normalized_amount = measured_or_calculated_amount / released_reference_product_mass_kg` | `measured_or_calculated_amount; released_reference_product_mass_kg` | `amount_per_1_kg_reference_product` | `mass-balance-identity` |
| `reconcile_shell_to_product_mass` | shell_egg_receipt_and_breaking through bulk_filling_and_refrigerated_storage | `accepted_shell_egg_mass = reference_product_mass + recovered_eggshell_coproduct_mass + eggshell_waste_mass + rejected_or_residue_mass + product_loss_mass + measured_water_or_cleaning_carryover_adjustment` | `all_named_mass_outputs_on_consistent_basis` | `batch_mass_balance_and_unexplained_difference` | `mass-balance-identity` |
| `calculate_pasteurization_acceptance` | thermal_pasteurization_and_rapid_cooling | `accepted_mass = forward_flow_mass where recorded_temperature_c >= validated_minimum_temperature_c and actual_holding_time_min >= validated_minimum_holding_time_min` | `temperature_chart; holding_time_test; flow_rate; diversion_log; formulation` | `released_or_diverted_mass` | `cfia-egg-preventive-controls` |
| `calculate_natural_gas_emissions` | natural-gas combustion cards | `emission_kg = fuel_quantity * lower_heating_value_mj_per_unit / 1000000 * emission_factor_kg_per_tj` calculated separately for CO2, CH4, and N2O | `fuel_quantity; lower_heating_value; substance_specific_factor` | `kg_substance_per_1_kg_reference_product` | `ipcc-2006-stationary-combustion` |
| `calculate_refrigerant_loss` | R717 input and air-emission cards | `r717_loss_kg = opening_charge_kg + purchases_kg + additions_kg - recovered_kg - transferred_kg - closing_charge_kg` | `refrigerant_mass_balance_fields` | `kg_R717_to_air_per_1_kg_reference_product` | `ipcc-2019-refrigeration` |
| `calculate_direct_water_emission` | each direct-to-water elementary flow | `emission_kg = post_treatment_concentration_mg_l * direct_discharge_volume_m3 / 1000` | `substance_specific_concentration_mg_l; direct_discharge_volume_m3` | `kg_substance_per_1_kg_reference_product` | `us-epa-egg-processing-waste-1971` |
| `calculate_ldpe_liner_mass` | LDPE liner input | `liner_mass_kg = liner_count * verified_liner_tare_kg` | `liner_count; verified_liner_tare_kg` | `kg_LDPE_per_1_kg_reference_product` | `mass-balance-identity` |
| `calculate_tote_service` | reusable stainless-steel tote | `allocated_tote_item_use = filled_tote_count / verified_lifetime_trip_count` | `filled_tote_count; verified_lifetime_trip_count` | `item_use_per_1_kg_reference_product` | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | Evidence |
| --- | --- | --- | --- |
| `identity_and_formulation` | 所有数据集 | 声明鸡种、液态全蛋形态、不添加盐/糖/防腐剂/水/蛋黄/蛋白、热处理路线、冷藏状态、边界和 CPC 语境。 | `batch_formulation; product_specification; dataset_metadata` |
| `no_route_averaging` | 所有过程 | 全蛋、蛋黄、蛋白、冷冻、干燥、非热处理、包装、供热和废水路线必须分开；加权通用路线不合规。 | `campaign_schedule; route_selection; allocation_worksheet` |
| `mass_balance` | 每批次 | 在同一质量基准上核对带壳蛋投入、中间体、参考产品、共产品、全部具名废物、返工料和未解释差异。 | `calibrated_mass_records; batch_reconciliation` |
| `critical_control_validity` | 巴氏杀菌与冷却 | 保留配方专属验证日程、校准、保温时间试验、流向分流、冷却和放行记录。 | `critical_control_chart; validation_study; calibration_and_release_records` |
| `utility_separation` | 电力、蒸汽、热水、天然气和冷却水 | 按单元操作和路线分别记录每种载能体，保留原始单位和换算。 | `meters; invoices; runtime_logs; conversion_sheet` |
| `atomic_flow_completeness` | 全部清单 | 每种具体材料、化学品、燃料、制冷剂、废物和基本排放均有独立卡，不得使用集合占位。 | `atomic_flows:v1_audit` |
| `wastewater_route_consistency` | 废水与水体排放 | 同一水量只能报告外送废水或现场直接排放之一；直接排放使用处理后样品。 | `flowmeter; treatment_contract_or_permit; lab_reports` |
| `temporal_representativeness` | 全部记录 | 至少覆盖一个完整生产与清洗循环以及完整报告期；披露季节性或部分时段数据。 | `production_calendar; cip_log; meter_coverage_report` |
| `estimate_disclosure` | 每个 `reasoned_estimate` | 标明该范围为暂定值，并在发布关键使用前用已评审的前景或外部证据替换。 | `review_metadata; uncertainty_register` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须恰为 1 kg 净冷藏巴氏杀菌液态鸡全蛋，UUID 为 `8ee52550-935f-4209-b758-c2d060bba326`，流属性为 Mass，并具备全部必需限定词。 | `tiangong_identity_reference` |
| `validate_scope_exclusions` | 产品与路线元数据 | 若数据集包括或平均独立蛋黄、蛋白、强化混合物、加盐、加糖、冷冻、干燥、熟制、常温稳定或非热处理产品，则失败。 | `usda-fsis-egg-products` |
| `validate_process_map` | 前景清单 | 必须包含全部五个 required 过程 ID，且至少有一个匹配批次经过每个过程。 | `codex-cxc-15-1976`, `beitia-et-al-2024` |
| `validate_pasteurization` | 热巴氏杀菌 | 必须有配方专属、经过验证的时间—温度记录、保温时间证据、分流记录和放行批准；60 °C/3.5 min 基线不得移用于排除的配方。 | `cfia-egg-preventive-controls` |
| `validate_cold_chain` | 冷却与冷藏 | 必须快速完成杀菌后冷却，出厂边界产品温度不高于 4 °C，并声明储存时长。 | `codex-cxc-15-1976`, `eu-reg-853-2004`, `cfia-egg-preventive-controls` |
| `validate_atomic_flows` | 清单卡 | 集合占位即失败；每张卡都必须具有 flow_name、direction、flow_type、measurement_basis、unit、collection_protocol 和 quality_evidence。 | — |
| `validate_uuid_scope` | 清单身份 | 只允许参考产品流带流 UUID；所有非参考流 UUID 字段在分别评审前保持空白。 | `tiangong_identity_reference` |
| `validate_route_gates` | 公用工程、制冷、包装和废水 | 必须选择外购蒸汽或现场天然气供热、R717 制冷、带 LDPE 内衬的可重复使用不锈钢周转容器包装，以及一个不平均的废水路线。 | `cfia-egg-preventive-controls`, `ipcc-2019-refrigeration` |
| `validate_mass_balance` | 批次清单 | 带壳蛋、中间体、产品、共产品、废物、返工料与损失必须有解释完整的质量平衡。 | `mass-balance-identity` |
| `validate_estimates` | 数量范围 | 每个 `reasoned_estimate` 均标记为暂定；若未记录评审接受或更强证据，则发布用途验证失败。 | `beitia-et-al-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可评审为 `secondary_dataset` 或 `background_dataset` 的前景生产数据包 |
| downstream_use | 供需要热巴氏杀菌液态全蛋的冷藏食品制造或餐饮生命周期模型作为配料投入 |
| allowed_use | 处理商冷库门冷藏、无配方添加、热巴氏杀菌液态鸡全蛋，具有完整批次、公用工程、卫生、废物与路线披露 |
| excluded_use | 独立蛋黄或蛋白；强化混合物；加盐、加糖、保藏、冷冻、干燥、熟制、常温稳定或非热处理产品；消费包装或槽车路线；平均互斥路线的数据集 |
| required_metadata | canonical PCR id; CPC 3.0 `23993`; species; formulation; solids content; product state; validated pasteurization schedule; cooling endpoint; cold-store duration; geography; reporting period; thermal supply route; R717 system; packaging route; wastewater route; allocation basis |
| required_quality_disclosure | unresolved unit-group and non-reference UUIDs; meter and sampling coverage; mass-balance difference; rework; estimate use; eggshell status and allocation; energy and water allocation; refrigerant reconciliation; discharge permit and post-treatment sampling |
| update_trigger | Tiangong 参考身份变化、工业液态全蛋前景证据替代暂定范围、官方巴氏杀菌或冷却要求变化，或拟纳入其他产品、包装、供热、制冷或废水路线时修订 |

## 11. 数据来源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-15-1976` | official_guidance | FAO/WHO Codex, Code of Hygienic Practice for Eggs and Egg Products, CXC 15-1976, revised 2007. <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ro/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B15-1976%252FCXC_015e.pdf> (retrieved 2026-08-13) | 清洁蛋验收、破蛋卫生、原料/处理品分隔、经验证的微生物杀灭处理、快速冷却、冷藏、包装和追溯规则 |
| `cfia-egg-preventive-controls` | official_guidance | Canadian Food Inspection Agency, Preventive controls for food: Eggs and processed egg products. <https://inspection.canada.ca/en/food-safety-industry/preventive-control-plans/controls-food/eggs-and-processes-egg-products> (retrieved 2026-08-13) | 全蛋时间—温度基线、冷却限值、杀菌机记录、流向分流、保温时间验证、CIP 分隔和关键控制证据 |
| `eu-reg-853-2004` | standard | Regulation (EC) No 853/2004, Annex III, Section X, Egg Products. <https://eur-lex.europa.eu/eli/reg/2004/853/oj> (retrieved 2026-08-13) | 清洗/破蛋/其他操作分隔、快速加工、加工前液态蛋储存、加工后冷却至不高于 4 °C，以及蛋壳颗粒规格语境 |
| `usda-fsis-egg-products` | official_guidance | USDA Food Safety and Inspection Service, Egg Products and Food Safety. <https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/egg-products-and-food-safety> (retrieved 2026-08-13) | 产品形态区分和过程拆分：破蛋、过滤、混合、巴氏杀菌、冷却、包装与冷藏处理 |
| `beitia-et-al-2024` | literature | Beitia, E. et al. (2024), Life cycle assessment of the manothermosonication of liquid whole egg: A comparative evaluation with conventional thermal preservation, LWT 213, 116953. <https://doi.org/10.1016/j.lwt.2024.116953> | 常规热处理路线过程图；1 kg 功能单位；带壳蛋、水、包装、CIP 化学品与能耗基准；冷藏重要性；证据局限 |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre (2019), Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627. <https://publications.jrc.ec.europa.eu/repository/handle/JRC118627> (retrieved 2026-08-13) | 资源计量、过程一体化水与能源管理、清洗、废水和路线专属 BAT 语境 |
| `us-epa-egg-processing-waste-1971` | dataset | U.S. Environmental Protection Agency, Egg Breaking and Processing Waste Control and Treatment, Water Pollution Control Research Series 12060 FQF 11/71. <https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101RJ45.TXT> (retrieved 2026-08-13) | 蛋壳和产品损失去向、废水量、BOD/COD/氮/磷/悬浮固体表征、节废质控筛查和处理路线证据 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC (2006), Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion. <https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf> (retrieved 2026-08-13) | 现场天然气燃烧按载能体与技术区分的 CO2、CH4 和 N2O 计算方法 |
| `ipcc-2019-refrigeration` | method_factor | IPCC (2019), Refinement to the 2006 Guidelines, Volume 3, Chapter 7: Emissions of Fluorinated Substitutes for Ozone Depleting Substances. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/3_Volume3/19R_V3_Ch07_ODS_Substitutes.pdf> (retrieved 2026-08-13) | 适配所声明 R717 系统的制冷剂清单字段、质量平衡法、维修/使用损失核算和记录要求 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | 批次核对、归一化、内衬计算、容器服务分配和转移一致性 |
