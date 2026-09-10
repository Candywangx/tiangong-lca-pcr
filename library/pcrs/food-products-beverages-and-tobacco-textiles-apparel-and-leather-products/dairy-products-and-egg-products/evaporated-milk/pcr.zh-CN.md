---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.evaporated-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 淡炼乳

## 1. 范围与适用性

本 PCR 适用于不加糖淡炼乳的门到门生产：从乳或允许使用的乳源材料在乳品工厂验收开始，到经包装、热处理稳定的淡炼乳在工厂门交付为止。范围覆盖全脂、部分脱脂、脱脂和高脂淡炼乳，也包括组成和特性等同的复原产品；产品可供直接食用或进一步加工。

前景边界包括接收和冷藏、适用时的净乳或分离、组成标准化、热处理、浓缩、适用时的均质、灌装、商业热稳定处理、冷却、工厂清洗、应归属的公用工程、过程损失，以及场内废物或废水处理。上游乳生产和到达声明工厂门之前的乳收集、包装及其他外购物料的生产、出厂后的配送、零售、消费者使用和包装报废均不在前景边界内；研究如需纳入，应使用单独的上游或下游数据集。

本 PCR 不包括加糖炼乳（CPC 22222）、CPC 22229 所含乳或奶油、普通未浓缩液态乳、浓缩奶油、固态乳或奶油、以非乳脂替代的乳类似物，以及产品身份不属于淡炼乳的调味产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.evaporated-milk |
| classification_refs | CPC 3.0：22221，Evaporated milk（精确映射语境） |
| covered_products | 不加糖的液态或糊状浓缩乳；全脂、部分脱脂、脱脂或高脂淡炼乳；组成和特性等同的复原不加糖浓缩乳 |
| excluded_products | 加糖炼乳（CPC 22222）；CPC 22229 所含产品；普通未浓缩液态乳；浓缩奶油；固态乳或奶油；以非乳脂替代的乳类似物；不属于淡炼乳产品身份的调味产品 |
| representative_product | 包装后供销售或进一步加工的不加糖常温稳定淡炼乳 |
| production_route | 验收乳或允许使用的乳源材料 → 净乳/分离和标准化 → 热处理 → 浓缩 → 适用时均质 → 灌装 → 容器内灭菌或声明的等效商业热稳定路线 → 冷却和工厂门 |
| market_state | 包装的液态或糊状、商业热稳定产品，并声明脂肪类别、组成、灭菌路线和产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供不加糖淡炼乳 |
| How much | 1 kg 淡炼乳产品净质量，不含包装质量 |
| How well | 产品符合所声明的淡炼乳脂肪类别和组成规范，并在所声明的加工路线下达到商业热稳定 |
| How long or cycle | 工厂门放行的一个合格生产批次；不赋予使用期限功能 |
| reference_flow_link | 功能单位由下述 Tiangong 参考产品流的恰好 1 kg 实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 淡炼乳净产品 |
| 参考产品流 | Evaporated milk / 淡奶 `e59aaeef-61a7-45af-b252-d70036a584d3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 淡炼乳脂肪类别；乳畜种类和原料路线；直接用乳、复原或重组路线；乳脂、乳总固形物和乳固形物中蛋白质的计量基准；热稳定路线；初级包装材料和形式；净装量基准；生产地域；生产期间；分配状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告数量归一化到工厂门放行的 1 kg 合格淡炼乳净产品；参考数量不含初级包装质量，包装应单独报告。 |
| `net_product_mass` | 灌装产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据经校准的灌装机或检重秤记录确定产品净质量，并扣除不合格品、开停机损失和不合格产品；如无经验证的单容器质量换算，不得仅按容器标称数量计算。 |
| `composition_basis` | 产品组成 | 质量分数 | kg/kg 产品 | 按声明的分析基准报告乳脂、适用时的乳总固形物或非脂乳固形物，以及非脂乳固形物中的乳蛋白；结果应保留产品子类和分析方法。 |
| `energy_units` | 电力和热能 | 能量 | kWh 和 MJ | 计量电力保留 kWh，热能或燃料保留原始计量单位；归一化前记录换算因子以及低位/高位热值基准。 |
| `water_balance` | 除水和冷凝水 | 质量 | kg | 将除去的水核算为回收冷凝水、排放冷凝水、产品保留水和排入空气的水；同一水量不得计入多个输出去向。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 乳和允许使用的乳源材料、包装、添加物及公用工程已交付至声明乳品工厂门并通过验收，且记录来料状态和储存条件 |
| starting_condition_role | 淡炼乳制造的前景门到门起点 |
| product_classification_scope | 第 1、2 节语义产品范围内的不加糖淡炼乳；CPC 3.0 代码 22221 仅为映射语境，不是规范身份 |
| recursive_input_rule | 如淡炼乳本身作为返工料或外购同类别投入进入，应在接收过程一次性记录其质量和上游数据集，区分内部返工与外部供应，且不得在本 PCR 下递归重建 |
| upstream_dataset_requirement | 对乳或乳源投入、外购能源、供水、包装、添加物、清洗剂及研究纳入的进厂运输，采用时间、地域和技术具有代表性的上游数据集 |
| disclosure | 声明乳畜种类和来源路线、复原状态、脂肪类别、组成基准、加工和灭菌路线、包装形式、工厂地域、数据期间、内部返工、冷凝水回收、废水去向、共产品及排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 所有前景过程 | 纳入从合格物料接收到包装产品放行之间所有应归属的操作，包括清洗、公用工程、损失和场内废物处理；披露排除项和任何共享服务分配。 | `codex-cxs-281-1971`, `eu-fdm-bat-2019-2031` |
| `boundary_product_identity` | 产品范围 | 仅接受具有声明组成和特性的不加糖淡炼乳；CPC 22222/22229 产品、普通液态乳、奶油、乳粉、类似物或调味产品应转用其他适用 PCR。 | `unsd-cpc-3-22221`, `codex-cxs-281-1971`, `codex-cxs-206-1999` |
| `boundary_waste_routes` | 产品损失、清洗残余物和废水 | 区分可回收产品或冷凝水、送处理的废物与基本流排放；每种去向只建模一次并保存去向证据。 | `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_receipt_and_storage` | 乳和物料接收与储存 | required | 始终 | 前景接收、验收、计量和冷藏 | 每 kg 合格乳或乳源材料及每 kg 参考产品 |
| `standardization_and_heat_treatment` | 净乳、标准化和预备热处理 | required | 始终；仅在实际使用时纳入具体分离或复原步骤 | 前景制备和组成控制 | 每 kg 标准化热处理乳输出 |
| `concentration_and_homogenization` | 浓缩和均质 | required | 始终；声明路线实际使用均质时予以记录 | 前景除水和物理稳定 | 每 kg 浓缩乳输出及每 kg 参考产品 |
| `filling_stabilization_and_cooling` | 灌装、商业热稳定和冷却 | required | 始终；区分容器内灭菌与其他声明的等效路线 | 前景包装和最终安全/稳定加工 | 每 kg 合格淡炼乳净产品 |
| `cleaning_and_wastewater_management` | 清洗和废水管理 | required | 始终纳入清洗；仅当报告场址自行运行时纳入场内废水处理 | 前景卫生保障和残余物管理 | 每 kg 合格淡炼乳净产品 |

### 过程：乳和物料接收与储存（`milk_receipt_and_storage`）

#### 输入

##### 产品流

###### 接收的生乳（`raw_milk_received`）

将工厂接收的合格生乳作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：生乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生乳的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的乳粉（`milk_powder_received`）

将工厂接收的合格乳粉作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：乳粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：乳粉的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的稀奶油（`cream_received`）

将工厂接收的合格稀奶油作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：稀奶油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：稀奶油的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的稀奶油粉（`cream_powder_received`）

将工厂接收的合格稀奶油粉作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：稀奶油粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：稀奶油粉的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的无水乳脂（`anhydrous_milk_fat_received`）

将工厂接收的合格无水乳脂作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：无水乳脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：无水乳脂的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的乳截留物（`milk_retentate_received`）

将工厂接收的合格乳截留物作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：乳截留物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：乳截留物的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的乳渗透物（`milk_permeate_received`）

将工厂接收的合格乳渗透物作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：乳渗透物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：乳渗透物的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 接收的乳糖（`lactose_received`）

将工厂接收的合格乳糖作为单独产品投入记录，不得与另一种乳源物料合并。

- 选定流：乳糖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：乳糖的合格衡器或校准仪表数量，扣除拒收交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行至制备的合格生乳（`accepted_raw_milk_to_preparation`）

依据接收和储存记录计算转入制备的合格生乳，扣除拒收交付量和有记录的储存损失。

- 选定流：生乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格生乳接收量加期初库存，减期末库存、拒收交付量和有记录的储存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`

