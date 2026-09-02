---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.nutmeg-mace-cardamoms-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 肉豆蔻、肉豆蔻衣与豆蔻，加工

## 1. 范围与适用性

本 PCR 实例仅覆盖一条刻意收窄的路线：只用 *Myristica fragrans* Houtt. 干燥去壳种子生产食品级肉豆蔻粉。前景边界始于干燥去壳整粒肉豆蔻仁入厂，止于经蒸汽减菌、研磨和筛分后，以带 LDPE 内衬的 25 kg 多层牛皮纸袋包装并交付至加工厂门口的肉豆蔻粉。

路线锁定为 `species=Myristica_fragrans_Houtt; product_form=ground_powdered_seed; microbial_reduction=saturated_steam_continuous; post_treatment_drying=electric_hot_air; package=25_kg_kraft_sack_with_ldpe_liner`。不得平均肉豆蔻、肉豆蔻衣和豆蔻，也不得平均整粒、碎粒和粉末形态。肉豆蔻衣、豆蔻、几内亚胡椒、作为产品出售的整粒或碎粒肉豆蔻、混合香辛料、精油、油树脂、辐照、熏蒸、未减菌粉末、零售包装以及下游配送或使用均排除。

清单编制遵循 `atomic_flows:v1`：每一种能源载体、公用工程、材料、包装材料、清洗剂、废水、固体废物和直接排放均须建立独立流卡。禁止使用 energy、materials、chemicals、fuels、refrigerants、packaging、wastes 或 emissions 等集合占位。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.nutmeg-mace-cardamoms-processed |
| classification_refs | CPC 3.0: 23923, Nutmeg, mace, cardamoms, processed (exact) |
| covered_products | 仅由干燥去壳 *Myristica fragrans* Houtt. 种子制得，并采用锁定的饱和蒸汽、电复干和研磨路线生产的研磨/粉末种子产品 |
| excluded_products | 肉豆蔻衣；豆蔻；几内亚胡椒；作为产品出售的整粒或碎粒肉豆蔻；物种或形态混合平均；混合香辛料；提取物；精油；油树脂；辐照、熏蒸或未减菌路线；零售包装 |
| representative_product | 带 LDPE 内衬的 25 kg 多层牛皮纸袋装食品级 *Myristica fragrans* 肉豆蔻粉 |
| production_route | 干式入厂检验与清理；整粒连续饱和蒸汽减菌；电热风复干与环境温度冷却；锤磨与细筛；金属控制；25 kg 内衬袋包装；常规干式卫生清理 |
| market_state | 加工厂门口的研磨/粉末状、低水分、蒸汽减菌食品配料 |
| route_lock | species=Myristica_fragrans_Houtt; product_form=ground_powdered_seed; microbial_reduction=saturated_steam_continuous; post_treatment_drying=electric_hot_air; package=25_kg_kraft_sack_with_ldpe_liner |
| inventory_contract | atomic_flows:v1 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在加工厂门口供应由 *Myristica fragrans* Houtt. 制得的食品级肉豆蔻粉 |
| How much | 以所声明 25 kg 内衬袋交付的 1 kg 净粉末 |
| How well | 仅为研磨/粉末种子；水分 <= 8.0% w/w；干基总灰分 <= 3.0%；干基酸不溶性灰分 <= 0.5%；干基水不溶性灰分 <= 1.5%；干基挥发油 >= 5.0 ml/100 g；无活虫；声明粒度合同规格 |
| How long or cycle | 一个放行生产批次；仅包括至工厂门口发运前的厂内存放 |
| reference_flow_link | rf_ground_nutmeg_powder |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Nutmeg, mace, cardamoms, processed `55268cb7-f7b1-4d34-9c53-cc3f158b52d8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | `species=Myristica_fragrans_Houtt`; `product_form=ground_powdered_seed`; `microbial_reduction=saturated_steam_continuous`; `post_treatment_drying=electric_hot_air`; `package=25_kg_kraft_sack_with_ldpe_liner`; `moisture_wet_basis_percent`; `particle_size_spec`; `kernel_origin`; `production_geography`; `reference_period` |

该天工参考流的分类范围较宽。只有完整声明上述所有必需限定词时方可用于本 PCR。缺少 `species` 或 `product_form`，或对肉豆蔻、肉豆蔻衣、豆蔻、整粒、碎粒或粉末进行加权平均的数据集均不合格。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考肉豆蔻粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 交付态净粉末；保留实测水分，不得静默将参考产出转换为干物质。 |
| `dry_matter_conversion` | 肉豆蔻仁、中间物和粉末质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | `dry_mass_kg = as_delivered_mass_kg * (1 - moisture_percent_wet_basis / 100)`；保留原始质量和水分结果。 |
| `steam_mass` | 外购饱和蒸汽 | Mass | kg | 以经冷凝水回流修正的质量记录外购蒸汽；不得将蒸汽与电力或工艺水合并。 |
| `electricity_energy` | 电力 | Energy | kWh | 按电表或发票记录 kWh；共享电表仅可依据有记录的设备运行时间和额定负载因子分配。 |
| `packaging_mass` | 牛皮纸和 LDPE 内衬 | Mass | kg | 分别记录牛皮纸和 LDPE；依据经核实的袋数和组件质量计算领用材料。 |
| `emission_mass` | PM10、水蒸气和乙醇直接排放 | Mass | kg | 控制后逐项报告每种具名物质；浓度到质量的计算须保留流量、时长、检出限和控制状态。 |

## 5. 系统边界

前景边界始于报告设施接收带有上游数据集的干燥去壳整粒 *Myristica fragrans* 仁，止于同一设施门口放行合格包装肉豆蔻粉。纳入操作包括入厂检验、干式分选和异物控制、连续饱和蒸汽处理、电复干和环境温度冷却、锤磨、筛分、粉尘收集、金属控制、内衬袋包装、常规干式卫生清理、条件性受控湿式清洗、外运前厂内废水收集、外运前废物处理和直接排放。

农业、采收、果实开裂、肉豆蔻衣分离、种子初次干燥、破壳、仁入厂前上游运输、下游配送、食品使用及包装报废均在前景边界之外；LCA 纳入时需要独立数据集。锁定的前景路线不使用制冷，也无燃料燃烧。采用制冷冷却、燃料燃烧干燥器、现场产汽、辐照、熏蒸或其他微生物减除路线的设施不得将该路线平均并入本数据集。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 接收干燥去壳整粒 *Myristica fragrans* Houtt. 肉豆蔻仁，并声明供应商、产地、批次、水分、状态和上游数据集 |
| starting_condition_role | 上游切入点；接收后锁定路线的全部操作均为前景 |
| product_classification_scope | 本语义路线下的研磨/粉末肉豆蔻种子；CPC 3.0 代码 23923 仅为分类背景，不授权混合物种或形态 |
| recursive_input_rule | 厂内合格粉末返工保持为内部回路；外购加工肉豆蔻粉须作为带有独立上游数据集的单独投入，不得递归替代干燥肉豆蔻仁投入 |
| upstream_dataset_requirement | 干燥去壳肉豆蔻仁、电力、外购饱和蒸汽、饮用水、牛皮纸、LDPE 和乙醇消毒剂均需可追溯数据集；披露代理的地理、技术、时效和遗漏操作 |
| disclosure | 声明精确 route_lock、所有纳入过程、电表覆盖率、水分基准、粒度合同、包装清单、卫生事件、废物去向、直接排放、截断和代理 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | 产品和过程范围 | 仅纳入锁定的 *Myristica fragrans* 粉末路线；拒绝与肉豆蔻衣、豆蔻、整粒/碎粒肉豆蔻或其他减菌路线聚合。 | `codex-cxs-352-2022` |
| `boundary_process_completeness` | 前景操作 | 纳入接收/清理、蒸汽处理、电复干/冷却、研磨/筛分、包装和干式卫生清理；仅在满足其门禁并有记录时纳入受控湿式清洗。 | `codex-cxs-352-2022`; `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`; `fda-spice-risk-profile-2017` |
| `boundary_atomic_inventory` | 清单交换 | 应用 `atomic_flows:v1`；每一种载体、材料、清洗剂、废物和直接排放均独立成行，集合占位无效。 |  |
| `boundary_post_lethality_hygiene` | 蒸汽处理后 | 保持处理后干燥、研磨和包装区域干燥且隔离；记录控制措施和纠正卫生措施造成的材料或公用工程后果。 | `codex-cxc-75-2015` |
| `boundary_factory_gate` | 参考产品 | 边界止于加工厂门口声明内衬袋中的合格净粉末；排除下游运输、使用和报废。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_cleaning` | 肉豆蔻仁接收、检验与干式清理 | required | 始终纳入 | 处理前去除受损肉豆蔻仁和物理异物 | kg 清洁整粒肉豆蔻仁 |
| `steam_decontamination` | 连续饱和蒸汽微生物减除 | required | route_lock 始终纳入 | 对整粒肉豆蔻仁进行经验证的病原体减除 | kg 蒸汽处理肉豆蔻仁 |
| `electric_drying_cooling` | 电热风复干与环境温度冷却 | required | 蒸汽处理后始终纳入 | 研磨前恢复安全水分和温度 | kg 干燥冷却肉豆蔻仁 |
| `grinding_sieving` | 锤磨、细筛与金属控制 | required | 始终纳入 | 达到合同粒度并控制粉尘/金属 | kg 合格散装粉末 |
| `packing` | 25 kg 内衬袋灌装与放行 | required | 始终纳入 | 包装并放行参考产品 | 1 kg 净包装参考粉末 |
| `dry_sanitation` | 常规真空干式卫生清理 | required | 将有记录的常规卫生清理分配给所有代表批次 | 不引入水地去除粉末残留 | kg 得到卫生支持的合格包装粉末 |
| `controlled_wet_cleaning` | 受控湿式清洗与乙醇消毒 | conditional | 仅对可归因于代表生产且有记录的污染/纠正清洗事件纳入；不得将无事件期与事件路线平均 | 完全干燥并验证后方可重启的纠正卫生清理 | 清洗事件 |

