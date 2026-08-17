---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.t-shirts-singlets-and-other-vests-knitted-or-crocheted
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 针织或钩编的T恤衫、汗衫及其他背心

## 1. 范围与适用性

本 PCR 规定针织或钩编的成品 T 恤衫、汗衫、内衣背心、无袖背心及类似背心的前景数据包生产规则。对于在制造门口已达到销售或发运状态的服装，无论其申报的纤维成分、尺码范围、颜色和整理方式如何，均适用本 PCR；适用用途包括消费和专业用途。

前景边界从交付至服装制造系统的针织或钩编成品面料、缝纫线、辅料、配件、包装及其他外购输入开始。边界涵盖材料接收与准备、裁剪、缝制与组装、条件适用的成衣阶段湿法加工或整理、质量控制、包装、制造废物，以及条件适用的现场废水处理。纤维生产、纱线生产、针织、面料阶段染色与整理、外购能源生产及包装制造应采用可追溯的上游数据集表示；若上述活动由申报的前景运营方控制，则应纳入前景边界。

本 PCR 本身不表示分销、零售、消费者使用与护理、再使用或生命终结阶段。下游生命周期模型可另行加入这些阶段。作为面料销售的产品、机织服装、袜类、毛衣与套头衫、婴儿服装、其他针织服装、皮革或毛皮服装以及非纺织服装不属于本规范产品边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.t-shirts-singlets-and-other-vests-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28225，精确映射语境 |
| covered_products | 面向消费或专业用途的针织或钩编成品 T 恤衫、汗衫、内衣背心、无袖背心及其他背心 |
| excluded_products | 机织或非针织上装；袜类；毛衣、套头衫和开衫；婴儿服装；其他针织服装和配件；毛皮、皮革、纯塑料或非纺织服装；作为中间产品销售的面料 |
| representative_product | 一件成品短袖针织 T 恤衫，申报其纤维成分、尺码或尺码组合、颜色、整理方式及单件服装质量 |
| production_route | 交付的针织面料和部件 -> 接收与准备 -> 裁剪 -> 缝制与组装 -> 条件适用的成衣湿法整理 -> 质量控制与包装 |
| market_state | 制造门口可销售的成品服装；除非另有明确说明，产品质量不含分销包装和消费包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造门口已完成且可销售的针织或钩编 T 恤衫、汗衫或其他背心 |
| How much | 1 kg 服装净质量，不含包装 |
| How well | 符合申报的产品规格和质量验收准则，并说明成分、结构、尺码、颜色、整理方式和含湿状态 |
| How long or cycle | 一个申报的生产期间或批次；预期寿命、使用次数和护理情景是下游使用阶段的独立限定信息 |
| reference_flow_link | 以质量归一化的制造参考流；只有在采用实测单件质量并明确记录寿命和使用情景时，才可换算为单件或“一天穿着”的功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品服装净质量 |
| 参考产品流 | T-shirts, singlets and other vests, knitted or crocheted `4de987ca-f5f5-4001-a465-07f12ef9775f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装类型；纤维成分及质量百分比；针织或钩编结构；尺码或按产量加权的尺码组合；单件服装质量或其分布；颜色和染色/印花路线；整理处理；成品含湿状态；制造场址及地理区域；所含生产步骤；报告期；包装排除；投影到基于使用的功能单位时的预期使用次数和护理情景 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及全部质量归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿之后、包装之前测量验收服装净质量。将前景清单准确归一化到 1 kg 成品服装净质量。 |
| `packaging_mass_separation` | 消费包装和分销包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料分别测量包装。不得将包装质量计入 1 kg 参考产品。 |
| `item_to_mass_conversion` | 仅有服装件数的记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一报告期内按产品和尺码分层实测的净质量换算件数；保留样本数量、称量方法、平均质量和变异性。 |
| `mass_composition_closure` | 纤维、辅料、配件及产品成分声明 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和质量 % | 在一致的产品净质量基准上报告成分，并将申报的各组成质量与实测服装净质量核对闭合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至首个前景服装制造操作的针织或钩编成品面料、缝纫线、辅料、配件、包装及其他外购输入 |
| starting_condition_role | 进入服装制造的可追溯上游产品输入；不是无负荷原材料 |
| product_classification_scope | 成品参考产品为 CPC 3.0 28225；上游面料、纱线、化学品、公用工程、包装、运输及废物处理服务保留各自身份 |
| recursive_input_rule | 若输入已是 CPC 28225 成品服装，应将其记录为独立识别的再使用、返工或中间服装输入，不得在本前景数据包内递归重建其历史 |
| upstream_dataset_requirement | 面料及其他主要材料需要有代表性上游数据集；若纤维和纱线生产尚未包含在面料数据集中，也应建模；同时要求面料湿法加工、外购能源、包装制造、入厂运输和场外废物处理的代表性数据集 |
| disclosure | 声明纺纱、针织、染色、印花、整理、包装生产、运输、废水处理及废物处理步骤中哪些处于运营方控制之内或之外；披露地理区域、技术、报告期以及任何通用或代理数据集 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | 服装制造 | 纳入接收与准备、裁剪、缝制与组装、质量控制、包装及这些操作产生的废物。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_conditional_operations` | 成衣阶段整理和处理 | 当服装洗涤、染色、印花、固化、涂层、干燥、现场公用工程或废水处理由前景控制时纳入；否则识别有代表性的上游或服务数据集，并避免重复计算。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_upstream_traceability` | 外购材料和服务 | 不得将交付的面料、线、辅料、包装、能源、运输或废物处理视为无负荷；应连接到代表性上游数据集，或披露数据缺口。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `boundary_inventory_completeness` | 前景清单 | 至少核算产品成分质量和能源使用的 99%，并根据环境相关性评估排除项；记录每个截断项及用于验证它的证据。 | `epd-international-pcr-2024-03-apparel` |
| `boundary_downstream_separation` | 数据集使用 | 将分销、零售、消费者护理、再使用和生命终结阶段置于制造前景数据集之外，同时保留在生命周期模型中连接这些阶段所需的元数据。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_preparation` | 材料接收与准备 | required | Always | 面料和部件的前景接收、核验、调湿、松弛及发料 | 发往裁剪或组装的已准备材料 kg |
| `cutting` | 排料、铺布和裁剪 | required | Always | 将针织面料转换为服装裁片和部件的前景过程 | 验收并送往组装的裁片 kg |
| `garment_assembly` | 缝制与服装组装 | required | Always | 裁片、缝纫线、辅料、标签和配件的前景组装 | 组装服装 kg |
| `garment_wet_finishing` | 成衣阶段湿法加工与整理 | conditional | Include when washing, dyeing, printing, curing, coating, drying, or another garment-stage finish is performed under foreground control | 前景整理及相关公用工程、化学品、排放和废水 | 验收湿法整理服装 kg |
| `quality_packaging` | 质量控制与包装 | required | Always | 前景检验、测试、返工处置、包装和放行 | 1 kg 验收成品服装净质量 |
| `onsite_wastewater_treatment` | 现场废水处理 | conditional | Include when foreground wastewater is treated on site | 前景服装制造废水处理 | 处理废水 m3 |

