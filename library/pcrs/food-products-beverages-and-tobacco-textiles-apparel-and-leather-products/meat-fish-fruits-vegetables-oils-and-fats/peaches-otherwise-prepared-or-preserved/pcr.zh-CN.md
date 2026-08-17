---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peaches-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他加工或保藏的桃

## 1. 范围与适用性

本 PCR 适用于为销售而加工或保藏、且在生产设施门口仍可识别为桃基产品的产品。范围涵盖从接收桃或已声明的桃中间产品，到制备、保藏、包装和成品放行的路线特定作业。桃罐头是所涵盖的一条路线，但不代表整个产品类别。

本 PCR 不包括在其他产品类别下的鲜桃、仅冷冻或仅干燥的桃、糖渍产品、果酱、果冻、橘皮果酱类产品、饮料和混合水果产品。农业生产、外购配料和包装材料的制造、分销、零售、消费者使用和生命末期均不在前景边界内；研究需要时，以关联的上游或下游数据集表示。

每个前景数据包应描述一条同质的保藏路线和产品规格。对同一参考产品数据集，罐藏热保藏路线与其他保藏路线相互排斥；同时采用两类路线的设施应分别建立路线特定数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peaches-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21492，其他加工或保藏的桃 |
| covered_products | 加工或保藏的桃产品，包括已声明的罐装核果路线，以及仍属于本语义类别的其他已声明保藏路线 |
| excluded_products | 在其他类别下分类的鲜桃、仅冷冻、仅干燥、糖渍、果酱、果冻、橘皮果酱类、饮料或混合水果产品 |
| representative_product | 处于可销售形态的路线特定加工或保藏桃产品 |
| production_route | `canned_heat_preservation` 或 `other_declared_preservation` 中恰好一项；两条路线不得合并到一个参考产品数据集中 |
| market_state | 在生产设施门口的已完成保藏和包装的产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供处于已声明可销售形态的路线特定加工或保藏桃产品 |
| How much | 按已声明质量基准计 1 kg 桃净产品，不含初级和次级包装质量 |
| How well | 符合生产者声明的产品规格；罐藏路线产品还应声明适用的 CXS 242-2003 产品形态和装填介质 |
| How long or cycle | 从一个完整生产批次或生产期到生产设施门口放行；不隐含贮存期限或货架期服务 |
| reference_flow_link | 功能单位由下列单一 Tiangong 产品流和质量参考对象实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保藏路线；桃的产品形态或粒形；装填介质或配方；液体介质产品采用总净含量或沥干固形物质量基准；初级包装类型；接收时原料状态；生产地域；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装的产品净质量。对于处于液体介质中的产品，应声明参考数量采用总净含量还是沥干桃固形物；没有配对实测值时不得在两种基准间换算。 |
| `batch_mass_consistency` | 桃、配料、中间产品、产品、共产品和废物质量 | Mass | kg | 保留记录时的接收态或其他已声明水分/状态基准，并在归一化至 1 kg 参考产品前采用一致的批次边界。 |
| `energy_record_consistency` | 电力、蒸汽、热和燃料投入 | Energy 或燃料特定属性 | 记录单位，以及换算时的 MJ 或 kWh | 保留仪表或账单单位、换算因子和换算来源；不得把电力、热能与燃料质量或体积视为可互换。 |
| `route_and_pack_separation` | 路线与包装观测值 | 路线与包装描述符 | 不适用 | 按已声明保藏路线、产品形态、装填介质或配方以及初级包装分别保存记录；共享记录只能按第 7 节分配。 |

## 5. 系统边界