### 过程：肉豆蔻仁接收、检验与干式清理（`receiving_cleaning`）

#### 输入

##### 产品流

###### 干燥去壳肉豆蔻仁（`dried_nutmeg_kernels_input`）

仅记录 *Myristica fragrans* 干燥去壳整粒肉豆蔻仁；禁止肉豆蔻衣和豆蔻。

- Flow name: Dried shelled nutmeg kernels, Myristica fragrans
- Selected flow: Dried shelled nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 实测肉豆蔻仁净投入，并修正期初和期末库存
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `scale_calibration; supplier_lot_certificate; moisture_test; inventory_reconciliation`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`
- Range: 暂定肉豆蔻仁投入 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 1.0
  - Upper: 1.25
  - Unit: kg/kg packed reference powder
  - Basis: 代表性前景批次形成前的宽泛质量平衡筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 接收与清理电力（`receiving_cleaning_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量进料输送机、风选机、分选机、磁选和除尘所用电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 清洁整粒肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `meter_calibration; equipment_runtime_log; allocation_workpaper`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: 暂定接收电力 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.001
  - Upper: 1.0
  - Unit: kWh/kg cleaned whole kernels
  - Basis: 分项计量证据形成前的宽泛筛查范围
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁整粒肉豆蔻仁（`cleaned_nutmeg_kernels_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Cleaned whole nutmeg kernels, Myristica fragrans
- Selected flow: Cleaned whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 库存修正后放行至蒸汽处理的实测肉豆蔻仁质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个接收清理批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `scale_calibration; inspection_release; batch_reconciliation`
- Sources: `codex-cxc-75-2015`

##### 废物流

###### 拒收肉豆蔻仁（`rejected_nutmeg_kernel_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Rejected nutmeg kernels
- Selected flow: Rejected nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量霉变、虫害或其他不合格肉豆蔻仁，并送往声明的废物去向
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 清洁整粒肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `waste_scale_record; rejection_log; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: 暂定有机拒收物 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg dried kernel input
  - Basis: 供应商特定拒收记录形成前的宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 分离的植物碎屑（`plant_debris_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Plant debris separated from nutmeg kernels