### 过程：材料接收与准备（`material_receipt_preparation`）

#### 输入

##### 产品流

###### 交付的针织或钩编面料（`delivered_knitted_fabric`）

每种面料结构和成分跨越前景边界时应分别记录。确切 Tiangong 流取决于具体产品，应根据供应商身份、结构、成分和湿法加工状态选择。

- 选定流：Knitted or crocheted fabric；UUID 尚待按产品规格确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：实测仓库收货量，并按期初库存、期末库存和退货进行调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时面料输入筛查估计，应由前景质量平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.5
  - 上限：10
  - 单位：kg delivered fabric/kg net accepted finished garment
  - 基准：在产品特定裁剪产率未知时使用的宽泛首轮面料输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 交付的缝纫线、辅料、标签和配件（`delivered_components`）

按材料和供应商身份记录缝纫线、领口罗纹、包边、标签、紧固件、弹性材料及其他部件。不得将实质不同的部件合并为一个未知流。

- 选定流：Product-specific thread, trim, label, or accessory flow；UUID 尚待按部件规格确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按部件类型实测收货和库存发料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时部件输入筛查估计，应由物料清单记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg components/kg net accepted finished garment
  - 基准：宽泛首轮缝纫线、辅料、标签和配件输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 入厂运输服务（`inbound_transport`）

当上游数据集尚未包含运输时，应记录主要材料的实际供应商起点、交付距离、运输方式、车辆类别、装载情况及空返处理。

- 选定流：Route-specific freight transport service；UUID 尚待按路线和车辆确定
- 流属性/单位：Transport service / tkm
- 数量规则：交付质量乘以单程距离，或按已记录路线分配的往返距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时入厂运输筛查估计，应由路线记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：tkm/kg net accepted finished garment
  - 基准：供应商路线未知时的宽泛首轮货运服务
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发往生产的已准备面料和部件（`prepared_materials`）

记录检验、调湿和库存核对后验收并发往裁剪或组装的材料。

- 选定流：Internal prepared-material product flow；无需外部 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料类型实测发料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发往下一前景过程的材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：已准备材料输出归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg prepared material issued
  - 基准：输出归一化至 1 kg 已发出准备材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 拒收或退回的进厂材料（`incoming_material_rejects`）

将拒收、损坏或退回的材料与生产裁剪废料分开记录，并识别其处置方式。