##### 废物流

###### 接收和储存期间损失的生乳（`raw_milk_receiving_waste`）

记录生乳验收后发生的溢洒、取样、管线滞留或其他损失，并保留实际去向。

- 选定流：废生乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或质量平衡推导的声明工厂门内生乳损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：净乳、标准化和预备热处理（`standardization_and_heat_treatment`）

#### 输入

##### 产品流

###### 进入制备的合格生乳（`accepted_raw_milk_input`）

仅在产品配方实际使用生乳时，记录该物料发往声明批次的数量。

- 选定流：生乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于组成调整的乳粉（`milk_powder_adjustment`）

仅在产品配方实际使用乳粉时，记录该物料发往声明批次的数量。

- 选定流：乳粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于组成调整的稀奶油（`cream_adjustment`）

仅在产品配方实际使用稀奶油时，记录该物料发往声明批次的数量。

- 选定流：稀奶油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于组成调整的稀奶油粉（`cream_powder_adjustment`）

仅在产品配方实际使用稀奶油粉时，记录该物料发往声明批次的数量。

- 选定流：稀奶油粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于组成调整的无水乳脂（`anhydrous_milk_fat_adjustment`）

仅在产品配方实际使用无水乳脂时，记录该物料发往声明批次的数量。

- 选定流：无水乳脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于蛋白质调整的乳截留物（`milk_retentate_adjustment`）