- Selected flow: Plant debris separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量茎、叶和其他植物碎屑，并送往声明的废物去向
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 干燥肉豆蔻仁投入
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### 分离的石块（`stone_foreign_matter_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Stones separated from nutmeg kernels
- Selected flow: Stones separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量石块并送往声明的废物去向
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 干燥肉豆蔻仁投入
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### 分离的金属异物（`metal_foreign_matter_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Metal foreign matter separated from nutmeg kernels
- Selected flow: Metal foreign matter separated from nutmeg kernels
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量黑色和有色金属碎片并送往声明的废物去向
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 干燥肉豆蔻仁投入
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `foreign_matter_log; magnet_cleaning_log; metal_detector_reject_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`

###### 捕集的进料肉豆蔻粉尘（`receiving_captured_nutmeg_dust_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Captured nutmeg dust from receiving and cleaning
- Selected flow: Captured nutmeg dust from receiving and cleaning
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量风选和过滤器去除并作为废物转移的粉尘
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 清洁整粒肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `filter_change_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`

##### 基本流

###### 接收与清理释放的 PM10（`receiving_pm10_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Particulate matter, aerodynamic diameter < 10 um, to air
- Selected flow: Particulate matter, aerodynamic diameter < 10 um, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3`，采用有记录的控制后数值
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 清洁整粒肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_receiving_cleaning`
- Quality evidence: `sampling_report; airflow_calibration; dust_collector_log; detection_limit`
- Sources: `fao-herb-spice-quality-assurance`
- Range: 暂定 PM10 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg cleaned whole kernels
  - Basis: 排气或工作场所排气测量形成前的刻意宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

### 过程：连续饱和蒸汽微生物减除（`steam_decontamination`）

#### 输入

##### 产品流

###### 进入蒸汽处理的清洁整粒肉豆蔻仁（`cleaned_kernels_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Cleaned whole nutmeg kernels, Myristica fragrans
- Selected flow: Cleaned whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 装入连续蒸汽系统的实测质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个蒸汽处理批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `scale_calibration; campaign_log; lot_linkage`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

###### 外购饱和蒸汽（`purchased_saturated_steam_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Saturated steam, purchased, at facility
- Selected flow: Saturated steam, purchased, at facility
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_steam_mass`
- Unit: kg
- Amount rule: 计量送入处理室的蒸汽，并在适用时修正冷凝水回流
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 蒸汽处理肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `steam_meter_calibration; pressure_temperature_log; condensate_return_record`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: 暂定蒸汽使用 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kg/kg steam-treated kernels
  - Basis: 未检索到设备特定公用工程强度，故采用宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 蒸汽处理电力（`steam_treatment_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量输送机、真空、控制、风机和辅助设备的电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 蒸汽处理肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `meter_calibration; equipment_runtime_log; allocation_workpaper`