- 选定流：Material-specific reject or waste flow；UUID 尚待按材料和处理路线确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测拒收或退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：进厂拒收质量平衡护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg rejected or returned material/kg received material
  - 基准：拒收比例不得超过对应接收材料质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：排料、铺布和裁剪（`cutting`）

#### 输入

##### 产品流

###### 已准备针织面料（`cutting_fabric_input`）

记录发往每个铺布、排料或裁剪工单的面料。

- 选定流：Internal prepared knitted-fabric flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测裁剪发料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时裁剪输入筛查估计，应由裁剪工单平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：5
  - 单位：kg prepared fabric/kg accepted cut components
  - 基准：排料产率未测量时的宽泛首轮裁剪输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 裁剪电力（`cutting_electricity`）

记录铺布、裁剪、抽风及直接关联设备使用的分表计量电力，或采用可辩护的分配值。

- 选定流：Site-specific supplied electricity；UUID 尚待按电压、地理区域和供电合同确定
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用量，或有记录的设备计量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时裁剪电力筛查估计，应由计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg accepted cut components
  - 基准：技术和计量情况未知时的宽泛首轮裁剪间电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收服装裁片（`cut_components`）

记录放行至组装的衣片和部件质量。

- 选定流：Internal cut-component product flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测或按质量平衡计算的验收裁片质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`mass-balance-identity`
- 数量范围：验收裁片输出归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted cut components
  - 基准：输出归一化至 1 kg 验收裁片
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 裁剪边角料和面料废料（`cutting_textile_waste`）

按材料成分和实际去向记录裁剪间边角料、缺陷裁片和可用余料。

- 选定流：Composition- and route-specific textile waste；UUID 尚待按成分和处理路线确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废物质量，并以面料输入减去验收裁片和库存变化进行交叉核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- 来源：`mass-balance-identity`; `epd-international-pcr-2024-03-apparel`
- 数量范围：临时裁剪废物筛查估计，应由裁剪工单平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：4
  - 单位：kg cutting waste/kg accepted cut components
  - 基准：与临时裁剪输入上限一致的宽泛首轮废物量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：缝制与服装组装（`garment_assembly`）

#### 输入

##### 产品流

###### 裁片、缝纫线、辅料、标签和配件（`assembly_materials`）

记录生产工单所消耗裁片及每种独立识别的组装部件质量。