仅在产品配方实际使用乳截留物时，记录该物料发往声明批次的数量。

- 选定流：乳截留物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于组成调整的乳渗透物（`milk_permeate_adjustment`）

仅在产品配方实际使用乳渗透物时，记录该物料发往声明批次的数量。

- 选定流：乳渗透物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于蛋白质调整的乳糖（`lactose_adjustment`）

仅在产品配方实际使用乳糖时，记录该物料发往声明批次的数量。

- 选定流：乳糖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 用于复原的饮用水（`potable_water_adjustment`）

仅在产品配方实际使用饮用水时，记录该物料发往声明批次的数量。

- 选定流：饮用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

###### 加入产品的氯化钠（`sodium_chloride_adjustment`）

仅在产品配方实际使用氯化钠时，记录该物料发往声明批次的数量。

- 选定流：氯化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或计量的批次配方数量，并与领用和退料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-281-1971`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入浓缩的标准化热处理乳（`standardized_heat_treated_milk`）

根据实测批次投入、组成结果、取样、滞留和损失，计算转入浓缩的一股标准化乳流。

- 选定流：标准化热处理乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入浓缩的标准化热处理乳核对质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_composition_and_yield`
- 来源：`codex-cxs-281-1971`、`eu-fdm-bat-2019-2031`

##### 废物流

###### 乳净化产生的分离沉渣（`separator_sediment`）

在采用净乳或分离操作时，记录去除的沉渣质量并保留其处理去向。

- 选定流：乳分离沉渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 制备产生的不合格乳（`offspec_preparation_milk`）

将不合格标准化乳、制备取样和未回收乳滞留记录为一项废乳交换，不包括分离沉渣。

- 选定流：废乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

### 过程：浓缩和均质（`concentration_and_homogenization`）

#### 输入

##### 产品流

###### 进入浓缩的标准化乳（`milk_to_concentration`）

记录进入蒸发器或其他声明浓缩系统的标准化热处理乳质量。

- 选定流：标准化热处理乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入浓缩的转移仪表数量或经核对批次数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_composition_and_yield`

###### 浓缩用工业蒸汽（`concentration_steam`）

将归属于本过程的工业蒸汽作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：工业蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 浓缩用购入工业热（`concentration_purchased_heat`）

将归属于本过程的购入工业热作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：购入工业热
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内浓缩供热用天然气（`concentration_natural_gas`）

将归属于本过程的天然气作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内浓缩供热用柴油（`concentration_diesel`）

将归属于本过程的柴油作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：柴油
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内浓缩供热用轻质燃料油（`concentration_light_fuel_oil`）

将归属于本过程的轻质燃料油作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：轻质燃料油
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内浓缩供热用液化石油气（`concentration_lpg`）

将归属于本过程的液化石油气作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 浓缩和均质用电（`concentration_electricity`）

将归属于本过程的中压电力作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入灌装的浓缩乳（`concentrated_milk_to_filling`）

根据实测转移质量和固形物数据计算浓缩乳产出，并计入取样、滞留、内部返工和废乳。

- 选定流：浓缩乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与质量和固形物平衡核对的浓缩乳转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_composition_and_yield`
- 来源：`codex-cxs-281-1971`

###### 回收再用的蒸发器冷凝水（`recovered_evaporator_condensate`）

记录用于声明内部或外部用途的回收冷凝水，并从废水和基本流排放卡中排除同一数量。

- 选定流：蒸发器冷凝水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：冷凝水仪表读数或水量平衡中回收的部分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 送往废水处理的蒸发器冷凝水（`condensate_wastewater`）

仅记录送往废水处理或下水道的蒸发器冷凝水，并扣除已回收的冷凝水。

- 选定流：乳品加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量冷凝水排放量或按去向划分的水量平衡余量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 场内燃料燃烧产生的化石二氧化碳（`combustion_fossil_carbon_dioxide_air`）

记录上述燃料在场内燃烧产生的化石二氧化碳；购入蒸汽或购入热不得使用本卡。

- 选定流：化石二氧化碳排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关活动量乘以经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内燃料燃烧产生的一氧化碳（`combustion_carbon_monoxide_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录场内燃烧产生的一氧化碳。

- 选定流：一氧化碳排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关活动量乘以经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内燃料燃烧产生的氮氧化物（`combustion_nitrogen_oxides_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录场内燃烧产生的氮氧化物。

- 选定流：氮氧化物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关活动量乘以经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内燃料燃烧产生的硫氧化物（`combustion_sulfur_oxides_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录场内燃烧产生的硫氧化物。

- 选定流：硫氧化物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关活动量乘以经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 场内燃料燃烧产生的颗粒物（`combustion_particulate_matter_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录场内燃烧产生的颗粒物。

- 选定流：颗粒物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关活动量乘以经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：灌装、商业热稳定和冷却（`filling_stabilization_and_cooling`）

#### 输入

##### 产品流

###### 进入灌装的浓缩乳（`concentrated_milk_input`）

记录进入声明灌装和商业热稳定路线的浓缩乳。