- Sources: `fda-spice-risk-profile-2017`
- Range: 暂定蒸汽系统电力 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.001
  - Upper: 2.0
  - Unit: kWh/kg steam-treated kernels
  - Basis: 分项计量证据形成前的宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 蒸汽处理湿肉豆蔻仁（`steam_treated_kernels_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Selected flow: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 处理后实测质量，并将水分、时间和温度关联至批次记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每个蒸汽处理批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `validated_process_record; time_temperature_log; moisture_test; batch_reconciliation`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

##### 废物流

###### 蒸汽处理冷凝废水（`steam_condensate_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Steam-treatment condensate wastewater
- Selected flow: Steam-treatment condensate wastewater
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `wastewater_mass`
- Unit: kg
- Amount rule: 计量或按质量平衡计算收集后排入下水道或送往厂外处理的冷凝水；不得与卫生清洗废水合并
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 蒸汽处理肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_steam_decontamination`
- Quality evidence: `drain_meter_record; steam_balance; transfer_receipt`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: 暂定冷凝水 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg steam-treated kernels
  - Basis: 计量证据形成前的宽泛水平衡筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：电热风复干与环境温度冷却（`electric_drying_cooling`）

#### 输入

##### 产品流

###### 进入干燥器的蒸汽处理湿肉豆蔻仁（`wet_kernels_dryer_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Selected flow: Steam-treated wet whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 装入干燥器的实测湿肉豆蔻仁质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个干燥批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `scale_calibration; moisture_test; lot_linkage`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`

###### 电干燥器与风机电力（`electric_dryer_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量电加热器、循环风机、排风机、输送机和冷却风机所用电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 干燥冷却肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `meter_calibration; dryer_runtime_log; temperature_log`
- Sources: `codex-cxc-75-2015`; `fda-spice-risk-profile-2017`
- Range: 暂定电干燥 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.01
  - Upper: 10.0
  - Unit: kWh/kg dried cooled kernels
  - Basis: 干燥器特定计量形成前的宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥冷却肉豆蔻仁（`dried_cooled_kernels_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Selected flow: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 水分和温度验收后放行的实测质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个干燥批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `scale_calibration; moisture_test; release_record; batch_reconciliation`
- Sources: `codex-cxs-352-2022`; `codex-cxc-75-2015`

##### 废物流

##### 基本流

###### 复干产生的水蒸气（`dryer_water_vapour_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Water, vapour, to air
- Selected flow: Water, vapour, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `water_mass_balance`
- Unit: kg
- Amount rule: `water_vapour_kg = wet_kernel_water_kg - dried_kernel_water_kg - collected_liquid_water_kg`
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 干燥冷却肉豆蔻仁
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_electric_drying_cooling`
- Quality evidence: `paired_moisture_tests; calibrated_scales; water_balance`
- Sources: `mass-balance-identity`
- Range: 物理水平衡校验范围
  - Range role: 允许范围（`allowed_range`）
  - Lower: 0
  - Upper: 5.0
  - Unit: kg/kg dried cooled kernels
  - Basis: 蒸发量非负且受记录的进水和质量平衡约束
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `mass-balance-identity`

### 过程：锤磨、细筛与金属控制（`grinding_sieving`）

#### 输入

##### 产品流

###### 进入锤磨机的干燥肉豆蔻仁（`dried_kernels_mill_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Selected flow: Dried and cooled whole nutmeg kernels, Myristica fragrans
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 库存修正后装入研磨的实测肉豆蔻仁质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个研磨批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `scale_calibration; lot_linkage; moisture_test`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`

###### 研磨、筛分与除尘电力（`grinding_sieving_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量锤磨机、筛机、输送机、磁选、金属探测器和除尘器所用电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 合格散装粉末
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `meter_calibration; equipment_runtime_log; production_log`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: 暂定研磨电力 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kWh/kg conforming loose powder
  - Basis: 研磨机特定计量形成前的宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格散装肉豆蔻粉（`loose_ground_nutmeg_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Ground nutmeg powder, Myristica fragrans, loose
- Selected flow: Ground nutmeg powder, Myristica fragrans, loose
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 通过所声明筛网和金属控制放行标准的实测粉末
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个研磨批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `scale_calibration; sieve_test; metal_detector_check; laboratory_release`
- Sources: `codex-cxs-352-2022`; `fao-herb-spice-quality-assurance`

##### 废物流

###### 不合格肉豆蔻粉（`offspec_ground_nutmeg_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Off-spec ground nutmeg powder
- Selected flow: Off-spec ground nutmeg powder
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量送往废物处置的不合格粉末；有记录的厂内返工从净废物中排除并保留为内部回路
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 合格散装粉末
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `nonconformance_record; waste_scale_record; destination_receipt; rework_log`
- Sources: `codex-cxs-352-2022`
- Range: 暂定不合格粉末 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg conforming loose powder
  - Basis: 前景批次形成前的宽泛损失筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 捕集的研磨肉豆蔻粉尘（`milling_captured_nutmeg_dust_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Captured nutmeg dust from milling and sieving
- Selected flow: Captured nutmeg dust from milling and sieving
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量过滤器去除并转移为废物的粉尘；不得与不合格粉末合并
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 合格散装粉末
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `filter_change_log; waste_scale_record; destination_receipt`
- Sources: `fao-herb-spice-quality-assurance`; `codex-cxc-75-2015`

##### 基本流

###### 研磨与筛分释放的 PM10（`milling_pm10_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Particulate matter, aerodynamic diameter < 10 um, to air
- Selected flow: Particulate matter, aerodynamic diameter < 10 um, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3`，采用有记录的控制后数值
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 合格散装粉末
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_grinding_sieving`
- Quality evidence: `sampling_report; airflow_calibration; dust_collector_log; detection_limit`
- Sources: `fao-herb-spice-quality-assurance`
- Range: 暂定研磨 PM10 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg conforming loose powder
  - Basis: 排气测量形成前的刻意宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

### 过程：25 kg 内衬袋灌装与放行（`packing`）

#### 输入

##### 产品流

###### 进入包装的散装肉豆蔻粉（`loose_powder_packing_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Ground nutmeg powder, Myristica fragrans, loose
- Selected flow: Ground nutmeg powder, Myristica fragrans, loose
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 库存修正后发往包装的实测散装粉末
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个包装批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packing`
- Quality evidence: `scale_calibration; lot_linkage; inventory_reconciliation`
- Sources: `codex-cxs-352-2022`

###### 25 kg 袋用多层牛皮纸（`kraft_paper_packaging_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Kraft paper, multiwall sack grade
- Selected flow: Kraft paper, multiwall sack grade
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `packaging_component_mass`
- Unit: kg
- Amount rule: `kraft_paper_kg = conforming_sack_count * verified_kraft_mass_per_sack_kg + attributable_kraft_scrap_kg`
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_packing`
- Quality evidence: `packaging_bom; component_mass_check; issue_record; scrap_reconciliation`
- Sources: `codex-cxc-75-2015`
- Range: 暂定牛皮纸 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.001
  - Upper: 0.10
  - Unit: kg/kg packed reference powder
  - Basis: 经核实包装清单形成前的宽泛筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 25 kg 袋用 LDPE 内衬（`ldpe_liner_packaging_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Low-density polyethylene film, food-contact liner grade
- Selected flow: Low-density polyethylene film, food-contact liner grade
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `packaging_component_mass`
- Unit: kg
- Amount rule: `ldpe_kg = conforming_liner_count * verified_ldpe_mass_per_liner_kg + attributable_ldpe_scrap_kg`
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_packing`
- Quality evidence: `packaging_bom; component_mass_check; issue_record; scrap_reconciliation`
- Sources: `codex-cxc-75-2015`
- Range: 暂定 LDPE 内衬 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.0001
  - Upper: 0.05
  - Unit: kg/kg packed reference powder
  - Basis: 经核实包装清单形成前的宽泛筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 包装电力（`packing_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量灌装机、检重秤、封口机、输送机和金属探测器所用电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packing`
- Quality evidence: `meter_calibration; equipment_runtime_log; production_log`
- Sources: `codex-cxc-75-2015`
- Range: 暂定包装电力 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0.0001
  - Upper: 1.0
  - Unit: kWh/kg packed reference powder
  - Basis: 包装线计量形成前的宽泛筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装肉豆蔻粉参考产品（`reference_ground_nutmeg_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Nutmeg, mace, cardamoms, processed