前景边界始于加工设施接收桃或已声明的桃中间产品，止于加工或保藏桃产品在生产设施门口放行。边界包括直接控制的接收、分选、制备、保藏、包装、成品处理、场内公用工程、废物、废水和直接排放。外购桃、配料、公用工程、包装、废物处理以及不在直接控制下的运输，应作为关联的上游或下游数据集，而不得静默遗漏。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 设施接收点的桃或桃中间产品，并声明产品状态、供应商、来源、相关时的水分或装填介质状态以及实测接收质量 |
| starting_condition_role | 前景进入条件和可追溯锚点；农业种植或此前的中间产品生产属于上游 |
| product_classification_scope | 与 CPC 3.0 子类 21492 对应语义范围内的加工或保藏桃产品 |
| recursive_input_rule | 将同类别的外购加工或保藏桃投入记录为单独产品投入并关联其供应商数据集；不得在接收前景过程中再次展开 |
| upstream_dataset_requirement | 关联桃或桃中间产品、配方配料、加工助剂、能源载体、供水、包装、范围内进厂运输以及外送废物或废水处理的数据集 |
| disclosure | 声明起始产品状态、所选互斥保藏路线、产品形态、装填介质或配方、质量基准、初级包装、设施地域、参考期以及所有排除或外部处理的作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 所有前景过程 | 纳入从已声明设施接收到包装产品放行的全部直接控制作业和公用工程，包括实测拒收物、废水和直接排放。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入和外部处理 | 使用可追溯的上游或下游数据集表示外购物料投入、包装、能源载体、供水、范围内运输和外部废物处理。 | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 保藏与包装 | 对参考产品只实例化一条已声明保藏路线。将 `canned_heat_preservation` 作为所涵盖路线，而不得作为类别内所有产品的默认路线。 | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003` |
| `boundary_exclusions` | 下游生命周期及在其他类别下分类的产品 | 将分销、零售、使用和生命末期排除在本设施门口数据集之外，且不得把本 PCR 用于第 1 节所列排除产品类别。 | `unsd-cpc-3-0-21492`; `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_sorting` | 桃接收、分选与清洗 | required | 纳入实际接收状态和清洗做法；公用工程零使用行需有文件证据 | 前景进入与调理 | kg 接收桃或已声明桃中间产品 |
| `peach_preparation` | 桃制备 | required | 仅记录实际执行的制备步骤，如去皮、去核、切分或破碎 | 前景制备 | kg 已制备桃中间产品 |
| `preservation_packing` | 路线特定保藏与包装 | required | `canned_heat_preservation` 或 `other_declared_preservation` 中只实例化一项；同一参考产品数据集绝不得同时实例化两项 | 前景保藏与包装 | kg 已包装加工或保藏桃产品 |
| `finished_product_release` | 成品处理与放行 | required | 纳入设施门口前实际进行的受控冷却、暂存、内部移动、检验和放行 | 前景收尾 | kg 在设施门口放行的参考产品 |

### 过程：桃接收、分选与清洗（`receiving_sorting`）

#### 输入

##### 产品流

###### 接收的桃或已声明桃中间产品（`received_peach_feedstock`）

跨越设施门口的实测桃基原料是可追溯和前景质量平衡的锚点。

- 选定流：供应商特定桃或桃中间产品流
- 流属性/单位：Mass / kg
- 数量规则：实测验收交付质量加单独实测的接收拒收质量，均采用已声明状态基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性接收记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：根据现有路线和产品特定接收记录得出边界；当参考期覆盖代表性生产期时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗供水（`receiving_wash_water`）

仅当本过程发生清洗时记录供水；有文件证明的干式接收路线记录为零使用。

- 选定流：设施特定供水产品流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：进入接收和清洗作业的计量供水，扣除单独计量的内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收桃输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在路线特定仪表历史不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 m3/kg 验收桃输出
  - 基准：根据现有仪表和生产记录得出边界；在覆盖正常运行和清洁条件的代表性生产期后予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入制备的验收桃（`accepted_peaches`）

本中间输出根据实测转移质量或批次质量计算，并保持已声明产品状态基准。

- 选定流：设施特定验收桃中间流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；仅在无法直接测量转移量时使用有文件支持的批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性转移记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：根据接收、拒收和转移质量记录得出边界；当获得经核对的代表性生产期记录时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 接收拒收物和外来物（`receipt_rejects`）

按实际废物或回收产品去向，记录制备前移除的桃物料和外来物。

- 选定流：去向特定有机或混合废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性拒收记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：根据现有称重单和批次记录得出边界；当参考期覆盖具有代表性的进料质量时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与清洗废水（`receiving_wastewater`）

记录离开前景过程的废水，并与内部循环水分开。

- 选定流：去向特定废水流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：计量排放量或分配给本过程的设施水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收桃输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在过程级排放记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 m3/kg 验收桃输出
  - 基准：根据供水、循环和排放记录得出边界；在有代表性的水量平衡期间后予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：桃制备（`peach_preparation`）

#### 输入

##### 产品流

###### 验收桃（`preparation_peach_input`）

记录从接收过程转入的验收桃中间产品，不重复其上游负荷。

- 选定流：设施特定验收桃中间流
- 流属性/单位：Mass / kg
- 数量规则：与接收输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已制备桃中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性转移记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已制备桃中间产品
  - 基准：根据制备批次记录得出边界；当有代表性的转移和输出核对记录可用时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用水和加工助剂（`preparation_water_aids`）

记录所选路线在去皮、去核、切分、漂洗或稳定化中实际消耗的水和各项加工助剂；不得添加未使用的通用投入。

- 选定流：供应商特定供水和加工助剂产品流，在数据集中作为独立交换记录
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按批次计量、称量或通过发料记录核对的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已制备桃中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在配料和公用工程特定记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 m3/kg 已制备桃中间产品
  - 基准：为每项供给投入分别建立设施特定边界；当代表性批次和库存核对完成时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备桃中间产品（`prepared_peach_intermediate`）

记录实测已制备桃输出，并声明其形态以及水分或液体介质状态。

- 选定流：设施特定已制备桃中间流
- 流属性/单位：Mass / kg
- 数量规则：与制备移除物和排放核对的实测已制备输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性输出记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：根据输入、移除、排放和输出核对记录得出边界；在代表性生产期后予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 桃核、桃皮、修整料和不合格物料（`preparation_residues`）

按实测质量和实际去向记录每种分离残余物；有市场的输出属于共产品并遵循第 7 节，不得标为废物。

- 选定流：去向特定有机残余物、废物或共产品流
- 流属性/单位：Mass / kg
- 数量规则：按物料类别和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已制备桃中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性残余物记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已制备桃中间产品
  - 基准：根据路线和产品形态特定称重记录得出边界；当代表性批次记录覆盖正常分级和制备损失时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

按实测体积或有文件支持的水量平衡记录制备排放，并识别场内或外部处理。

- 选定流：去向特定废水流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：计量排放量，或供水量减去循环水和产品保留水后的计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已制备桃中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_records`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在制备排放记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 m3/kg 已制备桃中间产品
  - 基准：根据代表性供水、循环、保留和排放记录得出边界；当过程水量平衡完整时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：路线特定保藏与包装（`preservation_packing`）