- 选定流：浓缩乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入生产线的校准转移仪表质量或灌装机质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_packaging`

###### 马口铁罐罐身（`tinplate_can_body`）

记录分配给合格包装产品的马口铁钢罐质量；仅适用于使用该组件的包装路线。

- 选定流：马口铁钢罐罐身
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 马口铁罐端盖（`tinplate_can_end`）

记录分配给合格包装产品的马口铁钢制封盖质量；仅适用于使用该组件的包装路线。

- 选定流：马口铁钢罐端盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 纸标签（`paper_label`）

记录分配给合格包装产品的纸标签质量；仅适用于使用该组件的包装路线。

- 选定流：纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 瓦楞运输箱（`corrugated_case`）

记录分配给合格包装产品的瓦楞纸箱质量；仅适用于使用该组件的包装路线。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 无菌复合纸盒（`aseptic_carton`）

记录分配给合格包装产品的无菌复合纸盒质量；仅适用于使用该组件的包装路线。

- 选定流：无菌复合纸盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 塑料封盖（`plastic_closure`）

记录分配给合格包装产品的聚乙烯封盖质量；仅适用于使用该组件的包装路线。

- 选定流：聚乙烯封盖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：组件领用质量减去退回可用库存，并与包装件数和组件废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 灌装、热稳定和冷却用电（`final_process_electricity`）

将归属于本过程的中压电力作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终热稳定用工业蒸汽（`final_process_steam`）

将归属于本过程的工业蒸汽作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：工业蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终热稳定用购入工业热（`final_process_purchased_heat`）

将归属于本过程的购入工业热作为单独能源载体投入记录；仅在实际使用该供应时适用本卡。

- 选定流：购入工业热
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接供热用天然气（`final_process_natural_gas`）

将归属于本过程的天然气作为单独燃料投入记录；仅在灌装、热稳定或冷却直接燃烧该燃料时适用本卡。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接供热用柴油（`final_process_diesel`）

将归属于本过程的柴油作为单独燃料投入记录；仅在灌装、热稳定或冷却直接燃烧该燃料时适用本卡。

- 选定流：柴油
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接供热用轻质燃料油（`final_process_light_fuel_oil`）

将归属于本过程的轻质燃料油作为单独燃料投入记录；仅在灌装、热稳定或冷却直接燃烧该燃料时适用本卡。

- 选定流：轻质燃料油
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接供热用液化石油气（`final_process_lpg`）

将归属于本过程的液化石油气作为单独燃料投入记录；仅在灌装、热稳定或冷却直接燃烧该燃料时适用本卡。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：计量用量，或依据公用工程和运行记录作出的工程分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 氨制冷剂补充量（`ammonia_refrigerant_input`）

记录归属冷却系统的氨充注或补充量；仅在声明制冷剂为氨时适用。

- 选定流：制冷剂级氨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至声明生产期的实测采购、充注或补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 二氧化碳制冷剂补充量（`carbon_dioxide_refrigerant_input`）

记录归属冷却系统的二氧化碳充注或补充量；仅在声明制冷剂为二氧化碳时适用。

- 选定流：制冷剂级二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至声明生产期的实测采购、充注或补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 水制冷剂补充量（`water_refrigerant_input`）

记录归属冷却系统的水充注或补充量；仅在声明制冷剂为水时适用。

- 选定流：制冷用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至声明生产期的实测采购、充注或补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格淡炼乳（`evaporated_milk_reference_product`）

本卡是定量参考输出。合格净产品质量应扣除拒收品、取样、管线滞留产品和包装质量。

- 选定流：淡奶 `e59aaeef-61a7-45af-b252-d70036a584d3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据合格净产品质量归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`codex-cxs-281-1971`
- 数量范围：参考输出归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1.0
  - 上限：1.0
  - 单位：kg/kg 参考产品
  - 基准：精确归一化的合格参考输出，不是经验观测值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）

##### 废物流

###### 不合格淡炼乳和灌装损失（`offspec_evaporated_milk`）

将开机、停机、过量灌装、取样、泄漏和拒收成品乳记录为一项废乳交换，并保留实际去向。

- 选定流：废淡炼乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 马口铁包装废料（`waste_tinplate_packaging`）

记录拒收或损坏的马口铁罐身和端盖质量及实际回收或处置路线。

- 选定流：废马口铁钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 废纸标签（`waste_paper_labels`）

记录拒收、裁切或未使用的纸标签质量及实际回收或处置路线。

- 选定流：废纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 废瓦楞运输箱（`waste_corrugated_cases`）

记录损坏或未使用的瓦楞运输箱质量及实际回收或处置路线。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 废塑料封盖（`waste_plastic_closures`）

记录拒收或未使用的聚乙烯封盖质量及实际回收或处置路线。

- 选定流：废聚乙烯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

###### 废无菌复合纸盒（`waste_aseptic_cartons`）

记录拒收、裁切或未使用的无菌复合纸盒质量及实际回收或处置路线。