- Selected flow: Nutmeg, mace, cardamoms, processed `55268cb7-f7b1-4d34-9c53-cc3f158b52d8`
- Flow property / unit: Mass / kg
- Flow UUID: 55268cb7-f7b1-4d34-9c53-cc3f158b52d8
- Direction: `outputs`
- Flow type: `product`
- Measurement basis: `net_reference_mass`
- Unit: kg
- Amount rule: 1 kg 净合格包装粉末的固定参考量
- Value mode: 固定值（`fixed_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 身份参考（`identity_reference`）
- Collection protocol: `cp_packing`
- Quality evidence: `state_code_100_uuid_reread; lot_release; net_mass_check; moisture_test; particle_size_test`
- Sources: `codex-cxs-352-2022`

##### 废物流

###### 牛皮纸包装边角料（`kraft_paper_scrap_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Kraft paper packing scrap
- Selected flow: Kraft paper packing scrap
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量送往声明回收或处置去向的牛皮纸边角料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packing`
- Quality evidence: `waste_scale_record; packaging_reconciliation; destination_receipt`
- Sources: `mass-balance-identity`

###### LDPE 内衬包装边角料（`ldpe_liner_scrap_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: LDPE liner packing scrap
- Selected flow: LDPE liner packing scrap
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量送往声明回收或处置去向的 LDPE 边角料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_packing`
- Quality evidence: `waste_scale_record; packaging_reconciliation; destination_receipt`
- Sources: `mass-balance-identity`

##### 基本流

### 过程：常规真空干式卫生清理（`dry_sanitation`）

#### 输入

##### 产品流

###### 干式卫生真空设备电力（`dry_sanitation_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量或按运行时间分配专用工业真空清理电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 由该卫生间隔支持的包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_dry_sanitation`
- Quality evidence: `sanitation_log; equipment_runtime_log; meter_or_rated_load_record`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: 暂定干式卫生电力 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 1.0
  - Unit: kWh/kg packed reference powder
  - Basis: 卫生期间分配证据形成前的宽泛筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 真空收集的肉豆蔻卫生残留物（`dry_sanitation_residue_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Vacuum-collected nutmeg sanitation residue
- Selected flow: Vacuum-collected nutmeg sanitation residue
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `as_delivered_mass`
- Unit: kg
- Amount rule: 称量常规卫生清理去除并送往声明废物去向的干式产品残留和粉尘
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 由该卫生间隔支持的包装参考粉末
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_dry_sanitation`
- Quality evidence: `sanitation_log; waste_scale_record; destination_receipt`
- Sources: `codex-cxc-75-2015`; `fao-herb-spice-quality-assurance`
- Range: 暂定干式卫生残留物 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg packed reference powder
  - Basis: 卫生残留记录形成前的宽泛筛查
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：受控湿式清洗与乙醇消毒（`controlled_wet_cleaning`）

本过程有门禁。仅当存在可归因于代表生产且有记录的污染或纠正清洗事件时纳入。不得以概率加权或与无事件路线平均。

#### 输入

##### 产品流

###### 受控清洗饮用水（`controlled_cleaning_water_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Water, potable, at facility
- Selected flow: Water, potable, at facility
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_water_mass`
- Unit: kg
- Amount rule: 计量受控事件使用的最少水量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个有记录清洗事件，随后仅分配给可归因生产
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `water_meter_record; sanitation_authorization; event_log`
- Sources: `codex-cxc-75-2015`
- Range: 暂定受控用水 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 10000
  - Unit: kg/cleaning event
  - Basis: 设施程序和计量形成前的事件尺度宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 食品接触用乙醇消毒剂（`ethanol_disinfectant_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Ethanol, food-contact disinfectant, active ingredient
- Selected flow: Ethanol, food-contact disinfectant, active ingredient
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `active_ingredient_mass`
- Unit: kg
- Amount rule: 领用消毒液质量乘以实测或证书标示的乙醇活性分数
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个有记录清洗事件，随后仅分配给可归因生产
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `chemical_issue_record; supplier_certificate; formulation_record; event_log`
- Sources: `codex-cxc-75-2015`
- Range: 暂定乙醇 QA 筛查范围
  - Range role: QA 校验（`qa_guardrail`）
  - Lower: 0
  - Upper: 1000
  - Unit: kg active ethanol/cleaning event
  - Basis: 设施程序形成前的事件尺度宽泛筛查
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 受控清洗后干燥电力（`controlled_cleaning_drying_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Electricity, low voltage, at facility
- Selected flow: Electricity, low voltage, at facility
- Flow property / unit: Energy / kWh
- Flow UUID:
- Direction: `inputs`
- Flow type: `product`
- Measurement basis: `net_electricity`
- Unit: kWh
- Amount rule: 计量或按运行时间分配通风和清洗后完全干燥所用电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个有记录清洗事件，随后仅分配给可归因生产
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `meter_or_rated_load_record; drying_verification; restart_authorization`
- Sources: `codex-cxc-75-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 受控清洗废水（`controlled_cleaning_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Controlled-cleaning wastewater containing ethanol residues
- Selected flow: Controlled-cleaning wastewater containing ethanol residues
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `waste`
- Measurement basis: `wastewater_mass`
- Unit: kg
- Amount rule: 计量或按事件水平衡计算转移至下水道或厂外处理的废水
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个有记录清洗事件，随后仅分配给可归因生产
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `drain_meter_record; event_water_balance; transfer_or_discharge_record`
- Sources: `codex-cxc-75-2015`; `mass-balance-identity`

##### 基本流

###### 受控清洗期间排放至空气的乙醇（`controlled_cleaning_ethanol_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- Flow name: Ethanol, to air
- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Flow UUID:
- Direction: `outputs`
- Flow type: `elementary`
- Measurement basis: `emission_mass_after_control`
- Unit: kg
- Amount rule: `ethanol_to_air_kg = ethanol_input_kg - ethanol_in_wastewater_kg - ethanol_in_collected_residue_kg`
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个有记录清洗事件，随后仅分配给可归因生产
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_controlled_wet_cleaning`
- Quality evidence: `chemical_issue_record; wastewater_test_or_balance; event_mass_balance`
- Sources: `mass-balance-identity`

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_directly` | 共享公用工程和卫生清理 | 优先采用分项计量和过程细分。共享电表仅依据有记录的设备运行时间及额定或实测负载分配。卫生清理仅分配给其记录间隔或纠正事件支持的批次。 | `mass-balance-identity` |
| `allocation_no_coproduct_route` | 锁定前景路线 | 声明路线仅生产一个参考产品和废物；禁止副产品分配。厂内返工为内部回路，不给予独立抵扣或负担。 | `mass-balance-identity` |
| `allocation_waste_destination` | 拒收肉豆蔻仁、异物、粉尘、不合格粉末、包装边角料和废水 | 将每种产出保留为具有实际去向的废物流。不得采用避免负担抵扣。若某产出作为产品出售，数据集不再符合 `allocation_no_coproduct_route`，须明确重新编制并评审。 | `mass-balance-identity` |
| `allocation_no_route_average` | 蒸汽、卫生清理与替代技术 | 不得以概率加权、市场平均或其他方式将锁定路线与未处理、辐照、熏蒸、燃料干燥、制冷或无纠正清洗事件路线合并。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