#### 输入

##### 产品流

###### 已制备桃中间产品（`preservation_peach_input`）

按与制备输出相同的状态和质量基准记录已制备桃的转移。

- 选定流：设施特定已制备桃中间流
- 流属性/单位：Mass / kg
- 数量规则：过程间核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_materials`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性转移记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已包装产品输出
  - 基准：根据路线特定转移和成品批次记录得出边界；在代表性生产期后予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定装填介质和配方配料（`packing_medium_ingredients`）

记录所选路线实际添加的每项配料。对于罐藏产品，声明适用产品规格下的装填介质和产品形态。

- 选定流：供应商特定配料产品流，按配料分别记录
- 流属性/单位：Mass / kg
- 数量规则：称量添加量或经核对的批次配方量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：按已声明净质量基准计每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_materials`
- 来源：`codex-cxs-242-2003`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性配方记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已包装产品输出
  - 基准：根据现有批次单，为不同路线和配方分别得出边界；当代表性配方核对完成时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏能源和公用工程（`preservation_energy`）

所选保藏路线消耗电力、热能、燃料、压缩空气、制冷或其他公用工程时，应分别记录。

- 选定流：供应商和载体特定公用工程产品流，按载体分别记录
- 流属性/单位：Energy 或载体特定属性 / 记录单位，以及换算时的 MJ 或 kWh
- 数量规则：分表计量值，或基于设施仪表和账单记录的有文件支持分配值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性路线特定公用工程记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：载体特定单位/kg 已包装产品输出
  - 基准：按能源载体和互斥保藏路线分别建立边界；当有代表性分表计量或分配记录可用时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装组件（`primary_packaging`）

记录所选路线使用的每项容器、封口件、内衬、标签和其他初级包装组件，但不得把其质量计入参考产品质量。