- 选定流：废无菌复合纸盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量废物质量或由质量平衡计算的数量，并记录实际处理或回收去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_packaging`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 排放至空气的氨制冷剂（`ammonia_refrigerant_air`）

依据充注、回收、补充和库存记录计算排放至空气的氨泄漏量；仅适用于氨制冷路线。

- 选定流：氨排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测释放量或归属冷却系统的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 排放至空气的二氧化碳制冷剂（`carbon_dioxide_refrigerant_air`）

依据充注、回收、补充和库存记录计算排放至空气的二氧化碳制冷剂泄漏量；仅适用于二氧化碳制冷路线。

- 选定流：二氧化碳排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测释放量或归属冷却系统的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 排放至空气的水制冷剂（`water_refrigerant_air`）

依据充注、回收、补充和库存记录计算排放至空气的水制冷剂损失；仅适用于水制冷路线。

- 选定流：水蒸气排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测释放量或归属冷却系统的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接燃料燃烧产生的化石二氧化碳（`final_combustion_fossil_carbon_dioxide_air`）

记录最终过程燃料直接燃烧产生的化石二氧化碳；电力、购入蒸汽或购入热不得使用本卡。

- 选定流：化石二氧化碳排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关燃料数量乘以有记录且经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接燃料燃烧产生的一氧化碳（`final_combustion_carbon_monoxide_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录最终过程燃料直接燃烧产生的一氧化碳。

- 选定流：一氧化碳排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关燃料数量乘以有记录且经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接燃料燃烧产生的氮氧化物（`final_combustion_nitrogen_oxides_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录最终过程燃料直接燃烧产生的氮氧化物。

- 选定流：氮氧化物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关燃料数量乘以有记录且经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接燃料燃烧产生的硫氧化物（`final_combustion_sulfur_oxides_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录最终过程燃料直接燃烧产生的硫氧化物。

- 选定流：硫氧化物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关燃料数量乘以有记录且经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

###### 最终过程直接燃料燃烧产生的颗粒物（`final_combustion_particulate_matter_air`）

在有实测数据或经审查的燃料及技术特定因子时，记录最终过程燃料直接燃烧产生的颗粒物。

- 选定流：颗粒物排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放量，或相关燃料数量乘以有记录且经审查的技术特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utilities`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：清洗和废水管理（`cleaning_and_wastewater_management`）

#### 输入

##### 产品流

###### 饮用级过程和清洗用水（`potable_process_water`）

记录清洁原位系统、设备及区域清洗和归属过程服务所用的新鲜饮用水；不包括单独计量的回收冷凝水。

- 选定流：饮用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分表计量用水加有记录的分配量，扣除单独记录的回收水用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

使用氢氧化钠时，记录归属清洗循环的供应量，并保留供应浓度和密度。

- 选定流：氢氧化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量加药系统或领用记录中的氢氧化钠溶液供应质量，并保留浓度和密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

###### 硝酸清洗剂（`nitric_acid_cleaner`）

使用硝酸时，记录归属清洗循环的供应量，并保留供应浓度和密度。

- 选定流：硝酸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量加药系统或领用记录中的硝酸溶液供应质量，并保留浓度和密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

###### 过氧乙酸消毒剂（`peracetic_acid_disinfectant`）

使用过氧乙酸时，记录归属消毒循环的供应量，并保留供应浓度和密度。

- 选定流：过氧乙酸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量加药系统或领用记录中的过氧乙酸溶液供应质量，并保留浓度和密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_disinfectant`）

使用次氯酸钠时，记录归属消毒循环的供应量，并保留供应浓度和密度。