- 选定流：Internal cut components and product-specific purchased components
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测发料减去有记录的退库
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_balance`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时组装输入筛查估计，应由生产工单平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：2
  - 单位：kg assembly materials/kg accepted assembled garments
  - 基准：组装损耗未测量时的宽泛首轮材料输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 组装电力（`assembly_electricity`）

记录缝纫、连接、熨烫、局部抽风及直接关联组装设备所用电力。

- 选定流：Site-specific supplied electricity；UUID 尚待按电压、地理区域和供电合同确定
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用量，或有记录的设备计量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时组装电力筛查估计，应由计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg accepted assembled garments
  - 基准：技术和计量情况未知时的宽泛首轮缝制与组装电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收组装服装（`assembled_garments`）

记录通过验收、进入整理或最终质量控制的服装。

- 选定流：Internal assembled-garment product flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测验收服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：验收组装服装输出归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted assembled garments
  - 基准：输出归一化至 1 kg 验收组装服装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 组装废料和不合格品（`assembly_waste`）

按材料和处置方式记录线头、修剪部件、不合格服装及其他组装废物。

- 选定流：Material- and route-specific assembly waste；UUID 尚待按成分和处理路线确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废物和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收组装服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时组装废物筛查估计，应由生产工单平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg assembly waste/kg accepted assembled garments
  - 基准：宽泛首轮组装不合格品和废料量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：成衣阶段湿法加工与整理（`garment_wet_finishing`）

#### 输入

##### 产品流

###### 进入湿法整理的服装（`wet_finishing_garments`）

记录转入成衣洗涤、染色、印花、涂层、固化、干燥或类似整理操作的组装服装。

- 选定流：Internal assembled-garment product flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理转移筛查估计，应由批次质量平衡替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.5
  - 上限：2
  - 单位：kg garments entering wet finishing/kg accepted wet-finished garments
  - 基准：允许申报含湿和工艺质量变化的宽泛首轮转移比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿法整理用水（`wet_finishing_water`）

将补充水与循环水和废水排放分别记录。

- 选定流：Site- and geography-specific water supply flow；UUID 尚待按水源和处理状态确定
- 流属性/单位：Volume / m3
- 数量规则：分配到申报整理批次的计量补充水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理用水筛查估计，应由批次计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：m3/kg accepted wet-finished garments
  - 基准：跨可选成衣整理路线的宽泛首轮补充水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿法整理电力（`wet_finishing_electricity`）

记录湿法加工设备、泵送、脱水、干燥、固化及直接关联控制装置的电力。

- 选定流：Site-specific supplied electricity；UUID 尚待按电压、地理区域和供电合同确定
- 流属性/单位：Energy / kWh
- 数量规则：申报整理工单的分表计量或批次分配电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理电力筛查估计，应由计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg accepted wet-finished garments
  - 基准：跨可选成衣整理技术的宽泛首轮电力估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿法整理热能和燃料（`wet_finishing_thermal_energy`）

分别记录各燃料、外购热或蒸汽载体，不得与电力或回收能源净额合并。

- 选定流：Carrier-, technology-, and geography-specific thermal-energy flow；UUID 尚待按载体和供应确定
- 流属性/单位：Energy / MJ
- 数量规则：分配到申报整理工单的计量、发票或设备日志热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理热能筛查估计，应由能源载体记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg accepted wet-finished garments
  - 基准：跨可选干燥和固化路线的宽泛首轮热能估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿法整理工艺化学品（`wet_finishing_chemicals`）

按产品、浓度和成分分别记录染料、颜料、助剂、洗涤剂、涂层材料和整理剂。

- 选定流：Recipe- and chemical-specific product flow；UUID 尚待按配方和供应商确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次配方数量，并与库存或发票记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理化学品筛查估计，应由批次配方替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg formulated process chemicals/kg accepted wet-finished garments
  - 基准：跨可选整理配方的宽泛首轮配制产品投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收湿法整理服装（`wet_finished_garments`）

记录完成申报整理和调湿操作后的验收服装。

- 选定流：Internal wet-finished garment product flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测调湿后输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：验收湿法整理服装输出归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted wet-finished garments
  - 基准：输出归一化至 1 kg 验收湿法整理服装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 湿法整理废水（`wet_finishing_wastewater`）

将废水体积与固体和液体残余物分别记录，并识别其现场或场外处理路线。

- 选定流：Route-specific wastewater flow；UUID 尚待按成分和处理路线确定
- 流属性/单位：Volume / m3
- 数量规则：分配到申报整理批次的计量废水排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时湿法整理废水筛查估计，应由排放计量替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：m3/kg accepted wet-finished garments
  - 基准：跨可选成衣整理路线的宽泛首轮废水估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 湿法整理残余物和不合格品（`wet_finishing_residues`）

按材料和实际处理路线分别记录污泥、废浴液、不合格服装、化学品容器及其他残余物。

- 选定流：Material- and route-specific finishing waste flow；UUID 尚待按成分和处理路线确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废物和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时整理残余物筛查估计，应由废物记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg residues/kg accepted wet-finished garments
  - 基准：宽泛首轮总残余物和不合格品量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 成衣整理直接排放（`wet_finishing_emissions`）

将实测或按许可计算的向空气、水体和土壤的排放记录为具有正确环境介质的独立基本流。

- 选定流：Pollutant- and compartment-specific Tiangong elementary flows；UUID 尚待按场址排放特征确定
- 流属性/单位：使用各选定基本流的参考流属性和单位
- 数量规则：报告期内的监测结果或有记录的法规计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收湿法整理服装
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时直接排放筛查上限，应由污染物特定监测替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg selected pollutant/kg accepted wet-finished garments
  - 基准：用于发现单位、环境介质或归一化错误的刻意宽泛临时上限
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：质量控制与包装（`quality_packaging`）

#### 输入

##### 产品流

###### 进入最终质量控制的服装（`qc_garments`）

记录进入最终检验、测试、折叠和包装的组装服装或湿法整理服装。

- 选定流：Internal assembled or wet-finished garment flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时最终质检输入筛查估计，应由验收记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：2
  - 单位：kg garments entering final quality control/kg net accepted finished garment
  - 基准：允许不合格品和返工的宽泛首轮输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 消费包装和分销包装（`packaging_materials`）

按材料和再生含量状态分别记录袋、纸箱、薄纸、标签、吊牌、衣架、托盘及其他包装。

- 选定流：Material-specific packaging product flow；UUID 尚待按包装规格确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测包装发料减去退回的未使用包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时包装筛查估计，应由包装物料清单替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg packaging/kg net accepted finished garment
  - 基准：宽泛首轮消费包装和分销包装总投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品服装净质量参考产品（`finished_tshirt_reference`）

这是定量参考输出。其质量不含包装，包装应单独记录。

- 选定流：T-shirts, singlets and other vests, knitted or crocheted `4de987ca-f5f5-4001-a465-07f12ef9775f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：根据实测验收净输出归一化后准确等于 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：参考流恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化的验收成品服装净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 质量不合格品和包装废物（`qc_packaging_waste`）

按材料和去向分别记录不合格服装、返工损耗、破损包装和包装废料。