- 选定流：供应商特定包装产品流，按组件和材料分别记录
- 流属性/单位：Mass 或经实测质量换算的 Count / kg 或 item
- 数量规则：发出量减去退回未使用量，并与可销售包装单元核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_materials`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在组件特定发料记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 item/kg 已包装产品输出
  - 基准：按包装形式和组件分别建立边界；当代表性发料、退料和包装单元记录完成核对时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装加工或保藏桃产品（`packed_peach_product`）

这是最终检验和放行前的路线特定产品输出。

- 选定流：Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测不含包装的产品净质量，并按已声明总净含量或沥干固形物基准表述
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_outputs`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性成品批次记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已包装产品输出
  - 基准：根据已声明净含量基准和核对后的路线特定批次记录得出边界；当代表性成品批次核对完成时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 保藏、灌装和包装残余物（`preservation_packing_waste`）

按物料和去向分别记录产品损失、配方残留、不合格包装产品以及包装边角料。

- 选定流：去向特定产品残余物和包装废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物类别和去向称量，或通过库存核对得到的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_outputs`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在废物类别记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 已包装产品输出
  - 基准：按路线、包装形式、废物类别和去向分别建立边界；当代表性记录完成核对时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏与包装废水（`preservation_wastewater`）

记录配方、容器准备、加工和清洗产生的路线特定排放，并扣除内部循环水。

- 选定流：去向特定废水流
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：计量排放量或有文件支持的过程水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_outputs`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在路线特定排放记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 或 m3/kg 已包装产品输出
  - 基准：根据路线特定供水、循环、保留和排放记录得出边界；在覆盖代表性水量平衡后予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接过程与公用工程排放（`preservation_direct_emissions`）

仅在燃料燃烧、制冷剂损失或其他直接释放发生于前景边界内时记录实测或计算基本流排放；否则保留零发生证据。

- 选定流：构建数据集时选择的物质特定 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或根据采集的燃料、设备和排放因子记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_energy`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在物质特定直接释放记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 物质/kg 已包装产品输出
  - 基准：按物质和路线根据现有运行记录分别建立边界；当代表性测量值或经评审因子计算值可用时予以替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：成品处理与放行（`finished_product_release`）

#### 输入

##### 产品流

###### 等待放行的已包装桃产品（`release_product_input`）

记录从保藏和包装过程转入的已包装产品，不重复其生产负荷。

- 选定流：Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入受控暂存和放行的实测产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_goods`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性转移记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：根据转移、暂存、拒收和放行记录得出边界；在代表性生产期后予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 搬运与受控贮存能源（`release_energy`）

仅当受控冷却、暂存、内部移动和检验发生于设施门口放行点之前时，记录这些活动的能源。

- 选定流：供应商和载体特定公用工程产品流
- 流属性/单位：Energy 或载体特定属性 / 记录单位，以及换算时的 MJ 或 kWh
- 数量规则：分表计量值，或按实际暂存时长由设施记录进行的有文件支持分配值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_goods`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在成品公用工程记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：载体特定单位/kg 参考产品
  - 基准：按载体和实际暂存时长分别建立边界；当有代表性分表计量或有文件支持的分配记录可用时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行参考产品（`released_reference_product`）

本流在最终检验后、于生产设施门口放行时实现功能单位。

- 选定流：Peaches, otherwise prepared or preserved `91d82100-aaec-459c-b815-abd64025b71e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将定量参考设为 1 kg，并按已声明基准上的放行产品净质量缩放核对后的批次清单
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_goods`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性核对完成前用于筛查批次归一化记录
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：核对完成时该范围应收敛至已声明定量参考；代表性放行质量记录验证后立即替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 暂存、损坏或不合格成品及包装（`release_waste`）

记录放行前移除的产品和包装，并按物料、回收状态和去向分别记录。

- 选定流：去向特定产品和包装废物流
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或以实测组件质量换算并经库存核对的包装件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_goods`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在代表性暂存与放行记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg/kg 参考产品
  - 基准：按去向分别为产品和每种包装材料建立边界；当代表性暂存、拒收和放行记录完成核对时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 成品处理期间的直接制冷剂或燃料相关释放（`release_direct_emissions`）

仅当受控贮存或场内搬运设备在前景边界内产生物质特定直接释放时纳入。