以下协议机器字段为规范字段，在两个语言文件中完全一致。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_cleaning` | `receiving_cleaning` | `all_atomic_cards` | `batch_meter_waste_emission_records` | `lot_id; species; kernel_form; input_mass_kg; input_moisture_percent; output_mass_kg; rejected_kernel_mass_kg; plant_debris_mass_kg; stone_mass_kg; metal_mass_kg; captured_dust_mass_kg; electricity_kwh; pm10_concentration_kg_per_m3; exhaust_volume_m3; inventory_change_kg` | `calibrated_weighing; calibrated_metering; representative_sampling; direct_waste_weighing; substance_specific_emission_measurement` | `kg; kWh; percent_wet_basis; kg_per_m3; m3` | `each_lot_and_meter_interval` | `all_represented_lots_and_operating_modes` | `reporting_facility_receiving_and_cleaning_equipment` | `inventory_correct_each_atomic_flow_then_normalize_to_cleaned_kernel_output_and_reference_product` | `scale_calibration; meter_calibration; sampling_report; lot_traceability; mass_balance; destination_receipt` |
| `cp_steam_decontamination` | `steam_decontamination` | `all_atomic_cards` | `campaign_meter_process_validation_records` | `campaign_id; kernel_input_kg; steam_input_kg; condensate_return_kg; electricity_kwh; treatment_time_s; treatment_temperature_c; pressure_kpa; wet_kernel_output_kg; output_moisture_percent; condensate_wastewater_kg` | `calibrated_weighing; steam_metering; electricity_metering; continuous_time_temperature_logging; wastewater_metering_or_balance` | `kg; kWh; s; degC; kPa; percent_wet_basis` | `each_campaign_and_meter_interval` | `all_represented_treatment_campaigns` | `reporting_facility_continuous_steam_system` | `campaign_reconcile_then_normalize_to_steam_treated_kernel_output_and_reference_product` | `validation_study; sensor_calibration; steam_meter_calibration; time_temperature_record; water_balance; lot_traceability` |
| `cp_electric_drying_cooling` | `electric_drying_cooling` | `all_atomic_cards` | `dryer_batch_meter_laboratory_records` | `dryer_lot_id; wet_kernel_input_kg; input_moisture_percent; electricity_kwh; dryer_time_h; dryer_temperature_c; dried_kernel_output_kg; output_moisture_percent; output_temperature_c; collected_liquid_water_kg` | `calibrated_weighing; electricity_metering; continuous_temperature_logging; validated_moisture_test; water_mass_balance` | `kg; kWh; h; degC; percent_wet_basis` | `each_dryer_lot_and_meter_interval` | `all_represented_dryer_lots` | `reporting_facility_electric_dryer_and_ambient_cooler` | `paired_moisture_mass_balance_then_normalize_to_dried_cooled_kernel_output_and_reference_product` | `scale_calibration; meter_calibration; moisture_method; temperature_log; release_record; water_balance` |
| `cp_grinding_sieving` | `grinding_sieving` | `all_atomic_cards` | `mill_batch_meter_quality_waste_emission_records` | `mill_lot_id; kernel_input_kg; electricity_kwh; sieve_spec; powder_output_kg; offspec_waste_kg; captured_dust_kg; pm10_concentration_kg_per_m3; exhaust_volume_m3; rework_kg; inventory_change_kg` | `calibrated_weighing; electricity_metering; sieve_test; direct_waste_weighing; substance_specific_emission_measurement` | `kg; kWh; kg_per_m3; m3` | `each_mill_lot_and_meter_interval` | `all_represented_milling_lots_and_particle_sizes` | `reporting_facility_mill_sieve_metal_control_and_dust_collector` | `exclude_internal_rework_from_net_exchange_totals_reconcile_atomic_flows_then_normalize_to_conforming_loose_powder` | `scale_calibration; meter_calibration; sieve_test; metal_detector_check; sampling_report; mass_balance` |
| `cp_packing` | `packing` | `all_atomic_cards` | `packing_batch_bom_meter_quality_waste_records` | `packing_lot_id; loose_powder_input_kg; conforming_sack_count; rejected_sack_count; net_powder_output_kg; kraft_mass_per_sack_kg; ldpe_mass_per_liner_kg; kraft_scrap_kg; ldpe_scrap_kg; electricity_kwh; moisture_percent; volatile_oil_ml_per_100g_dry; particle_size_result` | `calibrated_weighing; verified_component_mass; packaging_issue_reconciliation; electricity_metering; validated_laboratory_test` | `kg; count; kWh; percent_wet_basis; ml_per_100g_dry` | `each_packing_lot_and_meter_interval` | `all_represented_packing_lots` | `reporting_facility_25kg_lined_sack_line` | `component_specific_packaging_balance_and_net_product_normalization_to_1kg_reference_product` | `scale_calibration; packaging_bom; component_mass_check; meter_calibration; laboratory_release; lot_traceability` |
| `cp_dry_sanitation` | `dry_sanitation` | `all_atomic_cards` | `sanitation_runtime_waste_records` | `sanitation_event_id; start_time; end_time; supported_lot_ids; vacuum_runtime_h; vacuum_power_kw; electricity_kwh; collected_residue_kg; waste_destination` | `sanitation_log; meter_or_runtime_power_calculation; direct_residue_weighing` | `h; kW; kWh; kg` | `each_sanitation_event` | `all_routine_events_supporting_represented_lots` | `post_treatment_dry_hygiene_area` | `allocate_only_to_supported_lots_by_recorded_output_mass_never_to_unrelated_production` | `sanitation_verification; equipment_record; waste_scale_record; destination_receipt; lot_linkage` |
| `cp_controlled_wet_cleaning` | `controlled_wet_cleaning` | `all_atomic_cards` | `corrective_event_water_chemical_energy_waste_emission_records` | `event_id; trigger; attributable_lot_ids; water_input_kg; disinfectant_solution_kg; ethanol_fraction; electricity_kwh; wastewater_kg; wastewater_ethanol_kg; collected_residue_ethanol_kg; drying_verification; restart_authorization` | `event_authorization; water_metering; chemical_issue_reconciliation; electricity_metering_or_runtime_calculation; wastewater_metering_or_balance; ethanol_mass_balance` | `kg; fraction; kWh` | `each_gated_corrective_event` | `only_documented_events_attributable_to_represented_production` | `controlled_cleaning_area_and_affected_equipment` | `event_specific_atomic_balance_allocate_only_to_attributable_lots_no_probability_weighting` | `corrective_action_record; meter_calibration; supplier_certificate; drying_verification; environmental_result; restart_authorization; event_mass_balance` |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每张清单卡 | `normalized_amount = net_attributable_amount / net_conforming_packed_powder_kg` | `net_attributable_amount; net_conforming_packed_powder_kg` | `amount_per_1kg_reference_product` | `mass-balance-identity` |
| `calc_dry_mass` | 肉豆蔻仁、中间物和粉末 | `dry_mass_kg = as_delivered_mass_kg * (1 - moisture_percent_wet_basis / 100)` | `as_delivered_mass_kg; moisture_percent_wet_basis` | `dry_mass_kg` | `codex-cxs-352-2022`; `mass-balance-identity` |
| `calc_process_mass_balance` | 每个材料过程 | `residual_kg = corrected_inputs_kg - product_outputs_kg - waste_outputs_kg - elementary_mass_outputs_kg - ending_inventory_kg + beginning_inventory_kg` | `atomic_input_output_inventory_records` | `residual_kg; residual_percent` | `mass-balance-identity` |
| `calc_water_vapour` | 电复干 | `water_vapour_kg = wet_kernel_water_kg - dried_kernel_water_kg - collected_liquid_water_kg` | `paired_mass_and_moisture_results; collected_liquid_water_kg` | `dryer_water_vapour_air_kg` | `mass-balance-identity` |
| `calc_pm10` | 接收和研磨排气 | `pm10_kg = measured_concentration_kg_per_m3 * exhaust_volume_m3` | `pm10_concentration_kg_per_m3; exhaust_volume_m3` | `pm10_kg_after_control` |  |
| `calc_packaging_components` | 牛皮纸和 LDPE | `component_input_kg = conforming_component_count * verified_component_mass_kg + attributable_component_scrap_kg` | `component_count; verified_component_mass_kg; component_scrap_kg` | `kraft_paper_input_kg_or_ldpe_input_kg` | `mass-balance-identity` |
| `calc_shared_electricity` | 共享电表 | `allocated_kwh = shared_meter_kwh * equipment_runtime_h * measured_or_rated_load_kw / sum_all_supported_equipment_runtime_load` | `shared_meter_kwh; runtime_h; measured_or_rated_load_kw` | `process_electricity_kwh` |  |
| `calc_ethanol_to_air` | 受控湿式清洗 | `ethanol_to_air_kg = ethanol_input_kg - ethanol_in_wastewater_kg - ethanol_in_collected_residue_kg` | `ethanol_input_kg; ethanol_in_wastewater_kg; ethanol_in_collected_residue_kg` | `controlled_cleaning_ethanol_air_kg` | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | 参考产品和全部材料批次 | 保留精确物种、产品形态、蒸汽路线、电干燥路线和 25 kg 内衬袋身份；任何物种/形态/路线混合数据集均失败。 | `lot_specification; route_map; production_record; packaging_bom` |
| `dq_reference_quality` | 包装粉末 | 保留所声明规格要求的批次关联水分、灰分、挥发油、活虫、粒度和净质量结果。 | `laboratory_report; sampling_plan; certificate_of_analysis; release_record` |
| `dq_measurement` | 质量、蒸汽、电力、水、包装、废物和排放 | 使用经校准或核实的设备；披露缺失的仪表覆盖、分配、检出限和估算。 | `calibration_certificate; meter_map; invoice_reconciliation; sampling_report; calculation_workpaper` |
| `dq_temporal_coverage` | 前景期间 | 覆盖声明期间所有合格与拒收批次、启停、返工、卫生清理、废物转移和库存变化。 | `production_calendar; lot_register; sanitation_log; downtime_log; inventory_reconciliation` |
| `dq_atomic_completeness` | 清单 | 证明每种实际载体/材料/废物/物质均有一张独立卡，并且不存在集合占位交换。 | `atomic_flow_register; purchase_ledger; waste_register; emission_point_register` |
| `dq_mass_balance` | 每个纳入过程 | 在一致水分基准上进行平衡，并在放行前调查重大残差。 | `process_mass_balance; corrective_action_record` |
| `dq_provisional_ranges` | 每个 reasoned_estimate 范围 | 仅作为 QA 评审标志；发布前以代表性前景证据或有引文的评审证据替换，除非方法学评审明确接受。 | `replacement_evidence_or_methodology_review_record` |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 除非参考量为 1 kg、产品 UUID 为 `55268cb7-f7b1-4d34-9c53-cc3f158b52d8`、类型为 Product flow、定量属性为 Mass 且所有必需限定词齐全，否则失败。 | `codex-cxs-352-2022` |
| `validate_species_form_lock` | 产品范围 | species 不是 `Myristica_fragrans_Houtt`、product_form 不是 `ground_powdered_seed`，或清单中平均任何肉豆蔻衣、豆蔻、整粒/碎粒产品或混合物时失败。 | `codex-cxs-352-2022` |
| `validate_route_lock` | 过程图 | 数据集混合或替代未处理、辐照、熏蒸、燃料干燥、制冷冷却或其他微生物减除路线时失败。 | `codex-cxc-75-2015`; `fda-spice-risk-profile-2017` |
| `validate_quality_limits` | 包装粉末 | 水分 > 8.0% w/w、干基总灰分 > 3.0%、干基酸不溶性灰分 > 0.5%、干基水不溶性灰分 > 1.5%、干基挥发油 < 5.0 ml/100 g、每 100 g 活虫 > 0，或缺少必需测试证据时失败。 | `codex-cxs-352-2022` |
| `validate_process_gate` | 受控湿式清洗 | 条件过程无记录的触发原因和可归因批次，或与无事件生产进行概率加权时失败。 | `codex-cxc-75-2015` |
| `validate_atomic_flows` | 每项清单交换 | 出现集合占位，或合并电力/蒸汽/水、包装材料、清洗剂、废物类型或直接排放物质时失败。 |  |
| `validate_uuid_policy` | 清单流身份 | 候选阶段仅允许参考产出带流 UUID；进入评审/发布前须解析其他所有选定流并以 state_code=100 直读复核，且不得改变行语义。 |  |
| `validate_mass_balance` | 每个纳入过程 | 要求在一致水分基准上核对投入/产出/废物/排放/库存，并记录重大残差调查。 | `mass-balance-identity` |
| `validate_steam_control` | 蒸汽减菌 | 要求经验证的产品特定时间/温度/压力制度和完整批次日志；本 PCR 不规定通用致死制度。 | `codex-cxc-75-2015`; `fda-spice-risk-profile-2017` |
| `validate_post_treatment_dryness` | 干燥、冷却、研磨和包装 | 研磨/包装前须验证完全干燥，并保留防止处理后再污染的水分控制记录。 | `codex-cxc-75-2015` |
| `validate_reasoned_estimates` | 暂定范围 | 超出范围仅作为评审标志，而非自动不合格；没有替换证据或明确评审接受时，不得将暂定值作为权威默认值发布。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 加工厂门口 25 kg 内衬袋装蒸汽减菌 *Myristica fragrans* 肉豆蔻粉前景生产数据集 |
| downstream_use | 仅在完成方法学评审、非参考 UUID 解析及适用于地理、技术和期间的证据替换后，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 需要精确物种/product_form/蒸汽/电干燥/包装路线，且质量、地理、时间和边界兼容的 LCA 或产品足迹模型 |
| excluded_use | 肉豆蔻衣；豆蔻；整粒或碎粒肉豆蔻；混合类别平均；未处理、辐照或熏蒸香辛料；燃料干燥或制冷路线；零售包装；将未解析的暂定估算作为权威数据使用 |
| required_metadata | `pcr_id; version; reference_flow_uuid; species; product_form; microbial_reduction; post_treatment_drying; package; kernel_origin; facility_geography; reference_period; moisture_basis; particle_size_spec; steam_validation_id; process_map; meter_coverage; upstream_datasets; sanitation_events; waste_destinations; cutoffs; proxies; review_status` |
| required_quality_disclosure | `foreground_share; lot_coverage; meter_coverage; allocation_workpapers; mass_balance_residuals; laboratory_methods; steam_validation; detection_limits; provisional_ranges_retained; unresolved_uuids; upstream_proxy_mismatch` |
| update_trigger | 物种、产品形态、微生物减除系统、干燥能源载体、研磨/筛网规格、包装组件、卫生清理实践、供应商/产地组合、质量标准、废物去向、直接排放控制、仪表覆盖或实质改变结果的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-352-2022` | standard | FAO and WHO, Codex Alimentarius, CXS 352-2022, Standard for Dried Seeds - Nutmeg, adopted 2022 and amended 2025, https://openknowledge.fao.org/handle/20.500.14283/cd9053en (retrieved 2026-08-13) | *Myristica fragrans* 身份；研磨/粉末样式；去果皮、干燥、分选、破壳、分级、研磨过程背景；水分、灰分、挥发油、虫害和标签要求 |
| `codex-cxc-75-2015` | official_guidance | FAO and WHO, Codex Alimentarius, CXC 75-2015, Code of Hygienic Practice for Low-Moisture Foods, Annex III on Spices and Dried Culinary Herbs, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B75-2015%252FCXC_075e.pdf (retrieved 2026-08-13) | 入厂检验；清理和金属控制；经验证的蒸汽处理及可能的复干；干区控制；常规干式卫生清理；有门禁的受控湿式清洗；防潮内衬包装；可追溯性 |
| `fao-herb-spice-quality-assurance` | handbook | FAO, Quality assurance for small-scale rural food industries, Section 2.4 Herb and spice products, https://www.fao.org/4/v5380e/v5380e09.htm (retrieved 2026-08-13) | 接收检查；水分控制；清理、干燥、锤磨/盘磨、细筛、粉尘捕集、快速气密包装和质量记录 |
| `fda-spice-risk-profile-2017` | official_guidance | U.S. Food and Drug Administration, Risk Profile: Pathogens and Filth in Spices, 2017 update, https://www.fda.gov/files/food/published/Risk-Profile--Pathogens-and-Filth-in-Spices.pdf (retrieved 2026-08-13) | 连续饱和蒸汽过程拆分；所有颗粒充分暴露；时间/温度验证；真空/蒸汽及干燥/冷却公用工程和水分控制影响；通用处理制度的局限 |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to atomic process inputs, products, wastes, named direct releases and inventory change | 归一化；干物质和水蒸气计算；包装与乙醇平衡；过程核对；物理 QA 边界；不抵扣废物处理 |