- 选定流：次氯酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量加药系统或领用记录中的次氯酸钠溶液供应质量，并保留浓度和密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cleaning`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的乳品加工废水（`dairy_process_wastewater`）

将送往场内处理、下水道或外部处理的废水作为一项带去向标签的废物流记录；包括含产品冲洗水并避免与回收冷凝水重叠。

- 选定流：乳品加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向拆分的出水仪表数量或水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 生物法废水处理污泥（`biological_wastewater_sludge`）

运行场内生物处理时，记录外运脱水污泥，并保留湿质量、干物质含量及实际回收或处置去向。

- 选定流：生物法废水处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外运污泥质量，并保留干物质换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

###### 排入淡水的处理后出水（`treated_effluent_water_freshwater`）

记录场内处理后直接排入淡水的水质量；不得将同一水量同时报告为送外部处理的废水。

- 选定流：水排放至淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放体积经有记录的密度换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 排入淡水的化学需氧量（`chemical_oxygen_demand_freshwater`）

依据相匹配的排放体积和代表性浓度，记录直接排放处理后出水中的化学需氧量负荷。

- 选定流：化学需氧量排放至淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：相匹配的排放体积乘以实测化学需氧量浓度并完成单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 排入淡水的硝酸盐（`nitrate_freshwater`）

监测硝酸盐时，依据相匹配的排放体积和代表性硝酸盐浓度记录处理后出水中的硝酸盐。

- 选定流：硝酸盐排放至淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：相匹配的排放体积乘以实测硝酸盐浓度并完成单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 排入淡水的磷酸盐（`phosphate_freshwater`）

监测磷酸盐时，依据相匹配的排放体积和代表性磷酸盐浓度记录处理后出水中的磷酸盐。

- 选定流：磷酸盐排放至淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：相匹配的排放体积乘以实测磷酸盐浓度并完成单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 排入淡水的氯化物（`chloride_freshwater`）

监测氯化物时，依据相匹配的排放体积和代表性氯化物浓度记录处理后出水中的氯化物。

- 选定流：氯化物排放至淡水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：相匹配的排放体积乘以实测氯化物浓度并完成单位换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净淡炼乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_effluent`
- 来源：`eu-fdm-bat-2019-2031`
## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_internal_rework` | 内部返工、回收冷凝水和内部中间乳 | 将内部循环作为内部流并在质量平衡中核对；不得产生共产品抵扣，也不得重复计算上游负荷。 |  |
| `allocation_subdivision_first` | 工厂共享操作和公用工程 | 优先直接计量或过程细分。如无法实现，应采用有记录的因果工程驱动因素分配共享公用工程，例如计量运行时间、蒸汽需求、制冷负荷或吞吐量，并报告分配份额。 | `eu-pef-2021-2279` |
| `allocation_exported_milk_components` | 离开前景系统的奶油、脱脂乳或其他乳源输出 | 优先采用分过程数据或物理质量和组成跟踪。如仍需分配，应采用适合联产操作的、有记录的物理关系，披露公式和共产品数量，并测试一个实质上合理的替代方案；不得无说明地默认经济分配。 | `eu-pef-2021-2279` |
| `allocation_waste_and_recovery` | 产品损失、包装废料、冷凝水、污泥和回收材料 | 按实际最终去向分类每项输出。仅对有记录的外部处理、回收或替代施加负荷或抵扣；内部再利用且已经减少投入需求的物料不得再给予抵扣。 | `eu-pef-2021-2279`, `eu-fdm-bat-2019-2031` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `milk_receipt_and_storage`; `standardization_and_heat_treatment` | 乳、乳源材料、调整投入和拒收物料 | 地磅、储罐流量计、接收检验、批次领料记录 | 物料身份；供应商；批次；合格质量或体积；密度；固形物；脂肪；蛋白质；温度；拒收数量；期初和期末库存 | 经校准称量或计量，并与接收和批记录核对 | kg；L 并换算密度；质量分数 | 每次交付和每批 | 声明生产期间内的每个合格批次 | 服务于声明产品的所有接收和储存点 | 按物料汇总合格数量和库存变化；仅在解决批次资格和分配后归一化 | 校准记录；接收证书；实验室结果；库存核对；拒收日志 |
| `cp_composition_and_yield` | `standardization_and_heat_treatment`; `concentration_and_homogenization` | 中间物质量、组成、蒸发水和产率 | 批记录、转移流量计、实验室检验、蒸发器日志 | 投入和输出质量；脂肪；总固形物；非脂固形物；蛋白质基准；温度；时间；蒸发器进料和浓缩物；冷凝水；样品；返工料；管线滞留物 | 经校准转移计量和有代表性的实验室分析，并进行批次质量平衡 | kg；质量分数；过程控制单位 | 每批或每个连续生产运行 | 所有声明生产批次 | 所有相关制备和浓缩生产线 | 将投入固形物和质量与浓缩物、冷凝水、返工料、损失和库存变化核对 | 仪表校准；实验室方法和质控样；签字批次放行；质量和固形物平衡闭合 |
| `cp_energy_and_utilities` | `concentration_and_homogenization`; `filling_stabilization_and_cooling` | 电力、蒸汽、燃料、冷量和直接排放 | 分表、锅炉日志、燃料发票、运行日志、排放记录 | 电量；蒸汽质量和状态；热水量和温度；燃料量；热值基准；运行时间；分配驱动因素；污染物实测值或因子 | 优先直接分项计量；否则采用有记录的工程分配和经评审的排放因子 | kWh；MJ；kg 蒸汽；燃料特定单位；kg 污染物 | 连续或按班次/批次汇总 | 声明生产期间，并覆盖所有实质性运行模式 | 服务于声明过程的所有公用工程系统 | 扣除非生产用途；按因果驱动因素分配共享供应；只换算一次单位；归一化到合格产品 | 仪表校准；发票核对；锅炉平衡；分配工作表；因子来源和版本 |
| `cp_output_and_packaging` | `filling_stabilization_and_cooling` | 合格净产品、包装、不合格品和包装废料 | 灌装机汇总、检重秤、包装领用、成品、不合格品和放行记录 | 灌装单位数；标称和实测净质量；合格和不合格单位数；样品；返工料；包装单件质量；包装领用和退回；热稳定路线；放行状态 | 经校准检重和与放行成品进行质量核对 | kg 产品；件；kg 包装 | 每个批次和包装运行 | 所有声明生产批次 | 产品的所有灌装和稳定处理生产线 | 合格净产品等于放行单位数乘经验证的平均净质量；将包装领用与包装产品单位和废料核对 | 检重秤校准；放行证书；包装规范；不合格品和返工日志；容器封闭控制记录 |
| `cp_water_and_cleaning` | `concentration_and_homogenization`; `cleaning_and_wastewater_management` | 供水、回收冷凝水、清洗水和化学品 | 水分表、冷凝水流量计、CIP 配方和加药日志、采购或领用记录 | 供水；冷凝水产生、回收和再利用；CIP 循环；冲洗量；化学品身份、浓度和剂量；去向 | 优先分项计量和自动 CIP 日志；否则采用有记录的设备循环计算 | kg 或 m3 水；kg 或 L 化学品并换算密度和浓度 | 每次 CIP 循环，并定期核对仪表 | 声明生产期间，并覆盖所有实质性清洗制度 | 所有产品接触和应归属服务系统 | 区分新鲜水和回用水；按循环、设备容积或运行时间分配共享清洗；避免冷凝水重复计算 | 仪表和加药校准；CIP 完成记录；化学品安全/规范记录；定期水量平衡 |
| `cp_waste_and_effluent` | 所有前景过程 | 产品损失、残余物、废水、污泥和直接排放 | 损失日志、废物联单、出水流量计、实验室分析、处理日志 | 物料和路线；湿质量；干物质；废水体积；去向；污染物浓度；处理状态；回收；处置 | 直接称量或计量；由匹配的体积和浓度计算污染物负荷 | kg；m3；mg/L；kg 污染物 | 每次事件或连续排放并进行代表性取样 | 声明生产期间，包括实质性异常工况 | 服务于声明产品的所有排水口、废物存放点、处理和排放点 | 按去向分流；由匹配的流量和浓度计算污染物质量；将含产品损失与物料平衡核对 | 废物转移记录；仪表校准；经认可或受控的实验室结果；处理运行记录；去向证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 合格前景数量 ÷ 合格淡炼乳净质量；相除前先应用有记录的共享过程分配 | 合格数量；分配份额；合格产品净质量 | 每 1 kg 参考产品的数量 |  |
| `calc_product_mass` | 合格参考产品 | 合格净产品质量 = 放行单位数之和 × 经验证的平均产品净质量，或直接采用合格质量流量计总量；不含包装质量 | 放行单位数；检重结果或质量流量计；不合格品；样品 | kg 合格淡炼乳净产品 |  |
| `calc_mass_and_solids_balance` | 从接收到浓缩 | 将物料投入和期初库存与合格产品、除去的水、共产品、废物、返工料、样品及期末库存核对；分别计算并披露总质量和乳固形物闭合情况 | 实测质量；组成检验；库存变化；冷凝水；损失 | 质量闭合；固形物闭合；未解释差额 | `codex-cxs-281-1971` |
| `calc_water_routes` | 蒸发、清洗和废水 | 除去的水 = 回收冷凝水 + 送处理冷凝水 + 经验证的水向空气排放 + 过程滞留变化；废水污染物负荷 = 单位换算后匹配的排水体积 × 浓度 | 冷凝水流量计；水量平衡；排水体积；污染物浓度 | 按去向的 kg 水；kg 污染物 | `eu-fdm-bat-2019-2031` |
| `calc_energy` | 过程用能 | 各计量能源载体只换算一次到报告单位，保留原计量单位和换算基准，再按有记录的因果驱动因素分配 | 仪表总量；蒸汽状态；燃料量；热值；运行驱动因素 | 每参考产品的 kWh 电力或 MJ 热能 | `eu-fdm-bat-2019-2031` |
| `calc_allocation` | 联产或共享操作 | 分配数量 = 共享数量 × 有记录的因果或已接受物理分配份额；同一共享总量的份额在舍入容差内合计为 1 | 共享数量；各产品分配驱动因素；适用时的共产品质量和组成 | 已分配前景数量和分配份额 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 将声明产品与不加糖淡炼乳范围匹配，并保留脂肪类别、组成、复原状态、乳畜种类和热稳定路线；非参考 Tiangong 流身份未解决项必须在发布前评审。 | 产品规范；标签；批配方；实验室放行；Tiangong 身份评审 |
| `dq_measurement` | 质量、能源、水和出水记录 | 对实质性计量采用经校准仪表或秤；保留换算、密度、热值、取样和分配计算。 | 校准证书；仪表清单；计算工作簿；实验室方法 |
| `dq_temporal` | 所有前景数据 | 采用对产品和技术具有代表性的声明期间，覆盖每个合格批次或生产活动及所有实质性运行模式；识别维护、停机、开机和异常事件并说明排除理由。 | 生产日历；仪表序列；事件日志；排除记录；与 `eu-pef-2021-2279` 一致的技术、地域、时间和精度评审 |
| `dq_completeness` | 物料和公用工程平衡 | 纳入所有实质性实测前景投入、输出、废物和直接排放；明确列出并说明每个遗漏流，不得通过通用截断遗漏危险或依法受控排放。 | 完整性计算；遗漏流登记；评审签字；`eu-pef-2021-2279` 数据质量评审 |
| `dq_mass_balance` | 从接收到放行产品 | 校验前应定义场址和批次特定的调查阈值；凡未解释的总质量或乳固形物差额超过该阈值，均应调查并保留纠正措施决定。本 PCR 不规定统一百分比。 | 签字的质量和固形物平衡；有记录的场址阈值；纠正措施记录 |
| `dq_range_evidence` | 重要清单流 | 不得根据单篇出版物、单个工厂、单批次、单一情景或单点数值编写经验范围。必须有至少两份独立原始来源且前景边界、单位和归一化基准兼容，或有经评审的前景分布；否则范围证据缺口保持未解决。精确参考流归一化恒等式不是经验范围。 | 原始来源全文；边界和单位兼容性评审；前景分布；未解决范围登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流和数据集元数据 | 如缺失或不一致的内容涉及产品流 UUID、Mass 流属性 UUID、Units of mass UUID、参考单位 kg、净质量基准或必需限定信息，则失败。 |  |
| `validate_product_scope` | 产品身份 | 如将加糖/甜味物质、浓缩奶油、固态乳/奶油、非乳脂替代或其他排除身份作为本参考产品，则失败；按适用产品规范验证声明组成。 | `codex-cxs-281-1971` |
| `validate_process_coverage` | 前景过程图 | 如接收、标准化/热处理、浓缩、最终灌装/热稳定/冷却或应归属清洗被遗漏且无有记录的路线特定解释，则失败。 | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_solids_balance` | 物料平衡 | 总质量或乳固形物不平衡超过声明的场址和批次特定调查阈值时标记；差额未解释、内部返工重复计算或除水去向重叠时失败。 | `codex-cxs-281-1971`, `eu-fdm-bat-2019-2031` |
| `validate_wastewater_route` | 废物流和基本流 | 同一废水或冷凝水同时报告为送处理废物流和直接基本流排放，或含产品损失与清洗化学品没有去向时失败。 | `eu-fdm-bat-2019-2031` |
| `validate_range_evidence` | 清单数量范围 | 若经验范围复制单个案例或单点数值、缺少至少两份边界/单位/基准兼容的独立原始来源，或未说明推断方法与适用性，则校验失败。仅对已声明的物理、规范或归一化恒等式允许上下限相等。 |  |
| `validate_allocation` | 共享操作和共产品 | 共享操作分配、外输共产品、内部返工或回收抵扣具有实质性，但未披露并核对方法、驱动因素、份额、数量和敏感性时失败。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 淡炼乳前景门到门生产数据集 |
| downstream_use | 经评审和发布后可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 将本工厂门数据集与有代表性的上游乳、物料、能源、包装、运输和下游情景组合，并保留声明产品限定信息的产品碳足迹或 LCA 研究 |
| excluded_use | 独立的从摇篮到坟墓声明；作为加糖炼乳、浓缩奶油、乳粉、乳类似物或调味产品的代理；在组成、边界、分配、地域、技术和数据期间不等同的情况下作比较声明 |
| required_metadata | 规范 PCR id；参考 UUID；产品子类和组成；乳畜种类和物料路线；复原状态；工厂地域；技术和热稳定路线；包装；生产期间；边界；分配；上游数据集；数据所有者；评审状态 |
| required_quality_disclosure | 一手数据占比；仪表和实验室覆盖；时间和场址覆盖；质量和固形物平衡闭合；水和能源分配；废物和废水去向；未解决 UUID 和范围证据缺口；排除项；不确定性和评审决定 |
| update_trigger | 配方、乳来源、组成类别、浓缩或灭菌技术、包装、工厂能源或水系统、分配、废物路线、产品流身份、适用标准发生实质变化，或变化超过数据所有者的重要性阈值 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-22221` | standard | United Nations Statistics Division，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，子类 22221 Evaporated milk。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-08-12） | CPC 22221 的纳入项，以及对 22222、22229 和固态乳或奶油的明确排除；仅作分类语境 |
| `codex-cxs-281-1971` | standard | FAO 和 WHO，Codex Alimentarius，CXS 281-1971，*Standard for Evaporated Milks*，1999 年修订并更新至 2023 年修正。https://workspace.fao.org/sites/codex/Standards/CXS%20281-1971/CXS_281e.pdf（检索日期：2026-08-12） | 淡炼乳身份；直接消费和进一步加工范围；部分除水路线；允许的乳源材料类别；声明组成类别符合性。组成限值和质量指标不作为统一 LCI 数量 |
| `codex-cxs-206-1999` | standard | FAO 和 WHO，Codex Alimentarius，CXS 206-1999，*General Standard for the Use of Dairy Terms*，2022 年修正。https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf（检索日期：2026-08-12） | 乳制品、复原乳制品和重组乳制品身份；乳畜种类与加工路线披露；防止以非乳成分替代乳成分的产品被视作淡炼乳 |
| `eu-pef-2021-2279` | official_guidance | European Commission，Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint method。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期：2026-08-12） | 生命周期数据集建模、分配层级、代表性、精度、披露和数据质量评审；不采用通用 PEF 数值作为产品特定 LCI 数量 |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission，Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期：2026-08-12） | 水、能源、原料、废水、废气、残余物、过程流程图和清洗的乳品过程环境清单及监测语境；不采用 BAT 性能水平作为统一 LCI 数值，也不据此声明法规适用性 |