- 选定流：构建数据集时选择的物质特定 Tiangong 基本流
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或根据采集的设备、燃料和经评审因子记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_goods`
- 数量范围：不预设数值边界的条件性临时 QA 范围；仅在直接释放记录不完整时使用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 单位：kg 物质/kg 参考产品
  - 基准：按物质和设备根据现有运行记录分别建立边界；当代表性测量值或经评审计算值可用时予以替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 可独立计量的路线、产品和作业 | 通过分开互斥保藏路线，以及细分可独立计量的作业、批次、公用工程和废物处理来避免分配。 | `eu-pef-2021-2279` |
| `allocation_coproduct_status` | 桃核仁、桃皮、果肉、回收介质或其他有市场的输出 | 根据有文件支持的去向确定输出状态。有市场或生产性用途的输出作为共产品；送往处理且无生产性用途的物料作为废物。 | `eu-pef-2021-2279` |
| `allocation_residual_burdens` | 细分后无法避免的共享负荷 | 能证明因果物理关系时采用该关系。不存在可辩护物理关系时，采用符合研究方法且有文件支持的经济关系，并披露数值、期间、敏感性和分配份额。 | `eu-pef-2021-2279` |
| `allocation_recovery_claims` | 回收物料和输出能源 | 除非所选研究方法明确要求，否则不得扣除避免负荷或回收抵扣；应单独报告方法、被替代功能、数据来源和敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `receiving_sorting` | 接收桃、用水、验收转移、拒收物和排放 | 称重单、批次单、水表和排放记录 | delivery_id; supplier; origin; feedstock_state; received_mass; reject_mass; accepted_mass; water_supply; recirculated_water; discharge; timestamp | 记录每次交付并与生产批次核对 | kg 和 m3 | 每次交付及每批次 | 覆盖完整声明参考期和有代表性的来料质量 | 数据集范围内所有接收和清洗线 | 按路线和产品规格求和，再按所述基准归一化至验收输出和参考产品 | 经校准秤具和仪表记录；批次核对；异常日志 |
| `cp_preparation_records` | `peach_preparation` | 制备投入、输出、残余物和废水 | 批次单、秤具、发料记录、仪表和去向票据 | batch_id; input_mass; water; aid_identity; aid_mass; prepared_output_mass; residue_mass_by_destination; discharge; product_state | 记录每个制备批次，并核对投入、输出、产品保留液、残余物和排放 | kg 和 m3 | 每批次 | 覆盖正常作业和换线作业的完整声明参考期 | 数据集范围内所有制备线 | 在归一化前按产品形态和制备技术分别汇总 | 校准记录；配方或助剂发料记录；质量和水量平衡复核 |
| `cp_preservation_materials` | `preservation_packing` | 桃转移、配方配料和包装组件 | 批次配方、秤具、配料发料、包装发料与退料记录 | route; batch_id; peach_input_mass; ingredient_identity; ingredient_mass; package_component; component_mass_or_count; unused_return; packed_units | 采集每个互斥路线批次并核对发出和退回物料 | kg 和 item | 每批次 | 覆盖所选路线和包装形式的完整声明参考期 | 数据集范围内所有保藏和包装线 | 只在同一路线、配方和包装形式内汇总后归一化 | 已批准批次单；秤具检查；库存核对；包装规格 |
| `cp_preservation_energy` | `preservation_packing` | 能源、公用工程和直接释放 | 分表、账单、燃料日志、设备日志和经评审因子计算 | route; batch_id; carrier; meter_start; meter_end; allocation_driver; fuel_quantity; equipment_charge; refill; recovered_charge; emission_factor_id | 可行时按路线计量；否则使用因果运行驱动因素分配有文件支持的设施记录 | 记录的载体单位、MJ、kWh 和 kg 物质 | 每批次或仪表区间 | 覆盖包括可归属于生产的启动、停机和清洁在内的完整声明参考期 | 数据集范围内所有保藏公用工程和直接释放设备 | 对所选路线按载体和物质汇总；披露全部换算与分配 | 仪表校准；账单；设备维修记录；因子身份和版本 |
| `cp_preservation_outputs` | `preservation_packing` | 已包装输出、过程损失、包装边角料和废水 | 净含量检查、批次放行、废物称重、库存核对和排放记录 | route; batch_id; mass_basis; packed_net_mass; drained_mass_if_used; product_loss; waste_class; waste_destination; discharge | 记录每个批次，并把产品、包装和排放记录分开 | kg 和 m3 | 每批次 | 覆盖所选路线的完整声明参考期 | 数据集范围内所有灌装、保藏、包装和清洁作业 | 将输出与物料和用水投入核对后归一化至已包装输出 | 净含量或沥干质量检查；废物票据；排放仪表；平衡复核 |
| `cp_finished_goods` | `finished_product_release` | 转入产品、暂存公用工程、放行质量、拒收物和直接释放 | 仓库移动、放行记录、分表、维修日志和拒收记录 | batch_id; transfer_mass; hold_start; hold_end; storage_condition; energy_by_carrier; release_mass; reject_mass; package_count; component_mass; direct_release | 跟踪每批次从包装转入至设施门口放行 | kg、item、h、载体单位、MJ、kWh 和 kg 物质 | 每次移动、放行和仪表区间 | 覆盖包括有代表性暂存条件在内的完整声明参考期 | 设施门口前所有受控成品区域 | 按产品规格和暂存条件汇总；归一化至放行净质量 | 放行授权；库存核对；仪表和维修记录；异常日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单交换 | 用按已声明参考基准实测的放行产品净质量除以核对后的交换总量；包装质量不得进入分母。 | 交换总量；放行净质量；质量基准声明 | 每 1 kg 参考产品的交换量 |  |
| `calc_route_separation` | 共享设施记录 | 优先归集直接计量记录；仅把剩余共享量按有文件支持的因果驱动因素分配给所选路线，并保留与设施总量的核对。 | 路线仪表或批次记录；共享总量；驱动因素数值 | 路线特定交换量 | `eu-pef-2021-2279` |
| `calc_process_mass_balance` | 每个前景过程 | 在一致的状态和时间边界上核对实测投入与产品、共产品、废物、排放、产品保留水和有文件记录的库存变化；应调查物料差异而不得强制闭合。 | 实测投入；输出；库存变化；状态基准记录 | 有文件支持的质量平衡检查 |  |
| `calc_package_mass` | 按件记录的包装 | 用净发出组件件数乘以实测或供应商声明的组件质量，并保留组件特定换算证据。 | 发出件数；退回件数；组件质量 | 每参考产品的 kg 包装组件 |  |
| `calc_direct_release` | 直接排放 | 仅根据采集的活动记录和已识别的经评审因子或物料平衡，计算物质特定释放；保留因子身份和单位。 | 燃料或设备活动；因子或充注平衡；放行产品质量 | 每参考产品的 kg 物质 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和桃投入 | 保留参考流 UUID、供应商或内部流身份、产品形态、所选互斥路线、装填介质或配方、包装形式、质量基准、来源和批次关联。 | 数据集元数据、批准规格、供应商记录和批次追踪 |
| `dq_measurement` | 质量、用水、能源、件数和直接释放记录 | 对重要测量采用经校准或验证的仪器；保留原始单位、换算、零使用证据、分配驱动因素和异常处理。 | 校准或验证记录、仪表或秤具日志、账单、换算记录和异常日志 |
| `dq_temporal` | 前景参考期 | 覆盖所声明路线有代表性的生产、清洁、启动、停机和暂存条件；识别并论证被排除的异常期间。 | 生产日历、批次清单、仪表区间和排除理由 |
| `dq_completeness` | 全部四个前景过程 | 从接收桃投入到放行参考产品、共产品、废物、废水、库存变化和直接释放进行核对；记录缺失数据，不得用未声明的零值替代。 | 过程质量和水量平衡、完整性清单和缺失数据登记表 |
| `dq_route_specificity` | 保藏与包装 | 将罐藏路线记录与其他保藏路线记录分开，并仅对罐装核果路线适用 CXS 242-2003。 | 路线代码、生产线或批次标识、批准配方和产品规格 |
| `dq_provisional_replacement` | 每个 `reasoned_estimate` 筛选范围 | 将该范围视为不预设数值约束的条件性临时范围。在代表性前景记录、经评审经验范围或有来源支持的定量证据可用时予以替换，并记录替换及受影响批次。 | 缺失数据登记表、替换决定、经评审记录覆盖情况和带版本计算文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | manifest、参考流和数据集元数据 | 确认规范 PCR id、Tiangong 产品流 UUID、Mass UUID、Units of mass UUID、kg 单位以及全部必需限定信息与已声明参考对象完全一致。 | `unsd-cpc-3-0-21492` |
| `validation_mass_basis` | 参考数量和过程平衡 | 确认 1 kg 定量参考不含包装质量，并为液体介质产品声明总净含量或沥干桃固形物；拒绝没有文件支持的基准换算。 | `codex-cxs-242-2003` |
| `validation_route_exclusivity` | 过程图和清单 | 确认恰好实例化一条保藏路线。同时包含 `canned_heat_preservation` 和 `other_declared_preservation` 作为并行路线的数据集不合规。 | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003` |
| `validation_process_coverage` | 前景清单 | 确认全部四个 process id 均存在，每个条件发生流都有发生或零使用证据，且前景边界内全部投入、输出、废物、废水和直接释放均已处理。 | `eu-pef-2021-2279` |
| `validation_record_linkage` | 采集值和计算值 | 确认每个 `collected_record` 或 `calculated_from_collection` 行均关联已声明协议，并在相同路线、产品规格、期间和质量基准上核对至原始记录。 | `eu-pef-2021-2279` |
| `validation_allocation` | 共产品和共享作业 | 确认优先尝试细分，且每项剩余分配或回收声明均说明方法、驱动因素、数值、参考期、分配份额和敏感性。 | `eu-pef-2021-2279` |
| `validation_source_scope` | 外部来源的使用 | 确认 CPC 仅支持类别参考，CXS 242-2003 仅用于罐装核果路线，PEF 指南未被用作产品特定定量证据。 | `unsd-cpc-3-0-21492`; `codex-cxs-242-2003`; `eu-pef-2021-2279` |
| `validation_estimate_replacement` | 临时筛选范围 | 确认每个 `reasoned_estimate` 均明确为条件性估算，不含虚构来源 id 或强制数值，并在达到其声明的代表性记录或来源证据触发条件后予以替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线特定前景生产数据集，经评审后可作为单元过程或设施门口聚合数据集 |
| downstream_use | 方法和数据通过评审后，可在 `process` 或 `lifecyclemodel` 投影中支持 `secondary_dataset` 和 `background_dataset` 用途 |
| allowed_use | 当路线、形态、装填介质或配方、包装、地域、期间、质量基准和数据质量兼容时，用于所声明加工或保藏桃产品的设施门口建模 |
| excluded_use | 鲜桃、仅冷冻或干燥、糖渍、果酱、果冻、橘皮果酱类、饮料或混合水果产品；未声明的保藏路线混合；在不兼容净含量基准间比较；重要临时证据仍未解决时用于评审通过或发布用途 |
| required_metadata | 规范 PCR id；参考流 UUID 和质量对象；CPC 背景；互斥保藏路线；产品及粒形；装填介质或配方；净含量基准；包装形式；原料状态；设施地域；技术；参考期；分配；截断；上游数据集身份 |
| required_quality_disclosure | 原始记录覆盖率；校准与换算证据；质量和水量核对；路线分离；缺失数据处理；临时筛选范围及替换状态；来源版本；分配敏感性；数据质量局限 |
| update_trigger | 产品范围、保藏路线、配方或装填介质、净含量基准、包装形式、原料状态、设施技术、能源或水系统、分配或代表期发生变化；获得触发临时范围替换的代表性记录或经评审且有来源支持的定量证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21492` | official_guidance | 联合国统计司，《产品总分类（CPC）3.0 版》，子类 21492 “Peaches, otherwise prepared or preserved” | 仅用于分类参考和类别名称 |
| `codex-cxs-242-2003` | standard | Codex Alimentarius，CXS 242-2003，Standard for Canned Stone Fruits；批次总协调于 2025 年核对 Codex 现行标准清单 | 仅用于桃罐头路线的产品形态、装填介质和质量基准声明；不作为整个类别或定量清单值的证据 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods | 通用生命周期边界、数据质量、分配、计算和披露原则；不作为产品特定定量证据 |