- 选定流：Material- and route-specific waste flow；UUID 尚待按材料和处理路线确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测不合格品和包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品服装净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时质检和包装废物筛查估计，应由废物记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg quality rejects and packaging waste/kg net accepted finished garment
  - 基准：宽泛首轮不合格品和包装废物总输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：现场废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wwt_electricity`）

记录泵送、曝气、脱水、控制及直接关联处理设备所用电力。

- 选定流：Site-specific supplied electricity；UUID 尚待按电压、地理区域和供电合同确定
- 流属性/单位：Energy / kWh
- 数量规则：分配到废水处理的计量用量或有记录的设备分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时废水处理电力筛查估计，应由计量数据替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kWh/m3 wastewater treated
  - 基准：跨处理技术配置的宽泛首轮处理电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废水处理热能和燃料（`wwt_thermal_energy`）

当现场处理使用燃料、外购热或蒸汽时，分别记录各能源载体。

- 选定流：Carrier-, site-, and technology-specific thermal-energy flow；UUID 尚待按载体和供应确定
- 流属性/单位：Energy / MJ
- 数量规则：分配到废水处理的计量、发票或设备日志热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时废水处理热能筛查估计，应由能源载体记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：MJ/m3 wastewater treated
  - 基准：跨处理技术配置的宽泛首轮处理热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废水处理化学品（`wwt_chemicals`）

按配方分别记录混凝剂、絮凝剂、中和剂、营养剂、消毒剂及其他处理化学品。

- 选定流：Formulation-, site-, and technology-specific treatment-chemical flow；UUID 尚待按处理配置确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配到废水处理的发票、批次投加或库存平衡数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时废水处理化学品筛查估计，应由投加记录替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg formulated treatment chemicals/m3 wastewater treated
  - 基准：宽泛首轮处理化学品总投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 未处理前景废水（`untreated_wastewater`）

记录进入现场处理的实测废水体积，并保留污染物负荷测量值。

- 选定流：Site-specific wastewater flow；UUID 尚待按废水成分确定
- 流属性/单位：Volume / m3
- 数量规则：计量进水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：未处理废水输入归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m3/m3 wastewater treated
  - 基准：进水体积归一化至 1 m3 处理废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废水处理污泥和残余物（`wwt_sludge`）

按实测质量记录污泥和其他处理残余物；在可获得时同时记录干物质基准和实际去向。

- 选定流：Route-specific sludge or treatment-residue waste flow；UUID 尚待按成分和去向确定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测湿质量并保留干物质含量，或实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时处理污泥筛查估计，应由实测质量和干物质替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet sludge and residues/m3 wastewater treated
  - 基准：处理化学和脱水配置未知时的刻意宽泛湿质量估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 处理后出水排放（`treated_effluent_emissions`）

将排放水及实测污染物负荷记录为进入正确水体环境介质的独立基本流。

- 选定流：Water- and pollutant-specific Tiangong elementary flows；UUID 尚待按排放特征和环境介质确定
- 流属性/单位：使用各选定基本流的参考流属性和单位
- 数量规则：同一监测期内的出水体积乘以浓度，并按采样覆盖率调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：先按每 m3 处理废水，再按每 1 kg 验收成品服装净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`epd-international-pcr-2024-03-apparel`
- 数量范围：临时处理后出水污染物筛查上限，应由匹配监测替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg selected pollutant/m3 wastewater treated
  - 基准：用于发现单位、浓度或归一化错误的刻意宽泛临时上限
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共享前景操作 | 首先通过过程细分、分别计量产品线、批次、设备、公用工程和废物流，或扩展数据采集，使目标产品清单可以直接观测，从而避免分配。 | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `allocation_physical_relation` | 无法避免的共享过程负荷 | 无法细分时，采用随交付共产品变化且有记录的物理关系分担负荷，例如实测工艺时间、机器需求或有因果关系的质量吞吐量；不得仅因方便而选择质量分配。 | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的共享过程 | 经济分配只能作为最后后备方案。使用报告期价值，披露价格和货币基准，并进行敏感性分析以显示分配选择的影响。 | `epd-international-pcr-2024-03-apparel` |
| `allocation_waste_polluter_pays` | 制造废物和回收材料 | 在有文件证明满足废物终止条件之前，将废物处理归属于产生废物的产品系统。不得在本前景数据集内给予避免负荷信用。 | `epd-international-pcr-2024-03-apparel` |
| `allocation_scrap_classification` | 裁剪废料、不合格品和可再用余料 | 除非有记录的市场、技术规格、法规合规性和安全预期用途证明材料已不再是废物，否则按废物处理；披露任何共产品处理及分配。 | `epd-international-pcr-2024-03-apparel` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `material_receipt_preparation`; `garment_assembly` | 面料、缝纫线、辅料和配件收货及发料 | 仓库收货单、领料单、退料、盘点、规格 | material id; supplier; composition; wet-processing state; opening stock; receipts; issues; returns; closing stock; mass | 校准秤具与库存核对 | kg | 每次收货和生产工单；每月库存结账 | 与核心生产相同的代表性报告期 | 全部前景场址及受控外包操作 | 期初 + 收货 - 退货 - 期末，并通过可追溯工单分配给申报产品 | 秤具校准；库存核对；供应商规格；未解释差异日志 |
| `cp_transport_records` | `material_receipt_preparation` | 入厂货运 | 提单、路线记录、承运人记录 | material mass; origin; destination; distance; mode; vehicle; load factor; empty return; dataset inclusion flag | 供应商/承运人记录和有文件的路线计算 | kg; km; tkm | 每次交付 | 与材料收货一致的报告期 | 全部主要材料路线 | 质量乘以距离求和，不得重复计算已嵌入上游的数据 | 发票；路线证据；装载假设 |
| `cp_cutting_records` | `cutting` | 面料输入、裁片、边角料和不合格品 | 铺布、排料、裁剪工单、发料、输出和废物记录 | product id; fabric id; issue mass; returned mass; cut-component mass; off-cut mass; reject mass; marker/lay id | 校准秤具和裁剪工单核对 | kg | 每个裁剪工单 | 代表性生产期 | 范围内每个裁剪场址 | 将发出面料与验收裁片、退回材料、废物和库存变化核对 | 秤具校准；质量平衡闭合；签字工单完工记录 |
| `cp_energy_records` | `cutting`; `garment_assembly`; `garment_wet_finishing`; `quality_packaging`; `onsite_wastewater_treatment` | 电力、燃料、蒸汽和热 | 计量表、发票、设备日志、生产工时 | meter id; start/end reading; energy carrier; quantity; unit; equipment or line; runtime; product order | 优先分表计量；否则使用有记录的因果分配 | kWh; MJ; carrier reference unit | 连续或每班；每月核对 | 所有核心过程采用同一期间 | 每个场址和相关产线 | 汇总计量用量，仅对剩余共享用量采用已披露驱动因子进行分配 | 仪表校准；发票核对；分配工作表 |
| `cp_wet_finishing_records` | `garment_wet_finishing` | 水、配方化学品、公用工程、废水和残余物 | 批记录、配方、计量表、库存记录、排放日志 | batch id; garment input/output mass; water; chemical name/concentration/mass; energy; wastewater volume; residues | 批次记录、校准计量表和库存核对 | kg; m3; kWh; MJ | 每批；每月核对 | 与成品输出相同期间 | 每个湿法整理场址和技术 | 汇总申报批次并按验收调湿输出归一化 | 仪表校准；配方批准；化学品 SDS/规格；质量和水量平衡 |
| `cp_production_output` | `garment_assembly`; `garment_wet_finishing`; `quality_packaging` | 验收、不合格、返工和转移服装 | 生产工单、验收日志、秤具记录、质量记录 | product id; size; count; net mass; moisture condition; accepted; rejected; reworked; transfer destination | 校准秤具和质量体系记录 | count; kg | 每批或工单 | 代表性生产期 | 全部前景生产场址 | 按产品和尺码分层、以产量加权汇总 | 秤具校准；验收准则；返工追踪 |
| `cp_packaging_records` | `quality_packaging` | 消费包装和分销包装 | 物料清单、发料/退料日志、供应商规格 | packaging id; material; mass; recycled content; issue; return; packaged product count/mass | 称量包装与库存核对 | kg | 每个包装工单；每月核对 | 与包装输出相同期间 | 全部包装场址 | 按材料净发料量除以验收服装净质量 | 秤具校准；供应商规格；库存核对 |
| `cp_waste_records` | all foreground processes | 不合格品、废料、残余物和场外处理 | 废物日志、地磅票、转移联单、发票 | waste id; process; composition; mass; moisture or dry matter; destination; treatment; date; end-of-waste evidence | 实测质量和有记录的转移 | kg | 每次转移；每月核对 | 与过程输入输出相同期间 | 全部前景场址 | 按成分和路线汇总；与过程质量平衡核对 | 地磅票；持证承运人/处理记录；库存闭合 |
| `cp_emissions_records` | `garment_wet_finishing`; `onsite_wastewater_treatment` | 向空气、水体和土壤的直接排放 | 监测、实验室、许可和计算记录 | pollutant; compartment; concentration; flow rate or volume; time coverage; method; detection limit | 认可或有记录的监测及许可计算 | selected elementary-flow unit | 许可规定频次及事件特定采样 | 代表性报告期，并披露缺口 | 范围内每个点源 | 在匹配期间积分浓度和流量；未经披露不得替代低于检出限的结果 | 实验室报告；方法；校准；采样覆盖 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 进水、处理输入、出水、污泥和污染物负荷 | 进/出水计量表、实验室结果、化学品和能源记录、污泥联单 | volume; pollutant concentrations; treatment chemical; energy; sludge mass; dry matter; discharge compartment | 校准计量表、实验室测试和处理日志 | m3; kg; kWh; MJ | 连续体积计量；许可规定采样频次 | 与湿法加工生产相同期间 | 全部现场处理单元 | 在匹配期间进行水量和污染物平衡，再按服装输出归一化 | 仪表校准；实验室 QA；许可合规；污泥处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景数量 | 归一化数量 = 报告期数量 / 报告期验收服装净质量 | 各流数量；验收服装净质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_material_consumption` | 面料、缝纫线、辅料、配件和包装 | 消耗质量 = 期初库存 + 收货 - 退回供应商 - 期末库存；核对发料及未解释损失 | 库存和交易记录 | 按材料划分的消耗 kg | `mass-balance-identity` |
| `calc_cutting_balance` | 裁剪 | 发出面料 = 验收裁片 + 退回面料 + 边角料 + 不合格裁片 + 库存变化 + 有记录的测量差异 | 裁剪工单质量记录 | 核对后的裁剪输入和输出 | `mass-balance-identity` |
| `calc_item_mass` | 仅有件数的服装记录 | 服装净质量 = 验收件数 x 相同产品和尺码分层的实测平均净质量 | 件数；样本称量；分层产量权重 | 验收服装净质量 kg | `iso-14048-2002` |
| `calc_shared_utility` | 共享计量表 | 仅在直接计量之后分配剩余共享公用工程；使用有记录的因果驱动因子，并使分配总量与计量表核对 | 计量总量；直接计量总量；各产品因果驱动因子 | 按产品分配的公用工程 | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `calc_pollutant_load` | 直接排放和处理后出水 | 污染物负荷 = 匹配期间浓度 x 匹配期间气体或液体体积，并披露单位换算和采样覆盖率 | 浓度；体积或流量；时间；检出限处理 | 按环境介质划分的污染物质量 | `iso-14048-2002` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留服装类型、成分百分比、结构、尺码或尺码组合、单件净质量、颜色、整理方式、含湿状态、制造路线、场址、地理区域和报告期。 | 批准的规格；物料清单；生产工单；秤具记录 |
| `dq_core_specific_data` | 全部前景核心过程 | 对前景控制下的操作使用场址特定数据。全部核心数据应代表同一期间；偏离时须明确披露并说明理由。 | 计量、发票、生产、仓库、质量、废物和处理记录；`epd-international-pcr-2024-03-apparel` |
| `dq_upstream_representativeness` | 面料、纤维、纱线、湿法加工、包装、能源、运输和处理数据集 | 评估技术、地理、时间、成分、再生含量和系统边界的匹配性；主要材料优先采用供应商特定数据，并披露通用或代理数据的占比。 | 供应商数据集；代表性评估；敏感性分析；`epd-international-pcr-2024-03-apparel` |
| `dq_completeness` | 产品系统 | 证明至少覆盖 99% 的产品成分质量和能源，并筛查排除项的环境相关性。 | 质量和能源核对；排除项清单；敏感性或专家审查；`epd-international-pcr-2024-03-apparel` |
| `dq_measurement` | 质量、能源、水、排放和废物 | 识别仪器、校准状态、单位、采样频次、适用时的检出限、缺失数据处理和汇总方法。 | 校准证书；实验室 QA；计量和采样日志；`iso-14048-2002` |
| `dq_allocation` | 共享过程 | 保留细分尝试、因果关系、驱动因子数值、分配总量及任何后备分配的敏感性分析。 | 分配工作表；计量核对；敏感性分析；`epd-international-pcr-2024-03-apparel` |
| `dq_waste_route` | 全部废物和回收材料 | 识别成分、质量基准、去向、处理、承运人及废物终止证据；不得仅凭收集就假定发生回收。 | 转移联单；地磅记录；处理回执；废物终止证据 |
| `dq_uncertainty_and_gaps` | 发布的数据集 | 披露未解决 UUID、代理数据、估计值、缺失期间、排除项、质量/能源不平衡及敏感性结果。 | 质量披露和审查记录；`iso-14044-2006`; `iso-14048-2002` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品身份 | 若缺少规范 PCR id、CPC 28225 语境、服装类型、针织/钩编结构、纤维成分、尺码基准、净质量、颜色/整理方式、路线、场址或报告期，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_reference_flow` | 定量参考 | 除非归一化参考输出准确为 1 kg 验收服装净质量，并使用流 `4de987ca-f5f5-4001-a465-07f12ef9775f`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg，否则失败。 | `mass-balance-identity` |
| `validate_packaging_separation` | 包装 | 若包装质量计入参考产品净质量，或未按材料分别报告包装，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_required_processes` | 过程覆盖 | 若缺少接收/准备、裁剪、服装组装或质量/包装，则失败。成衣湿法整理和现场废水处理必须有明确的适用性决定。 | `epd-international-pcr-2024-03-apparel` |
| `validate_material_balance` | 基于质量的过程 | 若输入、验收输出、废物、退回和库存变化无法在申报测量不确定度内闭合，或以归一化掩盖无法解释的不平衡，则失败。 | `mass-balance-identity`; `iso-14048-2002` |
| `validate_energy_and_water` | 公用工程 | 若已纳入的前景操作缺少计量或有记录的公用工程数据，或共享公用工程未经计量核对和已披露因果驱动因子即被分配，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_waste_and_emissions` | 废物、废水和直接排放 | 若前景废物缺少成分和处置，或适用的废水/直接排放被遗漏、跨不相容环境介质汇总，或被赋予无依据的处理信用，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_completeness` | 产品系统 | 若数据集无法证明 99% 的产品成分质量和能源覆盖，或未记录和评估截断项，则失败。 | `epd-international-pcr-2024-03-apparel` |
| `validate_allocation` | 共享过程 | 若未说明理由即跳过细分、缺乏可辩护物理关系，或使用经济分配但没有报告期价值和敏感性分析，则失败。 | `epd-international-pcr-2024-03-apparel`; `iso-14044-2006` |
| `validate_upstream_links` | 外购输入和服务 | 若主要面料、其他主要材料、包装、能源、运输或场外处理被视为无负荷，或连接到未经评估的通用/代理数据集，则失败。 | `epd-international-pcr-2024-03-apparel`; `ec-pef-method-2021-2279` |
| `validate_data_quality_disclosure` | 发布的前景数据集 | 若未披露时间期间、地理、技术、供应商特定/通用/代理状态、测量方法、分配、截断、不确定性及未解决身份引用，则失败。 | `epd-international-pcr-2024-03-apparel`; `iso-14048-2002` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针织或钩编成品 T 恤衫、汗衫和其他背心的前景制造数据集 |
| downstream_use | `secondary_dataset`; 作为需要服装制造阶段的产品系统的 `background_dataset`；用于下游 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 服装制造 LCI、供应商特定或代表性生产建模、热点分析，以及连接到分别建模的上游面料和下游分销/使用/生命终结阶段 |
| excluded_use | 在未连接上游和下游阶段时声称完整的从摇篮到坟墓服装结果；在功能、寿命、性能、成分或护理情景不同且未建立功能等效性时比较服装；作为面料生产数据集使用 |
| required_metadata | PCR id 和版本状态；产品和流身份；成分；结构；尺码基准；单件净质量；颜色/整理方式；所含路线；场址和地理区域；报告期；参考 UUID；上游数据集身份；分配；截断；数据源 |
| required_quality_disclosure | 特定数据、选定通用数据和代理数据占比；测量和采样方法；时间、地理和技术代表性；质量和能源闭合；废物路线；假设；不确定性；敏感性；未解决 UUID 和范围证据缺口 |
| update_trigger | 产品结构、成分、供应商路线、技术、场址、能源供应、湿法加工配方、废物处理、分配或数据期间的变化，且该变化实质影响清单数量或任何申报环境结果；纠正错误并更新陈旧上游数据集 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epd-international-pcr-2024-03-apparel` | standard | International EPD System, PCR 2024:03, Apparel, except fur and leather apparel, version 1.0.0, 2024-05-28, valid to 2028-05-28. https://www.environdec.com/pcr-library/pcr_fe5934d8-029d-4c48-19ea-08db3f138c24（PDF：https://api.prod.environdec.com/api/v2/EPDLibrary/Files/e91dc7c8-2c6c-4f16-e74f-08dc7a67eb3e/Data），检索于 2026-07-30。 | CPC 282 范围；功能使用限定信息；上游/核心/下游过程覆盖；质量控制、包装、废物和废水纳入；99% 完整性；分配层级；特定数据和披露规则 |
| `ec-pef-method-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf，检索于 2026-07-30。 | 生命周期范围、材料/排放/废物建模、清单编制、可重复性、验证及前景数据集与完整产品足迹的连接 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, with Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html，检索于 2026-07-30。 | LCI 目标和范围、清单、分配、解释、报告、审查及局限性原则 |
| `iso-14048-2002` | standard | ISO/TS 14048:2002, Environmental management - Life cycle assessment - Data documentation format. https://www.iso.org/standard/29872.html，检索于 2026-07-30。 | 数据采集、计算、数据质量、单位、采样及审查证据的透明记录 |
| `mass-balance-identity` | method_factor | 对实测前景输入、输出、废物、退回及库存变化应用质量守恒恒等式；无外部数值因子。 | 参考归一化、材料消耗、裁剪核对及质量平衡校验 |
